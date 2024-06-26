import React from "react";
import "../components/Portfolio/Portfolio.css";
import "../components/Marketpg/market.css";
import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { removeToken } from "../services/LocalStorageService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { unSetUserToken } from "../features/authSlice";
import { unsetUserInfo } from "../features/userSlice";
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import axios from "axios";

export const Portfolio = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);
  const [data6, setData6] = useState([]);
  const [data7, setData7] = useState([]);
  const [data8, setData8] = useState([]);
  const [data9, setData9] = useState([]);
  const [data10, setData10] = useState([]);
  const [data11, setData11] = useState([]);
  const [data12, setData12] = useState([]);

  useEffect(() => {
    const interval = setInterval(()=>{
      fetch(
        "https://api.iex.cloud/v1/data/CORE/QUOTE/AAPL?token=pk_9439eb63e8a14f4280780a7026a077ad"
      )
        .then((response) => response.json())
        .then((data1) => setData1(data1));
    }, 1000);
    return ()=>clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(()=>{
    fetch(
      "https://api.iex.cloud/v1/data/CORE/QUOTE/TWTR?token=pk_9439eb63e8a14f4280780a7026a077ad"
    )
      .then((response) => response.json())
      .then((data2) => setData2(data2));
    }, 1000);
    return ()=>clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(()=>{
    fetch(
      "https://api.iex.cloud/v1/data/CORE/QUOTE/AMZN?token=pk_9439eb63e8a14f4280780a7026a077ad"
    )
      .then((response) => response.json())
      .then((data3) => setData3(data3));
    }, 1000);
    return ()=>clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(()=>{
    fetch(
      "https://api.iex.cloud/v1/data/CORE/QUOTE/TSLA?token=pk_9439eb63e8a14f4280780a7026a077ad"
    )
      .then((response) => response.json())
      .then((data4) => setData4(data4));
    }, 1000);
    return ()=>clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(()=>{
    fetch(
      "https://api.iex.cloud/v1/data/CORE/QUOTE/BAC?token=pk_9439eb63e8a14f4280780a7026a077ad"
    )
      .then((response) => response.json())
      .then((data5) => setData5(data5));
    }, 1000);
    return ()=>clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(()=>{
    fetch(
      "https://api.iex.cloud/v1/data/CORE/QUOTE/ORCL?token=pk_9439eb63e8a14f4280780a7026a077ad"
    )
      .then((response) => response.json())
      .then((data6) => setData6(data6));
    }, 1000);
    return ()=>clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(()=>{
    fetch(
      "https://api.iex.cloud/v1/data/CORE/QUOTE/GOOG?token=pk_9439eb63e8a14f4280780a7026a077ad"
    )
      .then((response) => response.json())
      .then((data7) => setData7(data7));
    }, 1000);
    return ()=>clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(()=>{
    fetch(
      "https://api.iex.cloud/v1/data/CORE/QUOTE/NKE?token=pk_9439eb63e8a14f4280780a7026a077ad"
    )
      .then((response) => response.json())
      .then((data8) => setData8(data8));
    }, 1000);
    return ()=>clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(()=>{
    fetch(
      "https://api.iex.cloud/v1/data/CORE/QUOTE/JPM?token=pk_9439eb63e8a14f4280780a7026a077ad"
    )
      .then((response) => response.json())
      .then((data9) => setData9(data9));
    }, 1000);
    return ()=>clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(()=>{
    fetch(
      "https://api.iex.cloud/v1/data/CORE/QUOTE/MSFT?token=pk_9439eb63e8a14f4280780a7026a077ad"
    )
      .then((response) => response.json())
      .then((data10) => setData10(data10));
    }, 1000);
    return ()=>clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(()=>{
    fetch(
      "https://api.iex.cloud/v1/data/CORE/QUOTE/NVDA?token=pk_9439eb63e8a14f4280780a7026a077ad"
    )
      .then((response) => response.json())
      .then((data11) => setData11(data11));
    }, 1000);
    return ()=>clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(()=>{
    fetch(
      "https://api.iex.cloud/v1/data/CORE/QUOTE/V?token=pk_9439eb63e8a14f4280780a7026a077ad"
    )
      .then((response) => response.json())
      .then((data12) => setData12(data12));
    }, 1000);
    return ()=>clearInterval(interval);
  }, []);

  const [openOrders, setOpenOrders] = useState([]);
  const [holdings, setHoldings] = useState([]);
  const [accbalance, setBalance] = useState([]);
  // const [mtm,setmtm] = useState();

  
  const fetchData = async () => {
    axios.get(
      `http://127.0.0.1:8000/api/user/getStockTransactions`,
     
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    ).then(function (response) {
	  console.log(response);
    setOpenOrders(response.data.orders);
    
});
axios.get(
  `http://127.0.0.1:8000/api/user/getHoldings`,
  {
    headers: {
      authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  }
).then(function (response1) {
console.log(response1);
setHoldings(response1.data.orders);
});
axios.get(
  `http://127.0.0.1:8000/api/user/getBalance`,
  {
    headers: {
      authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  }
).then(function (response2) {
console.log(response2);
setBalance(response2.data.accbalance);

});

  };

  
  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch(unsetUserInfo({ name: "", email: "" }));
    dispatch(unSetUserToken({ access_token: null }));
    removeToken();
    navigate("/");
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="Portfolio-container">
      <header className="portfolio-header">
        <a href="#" className="portfolio-logo">
          Stockify
        </a>
        <nav className="portfolio-navbar">
          <a href="/">Home</a>
          <a href="/Market">Market</a>
          <a href="/Portfolio">Portfolio</a>
          <Button
            className="btn4"
            color="rgba(46, 52, 69, 1)"
            onClick={handleShow}
          >
            Logout
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Body>Are you sure you want to logout?</Modal.Body>
            <Modal.Footer>
              <Button color="success" onClick={handleLogout}>
                <font color="black">Logout</font>
              </Button>
              <Button color="danger" onClick={handleClose}>
                <font color="black">Cancel</font>
              </Button>
            </Modal.Footer>
          </Modal>
        </nav>
      </header>
      <section className="your_portfolio">
        <div className="portfolio-container">
          <p className="portfolio-container-title">Your Portfolio
		  <div className="toggle">
          <FormControlLabel
          value="top"
          control={<Switch color="primary" />}
          label="Enable automatic trading"
          labelPlacement="top"
        />
        </div>
		  </p>
          <div className="portfolio-gradient-cards">
          
            <div className="portfolio-card">
              <div className="portfolio-container-card bg-white-box">
              <p className="portfolio-card-title">Cash</p>
              {accbalance.map((acc, index) => (
                <p className="portfolio-card-description">$ {acc.cash}</p>
                ))} 
              </div>
            </div>

            <div className="portfolio-card">
              <div className="portfolio-container-card bg-yellow-box">
                <p className="portfolio-card-title">Profit / Loss</p> 
                {accbalance.map((acc, index) => (
                <p className="portfolio-card-description">$ {acc.mtm}</p>
                ))} 
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="portfolio-holdings">
        <h2 className="portfolio-h2">Holdings</h2>
        <div className="portfolio-table-wrapper portfolio-table-wrapper-scroll-y portfolio-my-custom-scrollbar">
          <table className="portfolio-fl-table">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Quantity</th>
                <th>Current Price</th>
              </tr>
            </thead>
            <tbody>
              {holdings.map((Order, index) => (
                      <tr>
                        <td key={index}>{Order.symbol}</td>
                        <td>{Order.holding_count}</td>  
                        {Order.symbol === "AAPL" ? (
  data1.map((item)=>{
    return <td>$ {item.latestPrice}</td>
  })
) : Order.symbol == "TWTR" ? (
  data2.map((item)=>{
    return <td>$ {item.latestPrice}</td>
  })
) : Order.symbol == "AMZN" ? (
  data3.map((item)=>{
    return <td>$ {item.latestPrice}</td>
  })
) : Order.symbol == "TSLA" ? (
  data4.map((item)=>{
    return <td>$ {item.latestPrice}</td>
  })
) : Order.symbol == "BAC" ? (
  data5.map((item)=>{
    return <td>$ {item.latestPrice}</td>
  })
) : Order.symbol == "ORC" ? (
  data6.map((item)=>{
    return <td>$ {item.latestPrice}</td>
  })
) : Order.symbol == "GOOG" ? (
  data7.map((item)=>{
    return <td>$ {item.latestPrice}</td>
  })
) : Order.symbol == "NKE" ? (
  data8.map((item)=>{
    return <td>$ {item.latestPrice}</td>
  })
) : Order.symbol == "JPM" ? (
  data9.map((item)=>{
    return <td>$ {item.latestPrice}</td>
  })
) : Order.symbol == "MSFT" ? (
  data10.map((item)=>{
    return <td>$ {item.latestPrice}</td>
  })
) : Order.symbol == "NVDA" ? (
  data11.map((item)=>{
    return <td>$ {item.latestPrice}</td>
  })
) : Order.symbol == "V" ? (
  data12.map((item)=>{
    return <td>$ {item.latestPrice}</td>
  })
) : (
  <td></td>
)}
                      </tr>
                    ))}
            </tbody>

            <tbody></tbody>
          </table>
        </div>
      </section>

      <section className="portfolio-orders">
        <h2 className="portfolio-orders-h2">Orders</h2>
        <div className="wrapper">
          <input type="radio" name="slider" checked id="home"></input>
          <input type="radio" name="slider" id="blog"></input>
          <nav>
            <label for="home" className="home">
              Orders
            </label>
          </nav>
          <section className="order-section">
            {/* open orders */}
            <div className="content content-1">
              <div className="table-wrapper2 table-wrapper-scroll-y my-custom-scrollbar">
                <table className="fl-table2">
                  <thead>
                    <tr>
                      <th>Symbol</th>
                      <th>Amount</th>
                      <th>Price</th>
                      <th>Total</th>
                      <th>Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {openOrders.map((order, index) => (
                      <tr>
                        <td key={index}>{order.symbol}</td>
                        <td>{order.quantity}</td>
                        <td>$ {order.bidPrice}</td>
                        <td>$ {order.quantity * order.bidPrice}</td>
                        <td>{order.type}</td>
                      
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};
export default Portfolio;
