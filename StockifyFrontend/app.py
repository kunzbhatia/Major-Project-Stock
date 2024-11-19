import numpy as np
import pandas as pd
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from nltk.sentiment.vader import SentimentIntensityAnalyzer
import tensorflow as tf
from tensorflow.keras.models import load_model
import yfinance as yf
import logging
import datetime
import plotly.express as px
import plotly.io as pio
from sklearn.preprocessing import MinMaxScaler
import requests

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load pre-trained LSTM model
model = load_model('stock_lstm_model.h5')  # Replace with your actual model file path

# Initialize the sentiment analyzer
sia = SentimentIntensityAnalyzer()

# Function to fetch stock data
def fetch_stock_data(ticker):
    try:
        stock = yf.Ticker(ticker)
        data = stock.history(period="1y")  # Last 1 year of stock data
        if data.empty:
            raise ValueError("No data found for the given ticker symbol.")
        return data
    except Exception as e:
        logging.error(f"Error fetching stock data: {str(e)}")
        raise  # Re-raise the error to be caught in the API response

# Function for NLTK sentiment analysis (for demonstration purposes)
def analyze_sentiment(text):
    if not isinstance(text, str) or not text.strip():
        return 0.0  # Default sentiment score for empty or invalid text
    
    sentiment_score = sia.polarity_scores(text)
    return sentiment_score['compound']  # Returns the compound sentiment score

# Function to fetch stock-related news
def fetch_stock_news(ticker):
    api_key = "3a3a892e5f964a2d897b269c94cb56cb"  # Replace with your actual API key
    url = f"https://newsapi.org/v2/everything?q={ticker}&apiKey={api_key}"

    response = requests.get(url)
    news_data = response.json()

    if news_data["status"] == "ok":
        articles = news_data["articles"]
        news_text = ""
        for article in articles[:5]:  # Limit to top 5 articles
            # Ensure that the title and description are not None before concatenation
            title = article.get('title', '')
            description = article.get('description', '')

            # Only concatenate if the values are not None
            news_text += (title or '') + " " + (description or '') + " "
        return news_text.strip()  # Return the concatenated news text
    else:
        return ""  # Return empty string if no news data found
def prepare_data_for_lstm(data):
    if 'Close' not in data.columns:
        raise ValueError("The stock data must contain a 'Close' column.")
    
    data = data[['Close']]  # Only using the closing price for prediction
    
    # Scale data to the range [0, 1] for LSTM input
    scaler = MinMaxScaler(feature_range=(0, 1))
    data_scaled = scaler.fit_transform(data)

    return data_scaled, scaler

# Function to predict next week's prices (simplified)
def predict_next_week(model, last_prices, scaler, days=5):
    predictions = []
    
    # Predicting using the last available prices (rolling window)
    for i in range(days):
        last_input = last_prices[-60:].reshape(1, 60, 1)  # last 60 points as input
        next_day_prediction = model.predict(last_input)
        
        # Inverse scaling to get the predicted actual price
        predicted_price = scaler.inverse_transform(next_day_prediction)
        predictions.append(predicted_price[0][0])  # Append the predicted value as a float
        
        # Append the predicted value to the rolling window for next prediction
        last_prices = np.append(last_prices, next_day_prediction)[-60:]  # Keep the last 60 prices only

    return predictions

# Home route to check if the Flask app is running
@app.route('/')
def home():
    return 'Flask app is running!'

# Predict function that combines NLTK sentiment analysis with LSTM predictions

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the ticker symbol from the request
        data = request.get_json()
        ticker_symbol = data.get('ticker_symbol')

        if not ticker_symbol:
            return jsonify({"error": "Ticker symbol is required"}), 400

        logging.info(f"Received request for ticker: {ticker_symbol}")

        # Fetch stock data for the given ticker
        stock_data = fetch_stock_data(ticker_symbol)
        logging.info(f"Fetched stock data for {ticker_symbol}: {stock_data.head()}")  # Display only first 5 rows for logging

        # Prepare the data for the LSTM model
        last_prices, scaler = prepare_data_for_lstm(stock_data)
        logging.info(f"Prepared data for LSTM: {last_prices[-10:]}")  # Display only last 10 data points for logging

        # Get the predictions for the next week (5 days)
        next_week_prediction = predict_next_week(model, last_prices, scaler)
        logging.info(f"Predicted next week's prices: {next_week_prediction}")

        # Fetch stock-related news for sentiment analysis
        news_text = fetch_stock_news(ticker_symbol)

        sentiment_score = analyze_sentiment(news_text) if news_text else 0.0  # If no news, default to 0.0
        logging.info(f"Sentiment score: {sentiment_score}")

        # Prepare the result
        result = {
            "ticker": ticker_symbol,
            "predicted_prices_next_week": next_week_prediction,
            "sentiment_score": sentiment_score,
            "news": news_text  # Include news articles in the response
        }

        # Ensure all predictions are float for JSON compatibility
        result["predicted_prices_next_week"] = [float(price) for price in next_week_prediction]
        result["sentiment_score"] = float(sentiment_score)

        # Create dynamic Plotly graph
        dates = pd.date_range(datetime.datetime.today(), periods=5).strftime('%Y-%m-%d')  # Next 5 days
        graph = px.line(x=dates, y=next_week_prediction, title=f'{ticker_symbol} Stock Price Predictions for Next Week')
        
        # Convert the Plotly graph to HTML
        graph_html = pio.to_html(graph, full_html=False)

        # Add the graph to the result
        result['graph_html'] = graph_html
        
        return jsonify(result), 200

    except Exception as e:
        logging.error(f"Error occurred: {str(e)}")
        return jsonify({"error": str(e)}), 500



# Run the Flask app on port 5000
if __name__ == '__main__':
    app.run(debug=True)
