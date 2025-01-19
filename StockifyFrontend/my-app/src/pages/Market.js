import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import icon from "../images/graph.jpeg"; // Graph icon import

let cash = 100000; // Initial cash

function Market() {
  const [stocks, setStocks] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [bidPrice, setBidPrice] = useState(0);
  const [selectedStock, setSelectedStock] = useState(null);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [tradeType, setTradeType] = useState(""); // "buy" or "sell"
  const navigate = useNavigate();

  const API_KEY = "API_KEYcd0phbp9cFasujBXzd2ozlPuodN7LJ5T4vILXnriXsZW38";
  const STOCKS = ["aapl", "tsla", "amzn", "v", "goog"]; // List of stocks in lowercase

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const stockDataPromises = STOCKS.map((symbol) =>
          fetch(
            `https://api.allorigins.win/get?url=${encodeURIComponent(
              `https://api.finage.co.uk/last/stock/${symbol.toUpperCase()}?apikey=${API_KEY}`
            )}`
          )
            .then(res => res.json())
            .then(data => JSON.parse(data.contents)) // Since AllOrigins wraps the response in 'contents' key
        );
        const data = await Promise.all(stockDataPromises);
        setStocks(data);
      } catch (err) {
        setError("Failed to fetch stock data");
      }
    };
    fetchStockData();
    const interval = setInterval(fetchStockData, 5000); // Refresh every 5 seconds
    return () => clearInterval(interval);
  }, []);
  

  const handleTrade = (type, stock) => {
    setSelectedStock(stock);
    setTradeType(type);
    setShowModal(true);
  };

  const handleTradeSubmit = async (symbol, type) => {
    const itemPrice = selectedStock.bid;
    if (type === "buy" && cash < quantity * itemPrice) {
      setError("Insufficient funds!");
      return;
    }

    const newOrder = {
      symbol: symbol.toUpperCase(), // Ensure symbol is uppercase for consistency
      quantity: quantity,
      bidPrice: itemPrice,
      type: type,
    };

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/user/${type}Stock`,
        newOrder,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );

      setQuantity(0);
      setBidPrice(0);
      setShowModal(false);

      if (response.data.success) {
        // Update cash balance
        const totalAmount = quantity * itemPrice;
        cash = type === "buy" ? cash - totalAmount : cash + totalAmount;

        navigate("/Portfolio", { state: { newOrder, cash } });
      } else {
        setError(`${type === "buy" ? "buy" : "sell"} failed`);
      }
    } catch (err) {
      setError("An error occurred during the trade");
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setQuantity(0);
    setError("");
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif", backgroundColor: "#f4f7f6" }}>
      <header style={{ backgroundColor: "#2e3445", color: "white", padding: "10px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <a href="#" style={{ fontSize: "1.5em", textTransform: "uppercase", fontWeight: "bold" }}>Stockify</a>
        <nav>
          <a href="/" style={{ color: "white", textDecoration: "none", padding: "10px 20px", fontSize: "1em", margin: "0 10px" }}>Home</a>
          <a href="/Market" style={{ color: "white", textDecoration: "none", padding: "10px 20px", fontSize: "1em", margin: "0 10px" }}>Market</a>
          <a href="/Portfolio" style={{ color: "white", textDecoration: "none", padding: "10px 20px", fontSize: "1em", margin: "0 10px" }}>Portfolio</a>
          <Button onClick={() => navigate("/")} style={{ backgroundColor: "#d9534f", color: "white", border: "none", padding: "8px 16px", cursor: "pointer" }}>Logout</Button>
        </nav>
      </header>

      <div style={{ margin: "20px 0", textAlign: "center" }}>
        <h1 style={{ fontSize: "2em", marginBottom: "10px" }}>Stock Market Data</h1>
        <h2 style={{ fontSize: "1.5em", marginBottom: "20px" }}>Available Cash: ${cash.toFixed(2)}</h2>
        {error && <p style={{ color: "red", fontSize: "1.2em" }}>{error}</p>}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {stocks.map((stock) => (
          <div key={stock.symbol} style={{ backgroundColor: "white", border: "1px solid #ccc", padding: "15px", margin: "15px", borderRadius: "8px", width: "300px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s ease" }}>
            <h3 style={{ fontSize: "1.5em", marginBottom: "15px" }}>{stock.symbol.toUpperCase()}</h3>
            <div style={{ marginBottom: "20px" }}>
              <p><strong>Ask Price:</strong> ${stock.ask}</p>
              <p><strong>Bid Price:</strong> ${stock.bid}</p>
              <p><strong>Ask Size:</strong> {stock.asize} shares</p>
              <p><strong>Bid Size:</strong> {stock.bsize} shares</p>
              <p><strong>Last Updated:</strong> {new Date(stock.timestamp).toLocaleString()}</p>
              <img src={icon} alt="Stock Graph" style={{ width: "100px", height: "50px", objectFit: "contain", marginTop: "10px" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button onClick={() => handleTrade("buy", stock)} style={{ backgroundColor: "#5cb85c", color: "white", padding: "10px 20px", cursor: "pointer" }}>Buy</Button>
              <Button onClick={() => handleTrade("sell", stock)} style={{ backgroundColor: "#d9534f", color: "white", padding: "10px 20px", cursor: "pointer" }}>Sell</Button>
            </div>
          </div>
        ))}
      </div>

      {/* Trade Modal */}
      {selectedStock && (
        <Modal show={showModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{tradeType === "buy" ? "Buy" : "Sell"} {selectedStock.symbol.toUpperCase()}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <label style={{ fontSize: "1.2em" }}>Quantity:</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Enter quantity"
                style={{ width: "100%", padding: "8px", fontSize: "1em", marginTop: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
              />
              <br />
              <p style={{ marginTop: "10px" }}><strong>Bid Price:</strong> ${selectedStock.bid}</p>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => handleTradeSubmit(selectedStock.symbol, tradeType)} style={{ backgroundColor: "#5cb85c", color: "white" }}>
              {tradeType === "buy" ? "Buy" : "Sell"}
            </Button>
            <Button variant="secondary" onClick={closeModal} style={{ backgroundColor: "#ccc" }}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default Market;
