import React, { useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './Predict.css';

// Register necessary chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Predict = () => {
  const [ticker, setTicker] = useState('AAPL');
  const [predictions, setPredictions] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);  // Set loading state to true when starting API request
    setError(null);    // Reset any previous errors

    try {
      // Send POST request to Flask API
      const response = await axios.post('http://127.0.0.1:5000/predict', {
        ticker_symbol: ticker,
      });

      // Set predictions in state
      setPredictions(response.data);
    } catch (error) {
      setError('Error fetching prediction');
      setPredictions(null);
    } finally {
      setLoading(false);  // Set loading to false after API response
    }
  };

  // Prepare chart data if predictions are available
  const chartData = predictions && {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],  // Labels for the next 5 days
    datasets: [
      {
        label: 'Predicted Price',
        data: predictions.predicted_prices_next_week, // The array of predicted prices for the next 5 days
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="predict-container">
      <h1 className="title">Stock Price Prediction</h1>
      
      {/* Input and Button */}
      <div className="input-container">
        <input
          type="text"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          className="ticker-input"
          placeholder="Enter Stock Ticker Symbol"
        />
        <button onClick={handleSubmit} className="predict-button" disabled={loading}>
          {loading ? 'Loading...' : 'Predict'}
        </button>
      </div>

      {/* Error Message */}
      {error && <div className="error">{error}</div>}

      {/* Prediction Results */}
      {predictions && chartData && (
        <div className="prediction-result">
          <h2 className="result-title">Prediction for {predictions.ticker}</h2>
          
          {/* Sentiment Score */}
          <div className="prediction-details">
            <p><strong>Sentiment Score:</strong> {predictions.sentiment_score}</p>
          </div>
          
          {/* News */}
          <div className="news-container">
            <h3>Latest News:</h3>
            <p>{predictions.news}</p>
          </div>

          {/* Chart */}
          <div className="chart-container">
            <Line data={chartData} />
          </div>

          {/* Predicted Prices List */}
          <div className="predicted-prices">
            <h3>Predicted Prices for Next Week:</h3>
            <ul>
              {predictions.predicted_prices_next_week.map((price, index) => (
                <li key={index}>Day {index + 1}: ${price.toFixed(2)}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Predict;
