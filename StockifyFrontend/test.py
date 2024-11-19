from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Dropout
from sklearn.preprocessing import MinMaxScaler
import yfinance as yf
import numpy as np
import pandas as pd

# Fetch stock data
def fetch_stock_data(ticker):
    stock = yf.Ticker(ticker)
    data = stock.history(period="1y")  # Last one year of stock data
    return data

# Prepare data for LSTM
def prepare_data_for_lstm(data):
    data = data[['Close']]  # Using closing price for prediction
    scaler = MinMaxScaler(feature_range=(0, 1))
    scaled_data = scaler.fit_transform(data)

    X, y = [], []
    for i in range(60, len(scaled_data)):  # Use last 60 days of data for prediction
        X.append(scaled_data[i-60:i, 0])  # Feature data
        y.append(scaled_data[i, 0])  # Target data (next day price)

    X, y = np.array(X), np.array(y)
    X = np.reshape(X, (X.shape[0], X.shape[1], 1))  # Reshape for LSTM
    return X, y, scaler

# Train the LSTM model
def train_lstm_model(ticker):
    data = fetch_stock_data(ticker)
    X, y, scaler = prepare_data_for_lstm(data)

    model = Sequential()
    model.add(LSTM(units=50, return_sequences=True, input_shape=(X.shape[1], 1)))
    model.add(Dropout(0.2))
    model.add(LSTM(units=50, return_sequences=False))
    model.add(Dropout(0.2))
    model.add(Dense(units=1))  # Output layer for prediction

    model.compile(optimizer='adam', loss='mean_squared_error')
    model.fit(X, y, epochs=10, batch_size=32)  # Train the model

    # Save the model
    model.save('stock_lstm_model.h5')  # Save the trained model to a file

# Train the model (for demonstration)
train_lstm_model('AAPL')
