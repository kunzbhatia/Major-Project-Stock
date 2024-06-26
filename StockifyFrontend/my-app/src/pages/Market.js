import React from "react";
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
import { useHistory } from "react-router-dom";
import axios from "axios";
import icon from "../images/graph.jpeg";

// import "../components/Marketpg/events";
let cash=100000
function App({ list }) {
  // let cash=100000;
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
  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch(unsetUserInfo({ name: "", email: "" }));
    dispatch(unSetUserToken({ access_token: null }));
    removeToken();
    navigate("/");
  };
  const [show, setShow] = useState(false);
  const [buy_apple, setBuyApple] = useState(false);
  const [sell_apple, setSellApple] = useState(false);
  const [buy_visa, setBuyVisa] = useState(false);
  const [sell_visa, setSellVisa] = useState(false);
  const [buy_twitter, setBuyTwitter] = useState(false);
  const [sell_twitter, setSellTwitter] = useState(false);
  const [buy_amazon, setBuyAmazon] = useState(false);
  const [sell_amazon, setSellAmazon] = useState(false);
  const [buy_tesla, setBuyTesla] = useState(false);
  const [sell_tesla, setSellTesla] = useState(false);
  const [buy_boc, setBuyBOC] = useState(false);
  const [sell_boc, setSellBOC] = useState(false);
  const [buy_oracle, setBuyOracle] = useState(false);
  const [sell_oracle, setSellOracle] = useState(false);
  const [buy_alphabet, setBuyAlphabet] = useState(false);
  const [sell_alphabet, setSellAlphabet] = useState(false);
  const [buy_nike, setBuyNike] = useState(false);
  const [sell_nike, setSellNike] = useState(false);
  const [buy_jpmc, setBuyJPMC] = useState(false);
  const [sell_jpmc, setSellJPMC] = useState(false);
  const [buy_microsoft, setBuyMicrosoft] = useState(false);
  const [sell_microsoft, setSellMicrosoft] = useState(false);
  const [buy_nvidia, setBuyNvidia] = useState(false);
  const [sell_nvidia, setSellNvidia] = useState(false);
 
  

  const [error, setError] = useState("");

  const handleBuyApple = () => setBuyApple(true);
  const handleSellApple = () => setSellApple(true);
  const handleBuyVisa = () => setBuyVisa(true);
  const handleSellVisa = () => setSellVisa(true);
  const handleBuyTwitter = () => setBuyTwitter(true);
  const handleSellTwitter = () => setSellTwitter(true);
  const handleBuyAmazon = () => setBuyAmazon(true);
  const handleSellAmazon = () => setSellAmazon(true);
  const handleBuyTesla = () => setBuyTesla(true);
  const handleSellTesla = () => setSellTesla(true);
  const handleBuyBOC = () => setBuyBOC(true);
  const handleSellBOC = () => setSellBOC(true);
  const handleBuyOracle = () => setBuyOracle(true);
  const handleSellOracle = () => setSellOracle(true);
  const handleBuyAlphabet = () => setBuyAlphabet(true);
  const handleSellAlphabet = () => setSellAlphabet(true);
  const handleBuyNike = () => setBuyNike(true);
  const handleSellNike = () => setSellNike(true);
  const handleBuyJPMC = () => setBuyJPMC(true);
  const handleSellJPMC = () => setSellJPMC(true);
  const handleBuyMicrosoft = () => setBuyMicrosoft(true);
  const handleSellMicrosoft = () => setSellMicrosoft(true);
  const handleBuyNvidia = () => setBuyNvidia(true);
  const handleSellNvidia = () => setSellNvidia(true);
  const handleClose = () => setShow(false);
  const handleClose1 = () => setBuyApple(false);
  const handleClose2 = () => setSellApple(false);
  const handleClose3 = () => setBuyTwitter(false);
  const handleClose4 = () => setSellTwitter(false);
  const handleClose5 = () => setBuyAmazon(false);
  const handleClose6 = () => setSellAmazon(false);
  const handleClose7 = () => setBuyTesla(false);
  const handleClose8 = () => setSellTesla(false);
  const handleClose9 = () => setBuyBOC(false);
  const handleClose10 = () => setSellBOC(false);
  const handleClose11 = () => setBuyOracle(false);
  const handleClose12 = () => setSellOracle(false);
  const handleClose13 = () => setBuyAlphabet(false);
  const handleClose14 = () => setSellAlphabet(false);
  const handleClose15 = () => setBuyNike(false);
  const handleClose16 = () => setSellNike(false);
  const handleClose17 = () => setBuyJPMC(false);
  const handleClose18 = () => setSellJPMC(false);
  const handleClose19 = () => setBuyMicrosoft(false);
  const handleClose20 = () => setSellMicrosoft(false);
  const handleClose21 = () => setBuyNvidia(false);
  const handleClose22 = () => setSellNvidia(false);
  const handleClose23 = () => setBuyVisa(false);
  const handleClose24 = () => setSellVisa(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);
  const [bidPrice, setBidPrice] = useState(0);
  // let bidPrice=0;
  let latestprice=0;
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
  const handleBidPriceChange = (event) => {
    setBidPrice(event.target.value);
  };
  // function bidPricetoLatestprice(data)
  // {
  //   setBidPrice(data);
  // }
  
  const dispatch = useDispatch();
  const handleSubmit1 = async (itemPrice) => {
    
    const newOrder = {
      symbol: "AAPL",
      quantity: quantity,
      bidPrice: itemPrice,
      type: "Bought",
      // cash: cash,
    };
    // console.log(bidPrice)
    const response = await axios.post(
      `http://127.0.0.1:8000/api/user/buyStock`,
      newOrder,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    setQuantity(0);
    setBidPrice(0);
    // console.log(response.data.mtm)
    // console.log(response.data.success)
    if (response.data.success) {
      
      // console.log(response.data.mtm)
      // console.log("yooo")
      navigate("/Portfolio", { state: { newOrder } });
    }
    else setError("Buy failed");
  };

  const handleSubmit2 = async (itemPrice) => {
    // cash=cash+quantity*bidPrice
    const newOrder = {
      symbol: "AAPL",
      quantity: quantity,
      bidPrice: itemPrice,
      type: "Sold",
      // cash: cash,
    };
    console.log(bidPrice)
    const response = await axios.post(
      `http://127.0.0.1:8000/api/user/sellStock`,
      newOrder,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    setQuantity(0);
    setBidPrice(0);
    if (response.data.success) navigate("/Portfolio", { state: { newOrder } });
    else setError("Sell failed");
  };
  const handleSubmit3 = async (itemPrice) => {
    const newOrder = {
      symbol: "TWTR",
      quantity: quantity,
      bidPrice: itemPrice,
      type: "Bought",
    };
    const response = await axios.post(
      `http://127.0.0.1:8000/api/user/buyStock`,
      newOrder,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    setQuantity(0);
    setBidPrice(0);
    if (response.data.success) navigate("/Portfolio", { state: { newOrder } });
    else setError("Buy failed");
  };
  const handleSubmit4 = async (itemPrice) => {
    const newOrder = {
      symbol: "TWTR",
      quantity: quantity,
      bidPrice: itemPrice,
      type: "Sold",
    };
    const response = await axios.post(
      `http://127.0.0.1:8000/api/user/sellStock`,
      newOrder,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    setQuantity(0);
    setBidPrice(0);
    if (response.data.success) navigate("/Portfolio", { state: { newOrder } });
    else setError("Sell failed");
  };
  const handleSubmit5 = async (itemPrice) => {
    const newOrder = {
      symbol: "AMZN",
      quantity: quantity,
      bidPrice: itemPrice,
      type: "Bought",
    };
    const response = await axios.post(
      `http://127.0.0.1:8000/api/user/buyStock`,
      newOrder,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    setQuantity(0);
    setBidPrice(0);
    if (response.data.success) navigate("/Portfolio", { state: { newOrder } });
    else setError("Buy failed");
  };

  const handleSubmit6 = async (itemPrice) => {
    const newOrder = {
      symbol: "AMZN",
      quantity: quantity,
      bidPrice: itemPrice,
      type: "Sold",
    };
    const response = await axios.post(
      `http://127.0.0.1:8000/api/user/sellStock`,
      newOrder,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    setQuantity(0);
    setBidPrice(0);
    if (response.data.success) navigate("/Portfolio", { state: { newOrder } });
    else setError("Sell failed");
  };
  const handleSubmit7 = async (itemPrice) => {
    const newOrder = {
      symbol: "TSLA",
      quantity: quantity,
      bidPrice: itemPrice,
      type: "Bought",
    };
    const response = await axios.post(
      `http://127.0.0.1:8000/api/user/buyStock`,
      newOrder,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    setQuantity(0);
    setBidPrice(0);
    if (response.data.success) navigate("/Portfolio", { state: { newOrder } });
    else setError("Buy failed");
  };
  const handleSubmit8 = async (itemPrice) => {
    const newOrder = {
      symbol: "TSLA",
      quantity: quantity,
      bidPrice: itemPrice,
      type: "Sold",
    };
    const response = await axios.post(
      `http://127.0.0.1:8000/api/user/sellStock`,
      newOrder,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    setQuantity(0);
    setBidPrice(0);
    if (response.data.success) navigate("/Portfolio", { state: { newOrder } });
    else setError("Sell failed");
  };
  const handleSubmit9 = async (itemPrice) => {
    const newOrder = {
      symbol: "BAC",
      quantity: quantity,
      bidPrice: itemPrice,
      type: "Bought",
    };
    const response = await axios.post(
      `http://127.0.0.1:8000/api/user/buyStock`,
      newOrder,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    setQuantity(0);
    setBidPrice(0);
    if (response.data.success) navigate("/Portfolio", { state: { newOrder } });
    else setError("Buy failed");
  };
  const handleSubmit10 = async (itemPrice) => {
    const newOrder = {
      symbol: "BAC",
      quantity: quantity,
      bidPrice: itemPrice,
      type: "Sold",
    };
    const response = await axios.post(
      `http://127.0.0.1:8000/api/user/sellStock`,
      newOrder,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    setQuantity(0);
    setBidPrice(0);
    if (response.data.success) navigate("/Portfolio", { state: { newOrder } });
    else setError("Sell failed");
  };
  const handleSubmit11 = async (itemPrice) => {
    const newOrder = {
      symbol: "ORC",
      quantity: quantity,
      bidPrice: itemPrice,
      type: "Bought",
    };
    const response = await axios.post(
      `http://127.0.0.1:8000/api/user/buyStock`,
      newOrder,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    setQuantity(0);
    setBidPrice(0);
    if (response.data.success) navigate("/Portfolio", { state: { newOrder } });
    else setError("Buy failed");
  };
  const handleSubmit12 = async (itemPrice) => {
    const newOrder = {
      symbol: "ORC",
      quantity: quantity,
      bidPrice: itemPrice,
      type: "Sold",
    };
    const response = await axios.post(
      `http://127.0.0.1:8000/api/user/sellStock`,
      newOrder,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    setQuantity(0);
    setBidPrice(0);
    if (response.data.success) navigate("/Portfolio", { state: { newOrder } });
    else setError("Sell failed");
  };
  const handleSubmit13 = async (itemPrice) => {
    const newOrder = {
      symbol: "GOOG",
      quantity: quantity,
      bidPrice: itemPrice,
      type: "Bought",
    };
    const response = await axios.post(
      `http://127.0.0.1:8000/api/user/buyStock`,
      newOrder,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    setQuantity(0);
    setBidPrice(0);
    if (response.data.success) navigate("/Portfolio", { state: { newOrder } });
    else setError("Buy failed");
  };
  const handleSubmit14 = async (itemPrice) => {
    const newOrder = {
      symbol: "GOOG",
      quantity: quantity,
      bidPrice: itemPrice,
      type: "Sold",
    };
    const response = await axios.post(
      `http://127.0.0.1:8000/api/user/sellStock`,
      newOrder,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    setQuantity(0);
    setBidPrice(0);
    if (response.data.success) navigate("/Portfolio", { state: { newOrder } });
    else setError("Sell failed");
  };
  const handleSubmit15 = async (itemPrice) => {
    const newOrder = {
      symbol: "NKE",
      quantity: quantity,
      bidPrice: itemPrice,
      type: "Bought",
    };
    const response = await axios.post(
      `http://127.0.0.1:8000/api/user/buyStock`,
      newOrder,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    setQuantity(0);
    setBidPrice(0);
    if (response.data.success) navigate("/Portfolio", { state: { newOrder } });
    else setError("Buy failed");
  };
  const handleSubmit16 = async (itemPrice) => {
    const newOrder = {
      symbol: "NKE",
      quantity: quantity,
      bidPrice: itemPrice,
      type: "Sold",
    };
    const response = await axios.post(
      `http://127.0.0.1:8000/api/user/sellStock`,
      newOrder,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    setQuantity(0);
    setBidPrice(0);
    if (response.data.success) navigate("/Portfolio", { state: { newOrder } });
    else setError("Sell failed");
  };
  const handleSubmit17 = async (itemPrice) => {
    const newOrder = {
      symbol: "JPM",
      quantity: quantity,
      bidPrice: itemPrice,
      type: "Bought",
    };
    const response = await axios.post(
      `http://127.0.0.1:8000/api/user/buyStock`,
      newOrder,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    setQuantity(0);
    setBidPrice(0);
    if (response.data.success) navigate("/Portfolio", { state: { newOrder } });
    else setError("Buy failed");
  };
  const handleSubmit18 = async (itemPrice) => {
    const newOrder = {
      symbol: "JPM",
      quantity: quantity,
      bidPrice: itemPrice,
      type: "Sold",
    };
    const response = await axios.post(
      `http://127.0.0.1:8000/api/user/sellStock`,
      newOrder,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    setQuantity(0);
    setBidPrice(0);
    if (response.data.success) navigate("/Portfolio", { state: { newOrder } });
    else setError("Sell failed");
  };
  const handleSubmit19 = async (itemPrice) => {
    const newOrder = {
      symbol: "MSFT",
      quantity: quantity,
      bidPrice: itemPrice,
      type: "Bought",
    };
    const response = await axios.post(
      `http://127.0.0.1:8000/api/user/buyStock`,
      newOrder,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    setQuantity(0);
    setBidPrice(0);
    if (response.data.success) navigate("/Portfolio", { state: { newOrder } });
    else setError("Buy failed");
  };
  const handleSubmit20 = async (itemPrice) => {
    const newOrder = {
      symbol: "MSFT",
      quantity: quantity,
      bidPrice: itemPrice,
      type: "Sold",
    };
    const response = await axios.post(
      `http://127.0.0.1:8000/api/user/sellStock`,
      newOrder,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    setQuantity(0);
    setBidPrice(0);
    if (response.data.success) navigate("/Portfolio", { state: { newOrder } });
    else setError("Sell failed");
  };
  const handleSubmit21 = async (itemPrice) => {
    const newOrder = {
      symbol: "NVDA",
      quantity: quantity,
      bidPrice: itemPrice,
      type: "Bought",
    };
    const response = await axios.post(
      `http://127.0.0.1:8000/api/user/buyStock`,
      newOrder,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    setQuantity(0);
    setBidPrice(0);
    if (response.data.success) navigate("/Portfolio", { state: { newOrder } });
    else setError("Buy failed");
  };
  const handleSubmit22 = async (itemPrice) => {
    const newOrder = {
      symbol: "NVDA",
      quantity: quantity,
      bidPrice: itemPrice,
      type: "Sold",
    };
    const response = await axios.post(
      `http://127.0.0.1:8000/api/user/sellStock`,
      newOrder,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    setQuantity(0);
    setBidPrice(0);
    if (response.data.success) navigate("/Portfolio", { state: { newOrder } });
    else setError("Sell failed");
  };
  const handleSubmit23 = async (itemPrice) => {
    const newOrder = {
      symbol: "V",
      quantity: quantity,
      bidPrice: itemPrice,
      type: "Bought",
    };
    const response = await axios.post(
      `http://127.0.0.1:8000/api/user/buyStock`,
      newOrder,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    setQuantity(0);
    setBidPrice(0);
    if (response.data.success) navigate("/Portfolio", { state: { newOrder } });
    else setError("Buy failed");
  };
  const handleSubmit24 = async (itemPrice) => {
    const newOrder = {
      symbol: "AAPL",
      quantity: quantity,
      bidPrice: itemPrice,
      type: "Sold",
    };
    const response = await axios.post(
      `http://127.0.0.1:8000/api/user/sellStock`,
      newOrder,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    setQuantity(0);
    setBidPrice(0);
    if (response.data.success) navigate("/Portfolio", { state: { newOrder } });
    else setError("Sell failed");
  };

  return (
    <div className="market_container">
      <header className="header">
        <a href="#" className="logo">
          {" "}
          Stockify{" "}
        </a>
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/Market">Market</a>
          <a href="/Portfolio">Portfolio</a>
          <Button
            className="btn4"
            color="rgba(46, 52, 69, 1)"
            onClick={handleShow}
          >
            <u>Logout</u>
          </Button>
          <Modal show={show} onHide={handleClose}>
            {/* <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header> */}
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
      <div className="all">
        <div className="searchstock">
          {data1.map((item) => (
            <div className="stock-card-container">
              <div className="stock-card-information">
                <h2 className="company-name">{item.companyName}</h2>
                <a href="https://finance.yahoo.com/chart/AAPL#eyJpbnRlcnZhbCI6ImRheSIsInBlcmlvZGljaXR5IjoxLCJ0aW1lVW5pdCI6bnVsbCwiY2FuZGxlV2lkdGgiOjcuODAxMjQyMjM2MDI0ODQ0LCJmbGlwcGVkIjpmYWxzZSwidm9sdW1lVW5kZXJsYXkiOnRydWUsImFkaiI6dHJ1ZSwiY3Jvc3NoYWlyIjp0cnVlLCJjaGFydFR5cGUiOiJsaW5lIiwiZXh0ZW5kZWQiOmZhbHNlLCJtYXJrZXRTZXNzaW9ucyI6e30sImFnZ3JlZ2F0aW9uVHlwZSI6Im9obGMiLCJjaGFydFNjYWxlIjoibGluZWFyIiwicGFuZWxzIjp7ImNoYXJ0Ijp7InBlcmNlbnQiOjEsImRpc3BsYXkiOiJBQVBMIiwiY2hhcnROYW1lIjoiY2hhcnQiLCJpbmRleCI6MCwieUF4aXMiOnsibmFtZSI6ImNoYXJ0IiwicG9zaXRpb24iOm51bGx9LCJ5YXhpc0xIUyI6W10sInlheGlzUkhTIjpbImNoYXJ0Iiwi4oCMdm9sIHVuZHLigIwiXX19LCJzZXRTcGFuIjpudWxsLCJsaW5lV2lkdGgiOjIsInN0cmlwZWRCYWNrZ3JvdW5kIjp0cnVlLCJldmVudHMiOnRydWUsImNvbG9yIjoiIzAwODFmMiIsInN0cmlwZWRCYWNrZ3JvdWQiOnRydWUsInJhbmdlIjpudWxsLCJldmVudE1hcCI6eyJjb3Jwb3JhdGUiOnsiZGl2cyI6dHJ1ZSwic3BsaXRzIjp0cnVlfSwic2lnRGV2Ijp7fX0sInN5bWJvbHMiOlt7InN5bWJvbCI6IkFBUEwiLCJzeW1ib2xPYmplY3QiOnsic3ltYm9sIjoiQUFQTCIsInF1b3RlVHlwZSI6IkVRVUlUWSIsImV4Y2hhbmdlVGltZVpvbmUiOiJBbWVyaWNhL05ld19Zb3JrIn0sInBlcmlvZGljaXR5IjoxLCJpbnRlcnZhbCI6ImRheSIsInRpbWVVbml0IjpudWxsLCJzZXRTcGFuIjpudWxsfV0sInN0dWRpZXMiOnsi4oCMdm9sIHVuZHLigIwiOnsidHlwZSI6InZvbCB1bmRyIiwiaW5wdXRzIjp7ImlkIjoi4oCMdm9sIHVuZHLigIwiLCJkaXNwbGF5Ijoi4oCMdm9sIHVuZHLigIwifSwib3V0cHV0cyI6eyJVcCBWb2x1bWUiOiIjMDBiMDYxIiwiRG93biBWb2x1bWUiOiIjZmYzMzNhIn0sInBhbmVsIjoiY2hhcnQiLCJwYXJhbWV0ZXJzIjp7IndpZHRoRmFjdG9yIjowLjQ1LCJjaGFydE5hbWUiOiJjaGFydCIsInBhbmVsTmFtZSI6ImNoYXJ0In19fX0-">
                  <img src={icon} className="graph-icon" alt="graph" />
                  </a>
                <div className="company-values">
                  <table>
                    <tbody>
                      <tr>
                        <td className="bold">Price:</td>
                        <td className="stockDetails">$ {item.latestPrice}</td>
                      </tr>
                      <tr>
                        <td className="bold">Change:</td>
                        <td className="stockDetails">
                          $ {item.change} ({item.changePercent}%) &nbsp;
                          <i className="icon-arrow-up"></i>
                        </td>
                      </tr>
                      <tr>
                        <td className="bold">Market Capitalisation:</td>
                        <td className="stockDetails">$ {item.marketCap}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="add-minus-button-container">
                    <button className="btn3" onClick={handleBuyApple}>
                      Buy
                    </button>
                    <Modal show={buy_apple} onHide={handleClose1}>
                      <Modal.Header>
                        <Modal.Title>
                          Buying {item.companyName} stocks?
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form>
                          <label for="quantity">Quantity</label>
                          <input
                            border="3px solid"
                            type="number"
                            name="quantity"
                            placeholder="Number of shares"
                            value={quantity}
                            onChange={handleQuantityChange}
                          ></input>
                          <br></br>
                          <label for="bidPrice">Bid-Price</label>
                          <input
                            type="number"
                            name="bidPrice"
                            placeholder="At what price"
                            value={item.latestPrice}
                            // disabled
                            // onChange={handleBidPriceChange}
                          ></input>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button color="success" onClick={() => handleSubmit1(item.latestPrice)}>
                          <font color="black">Buy</font>
                        </Button>
                        <Button color="danger" onClick={handleClose1}>
                          <font color="black">Cancel</font>
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <button className="btn1" onClick={handleSellApple}>
                      Sell
                    </button>
                    <Modal show={sell_apple} onHide={handleClose2}>
                      <Modal.Header>
                        <Modal.Title>
                          Selling {item.companyName} stocks?
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form>
                          <label for="quantity">Quantity</label>
                          <input
                            border="3px solid"
                            type="number"
                            name="quantity"
                            placeholder="Number of shares"
                            value={quantity}
                            onChange={handleQuantityChange}
                          ></input>
                          <br></br>
                          <label for="bidPrice">Bid-Price</label>
                          <input
                            type="number"
                            name="bidPrice"
                            placeholder="At what price"
                            value={item.latestPrice}
                            // disabled
                            // onChange={handleBidPriceChange()}
                          ></input>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button color="success" onClick={() => handleSubmit2(item.latestPrice)}>
                          <font color="black">Sell</font>
                        </Button>
                        <Button color="danger" onClick={handleClose2}>
                          <font color="black">Cancel</font>
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {data2.map((item) => (
            <div className="stock-card-container">
              <div className="stock-card-information">
                <h2 className="company-name">{item.companyName}</h2>
                <a href="https://finance.yahoo.com/chart/AMZN#eyJpbnRlcnZhbCI6ImRheSIsInBlcmlvZGljaXR5IjoxLCJ0aW1lVW5pdCI6bnVsbCwiY2FuZGxlV2lkdGgiOjcuODAxMjQyMjM2MDI0ODQ0LCJmbGlwcGVkIjpmYWxzZSwidm9sdW1lVW5kZXJsYXkiOnRydWUsImFkaiI6dHJ1ZSwiY3Jvc3NoYWlyIjp0cnVlLCJjaGFydFR5cGUiOiJsaW5lIiwiZXh0ZW5kZWQiOmZhbHNlLCJtYXJrZXRTZXNzaW9ucyI6e30sImFnZ3JlZ2F0aW9uVHlwZSI6Im9obGMiLCJjaGFydFNjYWxlIjoibGluZWFyIiwicGFuZWxzIjp7ImNoYXJ0Ijp7InBlcmNlbnQiOjEsImRpc3BsYXkiOiJBQVBMIiwiY2hhcnROYW1lIjoiY2hhcnQiLCJpbmRleCI6MCwieUF4aXMiOnsibmFtZSI6ImNoYXJ0IiwicG9zaXRpb24iOm51bGx9LCJ5YXhpc0xIUyI6W10sInlheGlzUkhTIjpbImNoYXJ0Iiwi4oCMdm9sIHVuZHLigIwiXX19LCJzZXRTcGFuIjpudWxsLCJsaW5lV2lkdGgiOjIsInN0cmlwZWRCYWNrZ3JvdW5kIjp0cnVlLCJldmVudHMiOnRydWUsImNvbG9yIjoiIzAwODFmMiIsInN0cmlwZWRCYWNrZ3JvdWQiOnRydWUsInJhbmdlIjpudWxsLCJldmVudE1hcCI6eyJjb3Jwb3JhdGUiOnsiZGl2cyI6dHJ1ZSwic3BsaXRzIjp0cnVlfSwic2lnRGV2Ijp7fX0sInN5bWJvbHMiOlt7InN5bWJvbCI6IkFBUEwiLCJzeW1ib2xPYmplY3QiOnsic3ltYm9sIjoiQUFQTCIsInF1b3RlVHlwZSI6IkVRVUlUWSIsImV4Y2hhbmdlVGltZVpvbmUiOiJBbWVyaWNhL05ld19Zb3JrIn0sInBlcmlvZGljaXR5IjoxLCJpbnRlcnZhbCI6ImRheSIsInRpbWVVbml0IjpudWxsLCJzZXRTcGFuIjpudWxsfV0sInN0dWRpZXMiOnsi4oCMdm9sIHVuZHLigIwiOnsidHlwZSI6InZvbCB1bmRyIiwiaW5wdXRzIjp7ImlkIjoi4oCMdm9sIHVuZHLigIwiLCJkaXNwbGF5Ijoi4oCMdm9sIHVuZHLigIwifSwib3V0cHV0cyI6eyJVcCBWb2x1bWUiOiIjMDBiMDYxIiwiRG93biBWb2x1bWUiOiIjZmYzMzNhIn0sInBhbmVsIjoiY2hhcnQiLCJwYXJhbWV0ZXJzIjp7IndpZHRoRmFjdG9yIjowLjQ1LCJjaGFydE5hbWUiOiJjaGFydCIsInBhbmVsTmFtZSI6ImNoYXJ0In19fX0-">
                  <img src={icon} className="graph-icon" alt="graph" />
                  </a>
                <div className="company-values">
                  <table>
                    <tbody>
                      <tr>
                        <td className="bold">Price:</td>
                        <td className="stockDetails">$ {item.latestPrice}</td>
                      </tr>
                      <tr>
                        <td className="bold">Change:</td>
                        <td className="stockDetails">
                          $ {item.change} ({item.changePercent}%) &nbsp;
                          <i className="icon-arrow-up"></i>
                        </td>
                      </tr>
                      <tr>
                        <td className="bold">Market Capitalisation:</td>
                        <td className="stockDetails">$ {item.marketCap}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="add-minus-button-container">
                    <button className="btn3" onClick={handleBuyTwitter}>
                      Buy
                    </button>
                    <Modal show={buy_twitter} onHide={handleClose3}>
                      <Modal.Header>
                        <Modal.Title>
                          Buying {item.companyName} stocks?
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                      <form>
                          <label for="quantity">Quantity</label>
                          <input
                            border="3px solid"
                            type="number"
                            name="quantity"
                            placeholder="Number of shares"
                            value={quantity}
                            onChange={handleQuantityChange}
                          ></input>
                          <br></br>
                          <label for="bidPrice">Bid-Price</label>
                          <input
                            type="number"
                            name="bidPrice"
                            placeholder="At what price"
                            value={item.latestPrice}
                            // onChange={handleBidPriceChange}
                          ></input>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button color="success" onClick={() => handleSubmit3(item.latestPrice)}>
                          <font color="black">Buy</font>
                        </Button>
                        <Button color="danger" onClick={handleClose3}>
                          <font color="black">Cancel</font>
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <button className="btn1" onClick={handleSellTwitter}>
                      Sell
                    </button>
                    <Modal show={sell_twitter} onHide={handleClose4}>
                      <Modal.Header>
                        <Modal.Title>
                          Selling {item.companyName} stocks?
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                      <form>
                          <label for="quantity">Quantity</label>
                          <input
                            border="3px solid"
                            type="number"
                            name="quantity"
                            placeholder="Number of shares"
                            value={quantity}
                            onChange={handleQuantityChange}
                          ></input>
                          <br></br>
                          <label for="bidPrice">Bid-Price</label>
                          <input
                            type="number"
                            name="bidPrice"
                            placeholder="At what price"
                            value={item.latestPrice}
                            onChange={handleBidPriceChange}
                          ></input>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button color="success" onClick={() => handleSubmit4(item.latestPrice)}>
                          <font color="black">Sell</font>
                        </Button>
                        <Button color="danger" onClick={handleClose4}>
                          <font color="black">Cancel</font>
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </div>
              <div className="stock-card-chart"></div>
            </div>
          ))}
          {data3.map((item) => (
            <div className="stock-card-container">
              <div className="stock-card-information">
                <h2 className="company-name">{item.companyName}</h2>
                <a href="https://finance.yahoo.com/chart/AMZN#eyJpbnRlcnZhbCI6ImRheSIsInBlcmlvZGljaXR5IjoxLCJ0aW1lVW5pdCI6bnVsbCwiY2FuZGxlV2lkdGgiOjcuODAxMjQyMjM2MDI0ODQ0LCJmbGlwcGVkIjpmYWxzZSwidm9sdW1lVW5kZXJsYXkiOnRydWUsImFkaiI6dHJ1ZSwiY3Jvc3NoYWlyIjp0cnVlLCJjaGFydFR5cGUiOiJsaW5lIiwiZXh0ZW5kZWQiOmZhbHNlLCJtYXJrZXRTZXNzaW9ucyI6e30sImFnZ3JlZ2F0aW9uVHlwZSI6Im9obGMiLCJjaGFydFNjYWxlIjoibGluZWFyIiwicGFuZWxzIjp7ImNoYXJ0Ijp7InBlcmNlbnQiOjEsImRpc3BsYXkiOiJBQVBMIiwiY2hhcnROYW1lIjoiY2hhcnQiLCJpbmRleCI6MCwieUF4aXMiOnsibmFtZSI6ImNoYXJ0IiwicG9zaXRpb24iOm51bGx9LCJ5YXhpc0xIUyI6W10sInlheGlzUkhTIjpbImNoYXJ0Iiwi4oCMdm9sIHVuZHLigIwiXX19LCJzZXRTcGFuIjpudWxsLCJsaW5lV2lkdGgiOjIsInN0cmlwZWRCYWNrZ3JvdW5kIjp0cnVlLCJldmVudHMiOnRydWUsImNvbG9yIjoiIzAwODFmMiIsInN0cmlwZWRCYWNrZ3JvdWQiOnRydWUsInJhbmdlIjpudWxsLCJldmVudE1hcCI6eyJjb3Jwb3JhdGUiOnsiZGl2cyI6dHJ1ZSwic3BsaXRzIjp0cnVlfSwic2lnRGV2Ijp7fX0sInN5bWJvbHMiOlt7InN5bWJvbCI6IkFBUEwiLCJzeW1ib2xPYmplY3QiOnsic3ltYm9sIjoiQUFQTCIsInF1b3RlVHlwZSI6IkVRVUlUWSIsImV4Y2hhbmdlVGltZVpvbmUiOiJBbWVyaWNhL05ld19Zb3JrIn0sInBlcmlvZGljaXR5IjoxLCJpbnRlcnZhbCI6ImRheSIsInRpbWVVbml0IjpudWxsLCJzZXRTcGFuIjpudWxsfV0sInN0dWRpZXMiOnsi4oCMdm9sIHVuZHLigIwiOnsidHlwZSI6InZvbCB1bmRyIiwiaW5wdXRzIjp7ImlkIjoi4oCMdm9sIHVuZHLigIwiLCJkaXNwbGF5Ijoi4oCMdm9sIHVuZHLigIwifSwib3V0cHV0cyI6eyJVcCBWb2x1bWUiOiIjMDBiMDYxIiwiRG93biBWb2x1bWUiOiIjZmYzMzNhIn0sInBhbmVsIjoiY2hhcnQiLCJwYXJhbWV0ZXJzIjp7IndpZHRoRmFjdG9yIjowLjQ1LCJjaGFydE5hbWUiOiJjaGFydCIsInBhbmVsTmFtZSI6ImNoYXJ0In19fX0-">
                  <img src={icon} className="graph-icon" alt="graph" />
                  </a>
                <div className="company-values">
                  <table>
                    <tbody>
                      <tr>
                        <td className="bold">Price:</td>
                        <td className="stockDetails">$ {item.latestPrice}</td>
                      </tr>
                      <tr>
                        <td className="bold">Change:</td>
                        <td className="stockDetails">
                          $ {item.change} ({item.changePercent}%) &nbsp;
                          <i className="icon-arrow-up"></i>
                        </td>
                      </tr>
                      <tr>
                        <td className="bold">Market Capitalisation:</td>
                        <td className="stockDetails">$ {item.marketCap}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="add-minus-button-container">
                    <button className="btn3" onClick={handleBuyAmazon}>
                      Buy
                    </button>
                    <Modal show={buy_amazon} onHide={handleClose5}>
                      <Modal.Header>
                        <Modal.Title>
                          Buying {item.companyName} stocks?
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form>
                          <label for="quantity">Quantity</label>
                          <input
                            border="3px solid"
                            type="number"
                            name="quantity"
                            placeholder="Number of shares"
                            value={quantity}
                            onChange={handleQuantityChange}
                          ></input>
                          <br></br>
                          <label for="bidPrice">Bid-Price</label>
                          <input
                            type="number"
                            name="bidPrice"
                            placeholder="At what price"
                            value={item.latestPrice}
                            onChange={handleBidPriceChange}
                          ></input>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button color="success" onClick={() => handleSubmit5(item.latestPrice)}>
                          <font color="black">Buy</font>
                        </Button>
                        <Button color="danger" onClick={handleClose5}>
                          <font color="black">Cancel</font>
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <button className="btn1" onClick={handleSellAmazon}>
                      Sell
                    </button>
                    <Modal show={sell_amazon} onHide={handleClose6}>
                      <Modal.Header>
                        <Modal.Title>
                          Selling {item.companyName} stocks?
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form>
                          <label for="quantity">Quantity</label>
                          <input
                            border="3px solid"
                            type="number"
                            name="quantity"
                            placeholder="Number of shares"
                            value={quantity}
                            onChange={handleQuantityChange}
                          ></input>
                          <br></br>
                          <label for="bidPrice">Bid-Price</label>
                          <input
                            type="number"
                            name="bidPrice"
                            placeholder="At what price"
                            value={item.latestPrice}
                            onChange={handleBidPriceChange}
                          ></input>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button color="success" onClick={() => handleSubmit6(item.latestPrice)}>
                          <font color="black">Sell</font>
                        </Button>
                        <Button color="danger" onClick={handleClose6}>
                          <font color="black">Cancel</font>
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </div>
              <div className="stock-card-chart"></div>
            </div>
          ))}
          {data4.map((item) => (
            <div className="stock-card-container">
              <div className="stock-card-information">
                <h2 className="company-name">{item.companyName}</h2>
                <a href="https://finance.yahoo.com/chart/TSLA#eyJpbnRlcnZhbCI6ImRheSIsInBlcmlvZGljaXR5IjoxLCJ0aW1lVW5pdCI6bnVsbCwiY2FuZGxlV2lkdGgiOjcuODAxMjQyMjM2MDI0ODQ0LCJmbGlwcGVkIjpmYWxzZSwidm9sdW1lVW5kZXJsYXkiOnRydWUsImFkaiI6dHJ1ZSwiY3Jvc3NoYWlyIjp0cnVlLCJjaGFydFR5cGUiOiJsaW5lIiwiZXh0ZW5kZWQiOmZhbHNlLCJtYXJrZXRTZXNzaW9ucyI6e30sImFnZ3JlZ2F0aW9uVHlwZSI6Im9obGMiLCJjaGFydFNjYWxlIjoibGluZWFyIiwicGFuZWxzIjp7ImNoYXJ0Ijp7InBlcmNlbnQiOjEsImRpc3BsYXkiOiJBQVBMIiwiY2hhcnROYW1lIjoiY2hhcnQiLCJpbmRleCI6MCwieUF4aXMiOnsibmFtZSI6ImNoYXJ0IiwicG9zaXRpb24iOm51bGx9LCJ5YXhpc0xIUyI6W10sInlheGlzUkhTIjpbImNoYXJ0Iiwi4oCMdm9sIHVuZHLigIwiXX19LCJzZXRTcGFuIjpudWxsLCJsaW5lV2lkdGgiOjIsInN0cmlwZWRCYWNrZ3JvdW5kIjp0cnVlLCJldmVudHMiOnRydWUsImNvbG9yIjoiIzAwODFmMiIsInN0cmlwZWRCYWNrZ3JvdWQiOnRydWUsInJhbmdlIjpudWxsLCJldmVudE1hcCI6eyJjb3Jwb3JhdGUiOnsiZGl2cyI6dHJ1ZSwic3BsaXRzIjp0cnVlfSwic2lnRGV2Ijp7fX0sInN5bWJvbHMiOlt7InN5bWJvbCI6IkFBUEwiLCJzeW1ib2xPYmplY3QiOnsic3ltYm9sIjoiQUFQTCIsInF1b3RlVHlwZSI6IkVRVUlUWSIsImV4Y2hhbmdlVGltZVpvbmUiOiJBbWVyaWNhL05ld19Zb3JrIn0sInBlcmlvZGljaXR5IjoxLCJpbnRlcnZhbCI6ImRheSIsInRpbWVVbml0IjpudWxsLCJzZXRTcGFuIjpudWxsfV0sInN0dWRpZXMiOnsi4oCMdm9sIHVuZHLigIwiOnsidHlwZSI6InZvbCB1bmRyIiwiaW5wdXRzIjp7ImlkIjoi4oCMdm9sIHVuZHLigIwiLCJkaXNwbGF5Ijoi4oCMdm9sIHVuZHLigIwifSwib3V0cHV0cyI6eyJVcCBWb2x1bWUiOiIjMDBiMDYxIiwiRG93biBWb2x1bWUiOiIjZmYzMzNhIn0sInBhbmVsIjoiY2hhcnQiLCJwYXJhbWV0ZXJzIjp7IndpZHRoRmFjdG9yIjowLjQ1LCJjaGFydE5hbWUiOiJjaGFydCIsInBhbmVsTmFtZSI6ImNoYXJ0In19fX0-">
                  <img src={icon} className="graph-icon" alt="graph" />
                  </a>
                <div className="company-values">
                  <table>
                    <tbody>
                      <tr>
                        <td className="bold">Price:</td>
                        <td className="stockDetails">$ {item.latestPrice}</td>
                      </tr>
                      <tr>
                        <td className="bold">Change:</td>
                        <td className="stockDetails">
                          $ {item.change} ({item.changePercent}%) &nbsp;
                          <i className="icon-arrow-up"></i>
                        </td>
                      </tr>
                      <tr>
                        <td className="bold">Market Capitalisation:</td>
                        <td className="stockDetails">$ {item.marketCap}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="add-minus-button-container">
                    <button className="btn3" onClick={handleBuyTesla}>
                      Buy
                    </button>
                    <Modal show={buy_tesla} onHide={handleClose7}>
                      <Modal.Header>
                        <Modal.Title>
                          Buying {item.companyName} stocks?
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form>
                          <label for="quantity">Quantity</label>
                          <input
                            border="3px solid"
                            type="number"
                            name="quantity"
                            placeholder="Number of shares"
                            value={quantity}
                            onChange={handleQuantityChange}
                          ></input>
                          <br></br>
                          <label for="bidPrice">Bid-Price</label>
                          <input
                            type="number"
                            name="bidPrice"
                            placeholder="At what price"
                            value={item.latestPrice}
                            onChange={handleBidPriceChange}
                          ></input>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button color="success" onClick={() => handleSubmit7(item.latestPrice)}>
                          <font color="black">Buy</font>
                        </Button>
                        <Button color="danger" onClick={handleClose7}>
                          <font color="black">Cancel</font>
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <button className="btn1" onClick={handleSellTesla}>
                      Sell
                    </button>
                    <Modal show={sell_tesla} onHide={handleClose8}>
                      <Modal.Header>
                        <Modal.Title>
                          Selling {item.companyName} stocks?
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form>
                          <label for="quantity">Quantity</label>
                          <input
                            border="3px solid"
                            type="number"
                            name="quantity"
                            placeholder="Number of shares"
                            value={quantity}
                            onChange={handleQuantityChange}
                          ></input>
                          <br></br>
                          <label for="bidPrice">Bid-Price</label>
                          <input
                            type="number"
                            name="bidPrice"
                            placeholder="At what price"
                            value={item.latestPrice}
                            onChange={handleBidPriceChange}
                          ></input>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button color="success" onClick={() => handleSubmit8(item.latestPrice)}>
                          <font color="black">Sell</font>
                        </Button>
                        <Button color="danger" onClick={handleClose8}>
                          <font color="black">Cancel</font>
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </div>
              <div className="stock-card-chart"></div>
            </div>
          ))}
          {data5.map((item) => (
            <div className="stock-card-container">
              <div className="stock-card-information">
                <h2 className="company-name">{item.companyName}</h2>
                <a href="https://finance.yahoo.com/chart/BAC#eyJpbnRlcnZhbCI6ImRheSIsInBlcmlvZGljaXR5IjoxLCJ0aW1lVW5pdCI6bnVsbCwiY2FuZGxlV2lkdGgiOjcuODAxMjQyMjM2MDI0ODQ0LCJmbGlwcGVkIjpmYWxzZSwidm9sdW1lVW5kZXJsYXkiOnRydWUsImFkaiI6dHJ1ZSwiY3Jvc3NoYWlyIjp0cnVlLCJjaGFydFR5cGUiOiJsaW5lIiwiZXh0ZW5kZWQiOmZhbHNlLCJtYXJrZXRTZXNzaW9ucyI6e30sImFnZ3JlZ2F0aW9uVHlwZSI6Im9obGMiLCJjaGFydFNjYWxlIjoibGluZWFyIiwicGFuZWxzIjp7ImNoYXJ0Ijp7InBlcmNlbnQiOjEsImRpc3BsYXkiOiJBQVBMIiwiY2hhcnROYW1lIjoiY2hhcnQiLCJpbmRleCI6MCwieUF4aXMiOnsibmFtZSI6ImNoYXJ0IiwicG9zaXRpb24iOm51bGx9LCJ5YXhpc0xIUyI6W10sInlheGlzUkhTIjpbImNoYXJ0Iiwi4oCMdm9sIHVuZHLigIwiXX19LCJzZXRTcGFuIjpudWxsLCJsaW5lV2lkdGgiOjIsInN0cmlwZWRCYWNrZ3JvdW5kIjp0cnVlLCJldmVudHMiOnRydWUsImNvbG9yIjoiIzAwODFmMiIsInN0cmlwZWRCYWNrZ3JvdWQiOnRydWUsInJhbmdlIjpudWxsLCJldmVudE1hcCI6eyJjb3Jwb3JhdGUiOnsiZGl2cyI6dHJ1ZSwic3BsaXRzIjp0cnVlfSwic2lnRGV2Ijp7fX0sInN5bWJvbHMiOlt7InN5bWJvbCI6IkFBUEwiLCJzeW1ib2xPYmplY3QiOnsic3ltYm9sIjoiQUFQTCIsInF1b3RlVHlwZSI6IkVRVUlUWSIsImV4Y2hhbmdlVGltZVpvbmUiOiJBbWVyaWNhL05ld19Zb3JrIn0sInBlcmlvZGljaXR5IjoxLCJpbnRlcnZhbCI6ImRheSIsInRpbWVVbml0IjpudWxsLCJzZXRTcGFuIjpudWxsfV0sInN0dWRpZXMiOnsi4oCMdm9sIHVuZHLigIwiOnsidHlwZSI6InZvbCB1bmRyIiwiaW5wdXRzIjp7ImlkIjoi4oCMdm9sIHVuZHLigIwiLCJkaXNwbGF5Ijoi4oCMdm9sIHVuZHLigIwifSwib3V0cHV0cyI6eyJVcCBWb2x1bWUiOiIjMDBiMDYxIiwiRG93biBWb2x1bWUiOiIjZmYzMzNhIn0sInBhbmVsIjoiY2hhcnQiLCJwYXJhbWV0ZXJzIjp7IndpZHRoRmFjdG9yIjowLjQ1LCJjaGFydE5hbWUiOiJjaGFydCIsInBhbmVsTmFtZSI6ImNoYXJ0In19fX0-">
                  <img src={icon} className="graph-icon" alt="graph" />
                  </a>
                <div className="company-values">
                  <table>
                    <tbody>
                      <tr>
                        <td className="bold">Price:</td>
                        <td className="stockDetails">$ {item.latestPrice}</td>
                      </tr>
                      <tr>
                        <td className="bold">Change:</td>
                        <td className="stockDetails">
                          $ {item.change} ({item.changePercent}%) &nbsp;
                          <i className="icon-arrow-up"></i>
                        </td>
                      </tr>
                      <tr>
                        <td className="bold">Market Capitalisation:</td>
                        <td className="stockDetails">$ {item.marketCap}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="add-minus-button-container">
                    <button className="btn3" onClick={handleBuyBOC}>
                      Buy
                    </button>
                    <Modal show={buy_boc} onHide={handleClose9}>
                      <Modal.Header>
                        <Modal.Title>
                          Buying {item.companyName} stocks?
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form>
                          <label for="quantity">Quantity</label>
                          <input
                            border="3px solid"
                            type="number"
                            name="quantity"
                            placeholder="Number of shares"
                            value={quantity}
                            onChange={handleQuantityChange}
                          ></input>
                          <br></br>
                          <label for="bidPrice">Bid-Price</label>
                          <input
                            type="number"
                            name="bidPrice"
                            placeholder="At what price"
                            value={item.latestPrice}
                            onChange={handleBidPriceChange}
                          ></input>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button color="success" onClick={() => handleSubmit9(item.latestPrice)}>
                          <font color="black">Buy</font>
                        </Button>
                        <Button color="danger" onClick={handleClose9}>
                          <font color="black">Cancel</font>
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <button className="btn1" onClick={handleSellBOC}>
                      Sell
                    </button>
                    <Modal show={sell_boc} onHide={handleClose10}>
                      <Modal.Header>
                        <Modal.Title>
                          Selling {item.companyName} stocks?
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form>
                          <label for="quantity">Quantity</label>
                          <input
                            border="3px solid"
                            type="number"
                            name="quantity"
                            placeholder="Number of shares"
                            value={quantity}
                            onChange={handleQuantityChange}
                          ></input>
                          <br></br>
                          <label for="bidPrice">Bid-Price</label>
                          <input
                            type="number"
                            name="bidPrice"
                            placeholder="At what price"
                            value={item.latestPrice}
                            onChange={handleBidPriceChange}
                          ></input>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button color="success" onClick={() => handleSubmit10(item.latestPrice)}>
                          <font color="black">Sell</font>
                        </Button>
                        <Button color="danger" onClick={handleClose10}>
                          <font color="black">Cancel</font>
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </div>
              <div className="stock-card-chart"></div>
            </div>
          ))}
          {data6.map((item) => (
            <div className="stock-card-container">
              <div className="stock-card-information">
                <h2 className="company-name">{item.companyName}</h2>
                <a href="https://finance.yahoo.com/chart/ORC#eyJpbnRlcnZhbCI6ImRheSIsInBlcmlvZGljaXR5IjoxLCJ0aW1lVW5pdCI6bnVsbCwiY2FuZGxlV2lkdGgiOjcuODAxMjQyMjM2MDI0ODQ0LCJmbGlwcGVkIjpmYWxzZSwidm9sdW1lVW5kZXJsYXkiOnRydWUsImFkaiI6dHJ1ZSwiY3Jvc3NoYWlyIjp0cnVlLCJjaGFydFR5cGUiOiJsaW5lIiwiZXh0ZW5kZWQiOmZhbHNlLCJtYXJrZXRTZXNzaW9ucyI6e30sImFnZ3JlZ2F0aW9uVHlwZSI6Im9obGMiLCJjaGFydFNjYWxlIjoibGluZWFyIiwicGFuZWxzIjp7ImNoYXJ0Ijp7InBlcmNlbnQiOjEsImRpc3BsYXkiOiJBQVBMIiwiY2hhcnROYW1lIjoiY2hhcnQiLCJpbmRleCI6MCwieUF4aXMiOnsibmFtZSI6ImNoYXJ0IiwicG9zaXRpb24iOm51bGx9LCJ5YXhpc0xIUyI6W10sInlheGlzUkhTIjpbImNoYXJ0Iiwi4oCMdm9sIHVuZHLigIwiXX19LCJzZXRTcGFuIjpudWxsLCJsaW5lV2lkdGgiOjIsInN0cmlwZWRCYWNrZ3JvdW5kIjp0cnVlLCJldmVudHMiOnRydWUsImNvbG9yIjoiIzAwODFmMiIsInN0cmlwZWRCYWNrZ3JvdWQiOnRydWUsInJhbmdlIjpudWxsLCJldmVudE1hcCI6eyJjb3Jwb3JhdGUiOnsiZGl2cyI6dHJ1ZSwic3BsaXRzIjp0cnVlfSwic2lnRGV2Ijp7fX0sInN5bWJvbHMiOlt7InN5bWJvbCI6IkFBUEwiLCJzeW1ib2xPYmplY3QiOnsic3ltYm9sIjoiQUFQTCIsInF1b3RlVHlwZSI6IkVRVUlUWSIsImV4Y2hhbmdlVGltZVpvbmUiOiJBbWVyaWNhL05ld19Zb3JrIn0sInBlcmlvZGljaXR5IjoxLCJpbnRlcnZhbCI6ImRheSIsInRpbWVVbml0IjpudWxsLCJzZXRTcGFuIjpudWxsfV0sInN0dWRpZXMiOnsi4oCMdm9sIHVuZHLigIwiOnsidHlwZSI6InZvbCB1bmRyIiwiaW5wdXRzIjp7ImlkIjoi4oCMdm9sIHVuZHLigIwiLCJkaXNwbGF5Ijoi4oCMdm9sIHVuZHLigIwifSwib3V0cHV0cyI6eyJVcCBWb2x1bWUiOiIjMDBiMDYxIiwiRG93biBWb2x1bWUiOiIjZmYzMzNhIn0sInBhbmVsIjoiY2hhcnQiLCJwYXJhbWV0ZXJzIjp7IndpZHRoRmFjdG9yIjowLjQ1LCJjaGFydE5hbWUiOiJjaGFydCIsInBhbmVsTmFtZSI6ImNoYXJ0In19fX0-">
                  <img src={icon} className="graph-icon" alt="graph" />
                  </a>
                <div className="company-values">
                  <table>
                    <tbody>
                      <tr>
                        <td className="bold">Price:</td>
                        <td className="stockDetails">$ {item.latestPrice}</td>
                      </tr>
                      <tr>
                        <td className="bold">Change:</td>
                        <td className="stockDetails">
                          $ {item.change} ({item.changePercent}%) &nbsp;
                          <i className="icon-arrow-up"></i>
                        </td>
                      </tr>
                      <tr>
                        <td className="bold">Market Capitalisation:</td>
                        <td className="stockDetails">$ {item.marketCap}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="add-minus-button-container">
                    <button className="btn3" onClick={handleBuyOracle}>
                      Buy
                    </button>
                    <Modal show={buy_oracle} onHide={handleClose11}>
                      <Modal.Header>
                        <Modal.Title>
                          Buying {item.companyName} stocks?
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form>
                          <label for="quantity">Quantity</label>
                          <input
                            border="3px solid"
                            type="number"
                            name="quantity"
                            placeholder="Number of shares"
                            value={quantity}
                            onChange={handleQuantityChange}
                          ></input>
                          <br></br>
                          <label for="bidPrice">Bid-Price</label>
                          <input
                            type="number"
                            name="bidPrice"
                            placeholder="At what price"
                            value={item.latestPrice}
                            onChange={handleBidPriceChange}
                          ></input>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button color="success" onClick={() => handleSubmit11(item.latestPrice)}>
                          <font color="black">Buy</font>
                        </Button>
                        <Button color="danger" onClick={handleClose11}>
                          <font color="black">Cancel</font>
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <button className="btn1" onClick={handleSellOracle}>
                      Sell
                    </button>
                    <Modal show={sell_oracle} onHide={handleClose12}>
                      <Modal.Header>
                        <Modal.Title>
                          Selling {item.companyName} stocks?
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form>
                          <label for="quantity">Quantity</label>
                          <input
                            border="3px solid"
                            type="number"
                            name="quantity"
                            placeholder="Number of shares"
                            value={quantity}
                            onChange={handleQuantityChange}
                          ></input>
                          <br></br>
                          <label for="bidPrice">Bid-Price</label>
                          <input
                            type="number"
                            name="bidPrice"
                            placeholder="At what price"
                            value={item.latestPrice}
                            onChange={handleBidPriceChange}
                          ></input>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button color="success" onClick={() => handleSubmit12(item.latestPrice)}>
                          <font color="black">Sell</font>
                        </Button>
                        <Button color="danger" onClick={handleClose12}>
                          <font color="black">Cancel</font>
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </div>
              <div className="stock-card-chart"></div>
            </div>
          ))}
          {data7.map((item) => (
            <div className="stock-card-container">
              <div className="stock-card-information">
                <h2 className="company-name">{item.companyName}</h2>
                <a href="https://finance.yahoo.com/chart/GOOG#eyJpbnRlcnZhbCI6ImRheSIsInBlcmlvZGljaXR5IjoxLCJ0aW1lVW5pdCI6bnVsbCwiY2FuZGxlV2lkdGgiOjcuODAxMjQyMjM2MDI0ODQ0LCJmbGlwcGVkIjpmYWxzZSwidm9sdW1lVW5kZXJsYXkiOnRydWUsImFkaiI6dHJ1ZSwiY3Jvc3NoYWlyIjp0cnVlLCJjaGFydFR5cGUiOiJsaW5lIiwiZXh0ZW5kZWQiOmZhbHNlLCJtYXJrZXRTZXNzaW9ucyI6e30sImFnZ3JlZ2F0aW9uVHlwZSI6Im9obGMiLCJjaGFydFNjYWxlIjoibGluZWFyIiwicGFuZWxzIjp7ImNoYXJ0Ijp7InBlcmNlbnQiOjEsImRpc3BsYXkiOiJBQVBMIiwiY2hhcnROYW1lIjoiY2hhcnQiLCJpbmRleCI6MCwieUF4aXMiOnsibmFtZSI6ImNoYXJ0IiwicG9zaXRpb24iOm51bGx9LCJ5YXhpc0xIUyI6W10sInlheGlzUkhTIjpbImNoYXJ0Iiwi4oCMdm9sIHVuZHLigIwiXX19LCJzZXRTcGFuIjpudWxsLCJsaW5lV2lkdGgiOjIsInN0cmlwZWRCYWNrZ3JvdW5kIjp0cnVlLCJldmVudHMiOnRydWUsImNvbG9yIjoiIzAwODFmMiIsInN0cmlwZWRCYWNrZ3JvdWQiOnRydWUsInJhbmdlIjpudWxsLCJldmVudE1hcCI6eyJjb3Jwb3JhdGUiOnsiZGl2cyI6dHJ1ZSwic3BsaXRzIjp0cnVlfSwic2lnRGV2Ijp7fX0sInN5bWJvbHMiOlt7InN5bWJvbCI6IkFBUEwiLCJzeW1ib2xPYmplY3QiOnsic3ltYm9sIjoiQUFQTCIsInF1b3RlVHlwZSI6IkVRVUlUWSIsImV4Y2hhbmdlVGltZVpvbmUiOiJBbWVyaWNhL05ld19Zb3JrIn0sInBlcmlvZGljaXR5IjoxLCJpbnRlcnZhbCI6ImRheSIsInRpbWVVbml0IjpudWxsLCJzZXRTcGFuIjpudWxsfV0sInN0dWRpZXMiOnsi4oCMdm9sIHVuZHLigIwiOnsidHlwZSI6InZvbCB1bmRyIiwiaW5wdXRzIjp7ImlkIjoi4oCMdm9sIHVuZHLigIwiLCJkaXNwbGF5Ijoi4oCMdm9sIHVuZHLigIwifSwib3V0cHV0cyI6eyJVcCBWb2x1bWUiOiIjMDBiMDYxIiwiRG93biBWb2x1bWUiOiIjZmYzMzNhIn0sInBhbmVsIjoiY2hhcnQiLCJwYXJhbWV0ZXJzIjp7IndpZHRoRmFjdG9yIjowLjQ1LCJjaGFydE5hbWUiOiJjaGFydCIsInBhbmVsTmFtZSI6ImNoYXJ0In19fX0-">
                  <img src={icon} className="graph-icon" alt="graph" />
                  </a>
                <div className="company-values">
                  <table>
                    <tbody>
                      <tr>
                        <td className="bold">Price:</td>
                        <td className="stockDetails">$ {item.latestPrice}</td>
                      </tr>
                      <tr>
                        <td className="bold">Change:</td>
                        <td className="stockDetails">
                          $ {item.change} ({item.changePercent}%) &nbsp;
                          <i className="icon-arrow-up"></i>
                        </td>
                      </tr>
                      <tr>
                        <td className="bold">Market Capitalisation:</td>
                        <td className="stockDetails">$ {item.marketCap}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="add-minus-button-container">
                    <button className="btn3" onClick={handleBuyAlphabet}>
                      Buy
                    </button>
                    <Modal show={buy_alphabet} onHide={handleClose13}>
                      <Modal.Header>
                        <Modal.Title>
                          Buying {item.companyName} stocks?
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form>
                          <label for="quantity">Quantity</label>
                          <input
                            border="3px solid"
                            type="number"
                            name="quantity"
                            placeholder="Number of shares"
                            value={quantity}
                            onChange={handleQuantityChange}
                          ></input>
                          <br></br>
                          <label for="bidPrice">Bid-Price</label>
                          <input
                            type="number"
                            name="bidPrice"
                            placeholder="At what price"
                            value={item.latestPrice}
                            onChange={handleBidPriceChange}
                          ></input>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button color="success" onClick={() => handleSubmit13(item.latestPrice)}>
                          <font color="black">Buy</font>
                        </Button>
                        <Button color="danger" onClick={handleClose13}>
                          <font color="black">Cancel</font>
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <button className="btn1" onClick={handleSellAlphabet}>
                      Sell
                    </button>
                    <Modal show={sell_alphabet} onHide={handleClose14}>
                      <Modal.Header>
                        <Modal.Title>
                          Selling {item.companyName} stocks?
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form>
                          <label for="quantity">Quantity</label>
                          <input
                            border="3px solid"
                            type="number"
                            name="quantity"
                            placeholder="Number of shares"
                            value={quantity}
                            onChange={handleQuantityChange}
                          ></input>
                          <br></br>
                          <label for="bidPrice">Bid-Price</label>
                          <input
                            type="number"
                            name="bidPrice"
                            placeholder="At what price"
                            value={item.latestPrice}
                            onChange={handleBidPriceChange}
                          ></input>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button color="success" onClick={() => handleSubmit14(item.latestPrice)}>
                          <font color="black">Sell</font>
                        </Button>
                        <Button color="danger" onClick={handleClose14}>
                          <font color="black">Cancel</font>
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </div>
              <div className="stock-card-chart"></div>
            </div>
          ))}
          {data8.map((item) => (
            <div className="stock-card-container">
              <div className="stock-card-information">
                <h2 className="company-name">{item.companyName}</h2>
                <a href="https://finance.yahoo.com/chart/NKE#eyJpbnRlcnZhbCI6ImRheSIsInBlcmlvZGljaXR5IjoxLCJ0aW1lVW5pdCI6bnVsbCwiY2FuZGxlV2lkdGgiOjcuODAxMjQyMjM2MDI0ODQ0LCJmbGlwcGVkIjpmYWxzZSwidm9sdW1lVW5kZXJsYXkiOnRydWUsImFkaiI6dHJ1ZSwiY3Jvc3NoYWlyIjp0cnVlLCJjaGFydFR5cGUiOiJsaW5lIiwiZXh0ZW5kZWQiOmZhbHNlLCJtYXJrZXRTZXNzaW9ucyI6e30sImFnZ3JlZ2F0aW9uVHlwZSI6Im9obGMiLCJjaGFydFNjYWxlIjoibGluZWFyIiwicGFuZWxzIjp7ImNoYXJ0Ijp7InBlcmNlbnQiOjEsImRpc3BsYXkiOiJBQVBMIiwiY2hhcnROYW1lIjoiY2hhcnQiLCJpbmRleCI6MCwieUF4aXMiOnsibmFtZSI6ImNoYXJ0IiwicG9zaXRpb24iOm51bGx9LCJ5YXhpc0xIUyI6W10sInlheGlzUkhTIjpbImNoYXJ0Iiwi4oCMdm9sIHVuZHLigIwiXX19LCJzZXRTcGFuIjpudWxsLCJsaW5lV2lkdGgiOjIsInN0cmlwZWRCYWNrZ3JvdW5kIjp0cnVlLCJldmVudHMiOnRydWUsImNvbG9yIjoiIzAwODFmMiIsInN0cmlwZWRCYWNrZ3JvdWQiOnRydWUsInJhbmdlIjpudWxsLCJldmVudE1hcCI6eyJjb3Jwb3JhdGUiOnsiZGl2cyI6dHJ1ZSwic3BsaXRzIjp0cnVlfSwic2lnRGV2Ijp7fX0sInN5bWJvbHMiOlt7InN5bWJvbCI6IkFBUEwiLCJzeW1ib2xPYmplY3QiOnsic3ltYm9sIjoiQUFQTCIsInF1b3RlVHlwZSI6IkVRVUlUWSIsImV4Y2hhbmdlVGltZVpvbmUiOiJBbWVyaWNhL05ld19Zb3JrIn0sInBlcmlvZGljaXR5IjoxLCJpbnRlcnZhbCI6ImRheSIsInRpbWVVbml0IjpudWxsLCJzZXRTcGFuIjpudWxsfV0sInN0dWRpZXMiOnsi4oCMdm9sIHVuZHLigIwiOnsidHlwZSI6InZvbCB1bmRyIiwiaW5wdXRzIjp7ImlkIjoi4oCMdm9sIHVuZHLigIwiLCJkaXNwbGF5Ijoi4oCMdm9sIHVuZHLigIwifSwib3V0cHV0cyI6eyJVcCBWb2x1bWUiOiIjMDBiMDYxIiwiRG93biBWb2x1bWUiOiIjZmYzMzNhIn0sInBhbmVsIjoiY2hhcnQiLCJwYXJhbWV0ZXJzIjp7IndpZHRoRmFjdG9yIjowLjQ1LCJjaGFydE5hbWUiOiJjaGFydCIsInBhbmVsTmFtZSI6ImNoYXJ0In19fX0-">
                  <img src={icon} className="graph-icon" alt="graph" />
                  </a>
                <div className="company-values">
                  <table>
                    <tbody>
                      <tr>
                        <td className="bold">Price:</td>
                        <td className="stockDetails">$ {item.latestPrice}</td>
                      </tr>
                      <tr>
                        <td className="bold">Change:</td>
                        <td className="stockDetails">
                          $ {item.change} ({item.changePercent}%) &nbsp;
                          <i className="icon-arrow-up"></i>
                        </td>
                      </tr>
                      <tr>
                        <td className="bold">Market Capitalisation:</td>
                        <td className="stockDetails">$ {item.marketCap}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="add-minus-button-container">
                    <button className="btn3" onClick={handleBuyNike}>
                      Buy
                    </button>
                    <Modal show={buy_nike} onHide={handleClose15}>
                      <Modal.Header>
                        <Modal.Title>
                          Buying {item.companyName} stocks?
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form>
                          <label for="quantity">Quantity</label>
                          <input
                            border="3px solid"
                            type="number"
                            name="quantity"
                            placeholder="Number of shares"
                            value={quantity}
                            onChange={handleQuantityChange}
                          ></input>
                          <br></br>
                          <label for="bidPrice">Bid-Price</label>
                          <input
                            type="number"
                            name="bidPrice"
                            placeholder="At what price"
                            value={item.latestPrice}
                            onChange={handleBidPriceChange}
                          ></input>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button color="success" onClick={() => handleSubmit15(item.latestPrice)}>
                          <font color="black">Buy</font>
                        </Button>
                        <Button color="danger" onClick={handleClose15}>
                          <font color="black">Cancel</font>
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <button className="btn1" onClick={handleSellNike}>
                      Sell
                    </button>
                    <Modal show={sell_nike} onHide={handleClose16}>
                      <Modal.Header>
                        <Modal.Title>
                          Selling {item.companyName} stocks?
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form>
                          <label for="quantity">Quantity</label>
                          <input
                            border="3px solid"
                            type="number"
                            name="quantity"
                            placeholder="Number of shares"
                            value={quantity}
                            onChange={handleQuantityChange}
                          ></input>
                          <br></br>
                          <label for="bidPrice">Bid-Price</label>
                          <input
                            type="number"
                            name="bidPrice"
                            placeholder="At what price"
                            value={item.latestPrice}
                            onChange={handleBidPriceChange}
                          ></input>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button color="success" onClick={() => handleSubmit16(item.latestPrice)}>
                          <font color="black">Sell</font>
                        </Button>
                        <Button color="danger" onClick={handleClose16}>
                          <font color="black">Cancel</font>
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </div>
              <div className="stock-card-chart"></div>
            </div>
          ))}
          {data9.map((item) => (
            <div className="stock-card-container">
              <div className="stock-card-information">
                <h2 className="company-name">{item.companyName}</h2>
                <a href="https://finance.yahoo.com/chart/JPM#eyJpbnRlcnZhbCI6ImRheSIsInBlcmlvZGljaXR5IjoxLCJ0aW1lVW5pdCI6bnVsbCwiY2FuZGxlV2lkdGgiOjcuODAxMjQyMjM2MDI0ODQ0LCJmbGlwcGVkIjpmYWxzZSwidm9sdW1lVW5kZXJsYXkiOnRydWUsImFkaiI6dHJ1ZSwiY3Jvc3NoYWlyIjp0cnVlLCJjaGFydFR5cGUiOiJsaW5lIiwiZXh0ZW5kZWQiOmZhbHNlLCJtYXJrZXRTZXNzaW9ucyI6e30sImFnZ3JlZ2F0aW9uVHlwZSI6Im9obGMiLCJjaGFydFNjYWxlIjoibGluZWFyIiwicGFuZWxzIjp7ImNoYXJ0Ijp7InBlcmNlbnQiOjEsImRpc3BsYXkiOiJBQVBMIiwiY2hhcnROYW1lIjoiY2hhcnQiLCJpbmRleCI6MCwieUF4aXMiOnsibmFtZSI6ImNoYXJ0IiwicG9zaXRpb24iOm51bGx9LCJ5YXhpc0xIUyI6W10sInlheGlzUkhTIjpbImNoYXJ0Iiwi4oCMdm9sIHVuZHLigIwiXX19LCJzZXRTcGFuIjpudWxsLCJsaW5lV2lkdGgiOjIsInN0cmlwZWRCYWNrZ3JvdW5kIjp0cnVlLCJldmVudHMiOnRydWUsImNvbG9yIjoiIzAwODFmMiIsInN0cmlwZWRCYWNrZ3JvdWQiOnRydWUsInJhbmdlIjpudWxsLCJldmVudE1hcCI6eyJjb3Jwb3JhdGUiOnsiZGl2cyI6dHJ1ZSwic3BsaXRzIjp0cnVlfSwic2lnRGV2Ijp7fX0sInN5bWJvbHMiOlt7InN5bWJvbCI6IkFBUEwiLCJzeW1ib2xPYmplY3QiOnsic3ltYm9sIjoiQUFQTCIsInF1b3RlVHlwZSI6IkVRVUlUWSIsImV4Y2hhbmdlVGltZVpvbmUiOiJBbWVyaWNhL05ld19Zb3JrIn0sInBlcmlvZGljaXR5IjoxLCJpbnRlcnZhbCI6ImRheSIsInRpbWVVbml0IjpudWxsLCJzZXRTcGFuIjpudWxsfV0sInN0dWRpZXMiOnsi4oCMdm9sIHVuZHLigIwiOnsidHlwZSI6InZvbCB1bmRyIiwiaW5wdXRzIjp7ImlkIjoi4oCMdm9sIHVuZHLigIwiLCJkaXNwbGF5Ijoi4oCMdm9sIHVuZHLigIwifSwib3V0cHV0cyI6eyJVcCBWb2x1bWUiOiIjMDBiMDYxIiwiRG93biBWb2x1bWUiOiIjZmYzMzNhIn0sInBhbmVsIjoiY2hhcnQiLCJwYXJhbWV0ZXJzIjp7IndpZHRoRmFjdG9yIjowLjQ1LCJjaGFydE5hbWUiOiJjaGFydCIsInBhbmVsTmFtZSI6ImNoYXJ0In19fX0-">
                  <img src={icon} className="graph-icon" alt="graph" />
                  </a>
                <div className="company-values">
                  <table>
                    <tbody>
                      <tr>
                        <td className="bold">Price:</td>
                        <td className="stockDetails">$ {item.latestPrice}</td>
                      </tr>
                      <tr>
                        <td className="bold">Change:</td>
                        <td className="stockDetails">
                          $ {item.change} ({item.changePercent}%) &nbsp;
                          <i className="icon-arrow-up"></i>
                        </td>
                      </tr>
                      <tr>
                        <td className="bold">Market Capitalisation:</td>
                        <td className="stockDetails">$ {item.marketCap}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="add-minus-button-container">
                    <button className="btn3" onClick={handleBuyJPMC}>
                      Buy
                    </button>
                    <Modal show={buy_jpmc} onHide={handleClose17}>
                      <Modal.Header>
                        <Modal.Title>
                          Buying {item.companyName} stocks?
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form>
                          <label for="quantity">Quantity</label>
                          <input
                            border="3px solid"
                            type="number"
                            name="quantity"
                            placeholder="Number of shares"
                            value={quantity}
                            onChange={handleQuantityChange}
                          ></input>
                          <br></br>
                          <label for="bidPrice">Bid-Price</label>
                          <input
                            type="number"
                            name="bidPrice"
                            placeholder="At what price"
                            value={item.latestPrice}
                            onChange={handleBidPriceChange}
                          ></input>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button color="success" onClick={() => handleSubmit17(item.latestPrice)}>
                          <font color="black">Buy</font>
                        </Button>
                        <Button color="danger" onClick={handleClose17}>
                          <font color="black">Cancel</font>
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <button className="btn1" onClick={handleSellJPMC}>
                      Sell
                    </button>
                    <Modal show={sell_jpmc} onHide={handleClose18}>
                      <Modal.Header>
                        <Modal.Title>
                          Selling {item.companyName} stocks?
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form>
                          <label for="quantity">Quantity</label>
                          <input
                            border="3px solid"
                            type="number"
                            name="quantity"
                            placeholder="Number of shares"
                            value={quantity}
                            onChange={handleQuantityChange}
                          ></input>
                          <br></br>
                          <label for="bidPrice">Bid-Price</label>
                          <input
                            type="number"
                            name="bidPrice"
                            placeholder="At what price"
                            value={item.latestPrice}
                            onChange={handleBidPriceChange}
                          ></input>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button color="success" onClick={() => handleSubmit18(item.latestPrice)}>
                          <font color="black">Sell</font>
                        </Button>
                        <Button color="danger" onClick={handleClose18}>
                          <font color="black">Cancel</font>
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </div>
              <div className="stock-card-chart"></div>
            </div>
          ))}
          {data10.map((item) => (
            <div className="stock-card-container">
              <div className="stock-card-information">
                <h2 className="company-name">{item.companyName}</h2>
                <a href="https://finance.yahoo.com/chart/MSFT#eyJpbnRlcnZhbCI6ImRheSIsInBlcmlvZGljaXR5IjoxLCJ0aW1lVW5pdCI6bnVsbCwiY2FuZGxlV2lkdGgiOjcuODAxMjQyMjM2MDI0ODQ0LCJmbGlwcGVkIjpmYWxzZSwidm9sdW1lVW5kZXJsYXkiOnRydWUsImFkaiI6dHJ1ZSwiY3Jvc3NoYWlyIjp0cnVlLCJjaGFydFR5cGUiOiJsaW5lIiwiZXh0ZW5kZWQiOmZhbHNlLCJtYXJrZXRTZXNzaW9ucyI6e30sImFnZ3JlZ2F0aW9uVHlwZSI6Im9obGMiLCJjaGFydFNjYWxlIjoibGluZWFyIiwicGFuZWxzIjp7ImNoYXJ0Ijp7InBlcmNlbnQiOjEsImRpc3BsYXkiOiJBQVBMIiwiY2hhcnROYW1lIjoiY2hhcnQiLCJpbmRleCI6MCwieUF4aXMiOnsibmFtZSI6ImNoYXJ0IiwicG9zaXRpb24iOm51bGx9LCJ5YXhpc0xIUyI6W10sInlheGlzUkhTIjpbImNoYXJ0Iiwi4oCMdm9sIHVuZHLigIwiXX19LCJzZXRTcGFuIjpudWxsLCJsaW5lV2lkdGgiOjIsInN0cmlwZWRCYWNrZ3JvdW5kIjp0cnVlLCJldmVudHMiOnRydWUsImNvbG9yIjoiIzAwODFmMiIsInN0cmlwZWRCYWNrZ3JvdWQiOnRydWUsInJhbmdlIjpudWxsLCJldmVudE1hcCI6eyJjb3Jwb3JhdGUiOnsiZGl2cyI6dHJ1ZSwic3BsaXRzIjp0cnVlfSwic2lnRGV2Ijp7fX0sInN5bWJvbHMiOlt7InN5bWJvbCI6IkFBUEwiLCJzeW1ib2xPYmplY3QiOnsic3ltYm9sIjoiQUFQTCIsInF1b3RlVHlwZSI6IkVRVUlUWSIsImV4Y2hhbmdlVGltZVpvbmUiOiJBbWVyaWNhL05ld19Zb3JrIn0sInBlcmlvZGljaXR5IjoxLCJpbnRlcnZhbCI6ImRheSIsInRpbWVVbml0IjpudWxsLCJzZXRTcGFuIjpudWxsfV0sInN0dWRpZXMiOnsi4oCMdm9sIHVuZHLigIwiOnsidHlwZSI6InZvbCB1bmRyIiwiaW5wdXRzIjp7ImlkIjoi4oCMdm9sIHVuZHLigIwiLCJkaXNwbGF5Ijoi4oCMdm9sIHVuZHLigIwifSwib3V0cHV0cyI6eyJVcCBWb2x1bWUiOiIjMDBiMDYxIiwiRG93biBWb2x1bWUiOiIjZmYzMzNhIn0sInBhbmVsIjoiY2hhcnQiLCJwYXJhbWV0ZXJzIjp7IndpZHRoRmFjdG9yIjowLjQ1LCJjaGFydE5hbWUiOiJjaGFydCIsInBhbmVsTmFtZSI6ImNoYXJ0In19fX0-">
                  <img src={icon} className="graph-icon" alt="graph" />
                  </a>
                <div className="company-values">
                  <table>
                    <tbody>
                      <tr>
                        <td className="bold">Price:</td>
                        <td className="stockDetails">$ {item.latestPrice}</td>
                      </tr>
                      <tr>
                        <td className="bold">Change:</td>
                        <td className="stockDetails">
                          $ {item.change} ({item.changePercent}%) &nbsp;
                          <i className="icon-arrow-up"></i>
                        </td>
                      </tr>
                      <tr>
                        <td className="bold">Market Capitalisation:</td>
                        <td className="stockDetails">$ {item.marketCap}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="add-minus-button-container">
                    <button className="btn3" onClick={handleBuyMicrosoft}>
                      Buy
                    </button>
                    <Modal show={buy_microsoft} onHide={handleClose19}>
                      <Modal.Header>
                        <Modal.Title>
                          Buying {item.companyName} stocks?
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form>
                          <label for="quantity">Quantity</label>
                          <input
                            border="3px solid"
                            type="number"
                            name="quantity"
                            placeholder="Number of shares"
                            value={quantity}
                            onChange={handleQuantityChange}
                          ></input>
                          <br></br>
                          <label for="bidPrice">Bid-Price</label>
                          <input
                            type="number"
                            name="bidPrice"
                            placeholder="At what price"
                            value={item.latestPrice}
                            onChange={handleBidPriceChange}
                          ></input>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button color="success" onClick={() => handleSubmit19(item.latestPrice)}>
                          <font color="black">Buy</font>
                        </Button>
                        <Button color="danger" onClick={handleClose19}>
                          <font color="black">Cancel</font>
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <button className="btn1" onClick={handleSellMicrosoft}>
                      Sell
                    </button>
                    <Modal show={sell_microsoft} onHide={handleClose20}>
                      <Modal.Header>
                        <Modal.Title>
                          Selling {item.companyName} stocks?
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form>
                          <label for="quantity">Quantity</label>
                          <input
                            border="3px solid"
                            type="number"
                            name="quantity"
                            placeholder="Number of shares"
                            value={quantity}
                            onChange={handleQuantityChange}
                          ></input>
                          <br></br>
                          <label for="bidPrice">Bid-Price</label>
                          <input
                            type="number"
                            name="bidPrice"
                            placeholder="At what price"
                            value={item.latestPrice}
                            onChange={handleBidPriceChange}
                          ></input>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button color="success" onClick={() => handleSubmit20(item.latestPrice)}>
                          <font color="black">Sell</font>
                        </Button>
                        <Button color="danger" onClick={handleClose20}>
                          <font color="black">Cancel</font>
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </div>
              <div className="stock-card-chart"></div>
            </div>
          ))}
          {data11.map((item) => (
            <div className="stock-card-container">
              <div className="stock-card-information">
                <h2 className="company-name">{item.companyName}</h2>
                <a href="https://finance.yahoo.com/chart/NVDA#eyJpbnRlcnZhbCI6ImRheSIsInBlcmlvZGljaXR5IjoxLCJ0aW1lVW5pdCI6bnVsbCwiY2FuZGxlV2lkdGgiOjcuODAxMjQyMjM2MDI0ODQ0LCJmbGlwcGVkIjpmYWxzZSwidm9sdW1lVW5kZXJsYXkiOnRydWUsImFkaiI6dHJ1ZSwiY3Jvc3NoYWlyIjp0cnVlLCJjaGFydFR5cGUiOiJsaW5lIiwiZXh0ZW5kZWQiOmZhbHNlLCJtYXJrZXRTZXNzaW9ucyI6e30sImFnZ3JlZ2F0aW9uVHlwZSI6Im9obGMiLCJjaGFydFNjYWxlIjoibGluZWFyIiwicGFuZWxzIjp7ImNoYXJ0Ijp7InBlcmNlbnQiOjEsImRpc3BsYXkiOiJBQVBMIiwiY2hhcnROYW1lIjoiY2hhcnQiLCJpbmRleCI6MCwieUF4aXMiOnsibmFtZSI6ImNoYXJ0IiwicG9zaXRpb24iOm51bGx9LCJ5YXhpc0xIUyI6W10sInlheGlzUkhTIjpbImNoYXJ0Iiwi4oCMdm9sIHVuZHLigIwiXX19LCJzZXRTcGFuIjpudWxsLCJsaW5lV2lkdGgiOjIsInN0cmlwZWRCYWNrZ3JvdW5kIjp0cnVlLCJldmVudHMiOnRydWUsImNvbG9yIjoiIzAwODFmMiIsInN0cmlwZWRCYWNrZ3JvdWQiOnRydWUsInJhbmdlIjpudWxsLCJldmVudE1hcCI6eyJjb3Jwb3JhdGUiOnsiZGl2cyI6dHJ1ZSwic3BsaXRzIjp0cnVlfSwic2lnRGV2Ijp7fX0sInN5bWJvbHMiOlt7InN5bWJvbCI6IkFBUEwiLCJzeW1ib2xPYmplY3QiOnsic3ltYm9sIjoiQUFQTCIsInF1b3RlVHlwZSI6IkVRVUlUWSIsImV4Y2hhbmdlVGltZVpvbmUiOiJBbWVyaWNhL05ld19Zb3JrIn0sInBlcmlvZGljaXR5IjoxLCJpbnRlcnZhbCI6ImRheSIsInRpbWVVbml0IjpudWxsLCJzZXRTcGFuIjpudWxsfV0sInN0dWRpZXMiOnsi4oCMdm9sIHVuZHLigIwiOnsidHlwZSI6InZvbCB1bmRyIiwiaW5wdXRzIjp7ImlkIjoi4oCMdm9sIHVuZHLigIwiLCJkaXNwbGF5Ijoi4oCMdm9sIHVuZHLigIwifSwib3V0cHV0cyI6eyJVcCBWb2x1bWUiOiIjMDBiMDYxIiwiRG93biBWb2x1bWUiOiIjZmYzMzNhIn0sInBhbmVsIjoiY2hhcnQiLCJwYXJhbWV0ZXJzIjp7IndpZHRoRmFjdG9yIjowLjQ1LCJjaGFydE5hbWUiOiJjaGFydCIsInBhbmVsTmFtZSI6ImNoYXJ0In19fX0-">
                  <img src={icon} className="graph-icon" alt="graph" />
                  </a>
                <div className="company-values">
                  <table>
                    <tbody>
                      <tr>
                        <td className="bold">Price:</td>
                        <td className="stockDetails">$ {item.latestPrice}</td>
                      </tr>
                      <tr>
                        <td className="bold">Change:</td>
                        <td className="stockDetails">
                          $ {item.change} ({item.changePercent}%) &nbsp;
                          <i className="icon-arrow-up"></i>
                        </td>
                      </tr>
                      <tr>
                        <td className="bold">Market Capitalisation:</td>
                        <td className="stockDetails">$ $ {item.marketCap}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="add-minus-button-container">
                    <button className="btn3" onClick={handleBuyNvidia}>
                      Buy
                    </button>
                    <Modal show={buy_nvidia} onHide={handleClose21}>
                      <Modal.Header>
                        <Modal.Title>
                          Buying {item.companyName} stocks?
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form>
                          <label for="quantity">Quantity</label>
                          <input
                            border="3px solid"
                            type="number"
                            name="quantity"
                            placeholder="Number of shares"
                            value={quantity}
                            onChange={handleQuantityChange}
                          ></input>
                          <br></br>
                          <label for="bidPrice">Bid-Price</label>
                          <input
                            type="number"
                            name="bidPrice"
                            placeholder="At what price"
                            value={item.latestPrice}
                            onChange={handleBidPriceChange}
                          ></input>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button color="success" onClick={() => handleSubmit21(item.latestPrice)}>
                          <font color="black">Buy</font>
                        </Button>
                        <Button color="danger" onClick={handleClose21}>
                          <font color="black">Cancel</font>
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <button className="btn1" onClick={handleSellNvidia}>
                      Sell
                    </button>
                    <Modal show={sell_nvidia} onHide={handleClose22}>
                      <Modal.Header>
                        <Modal.Title>
                          Selling {item.companyName} stocks?
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form>
                          <label for="quantity">Quantity</label>
                          <input
                            border="3px solid"
                            type="number"
                            name="quantity"
                            placeholder="Number of shares"
                            value={quantity}
                            onChange={handleQuantityChange}
                          ></input>
                          <br></br>
                          <label for="bidPrice">Bid-Price</label>
                          <input
                            type="number"
                            name="bidPrice"
                            placeholder="At what price"
                            value={item.latestPrice}
                            onChange={handleBidPriceChange}
                          ></input>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button color="success" onClick={() => handleSubmit22(item.latestPrice)}>
                          <font color="black">Sell</font>
                        </Button>
                        <Button color="danger" onClick={handleClose22}>
                          <font color="black">Cancel</font>
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {data12.map((item) => (
            <div className="stock-card-container">
              <div className="stock-card-information">
                <h2 className="company-name">{item.companyName}</h2>
                <a href="https://finance.yahoo.com/chart/V#eyJpbnRlcnZhbCI6ImRheSIsInBlcmlvZGljaXR5IjoxLCJ0aW1lVW5pdCI6bnVsbCwiY2FuZGxlV2lkdGgiOjcuODAxMjQyMjM2MDI0ODQ0LCJmbGlwcGVkIjpmYWxzZSwidm9sdW1lVW5kZXJsYXkiOnRydWUsImFkaiI6dHJ1ZSwiY3Jvc3NoYWlyIjp0cnVlLCJjaGFydFR5cGUiOiJsaW5lIiwiZXh0ZW5kZWQiOmZhbHNlLCJtYXJrZXRTZXNzaW9ucyI6e30sImFnZ3JlZ2F0aW9uVHlwZSI6Im9obGMiLCJjaGFydFNjYWxlIjoibGluZWFyIiwicGFuZWxzIjp7ImNoYXJ0Ijp7InBlcmNlbnQiOjEsImRpc3BsYXkiOiJBQVBMIiwiY2hhcnROYW1lIjoiY2hhcnQiLCJpbmRleCI6MCwieUF4aXMiOnsibmFtZSI6ImNoYXJ0IiwicG9zaXRpb24iOm51bGx9LCJ5YXhpc0xIUyI6W10sInlheGlzUkhTIjpbImNoYXJ0Iiwi4oCMdm9sIHVuZHLigIwiXX19LCJzZXRTcGFuIjpudWxsLCJsaW5lV2lkdGgiOjIsInN0cmlwZWRCYWNrZ3JvdW5kIjp0cnVlLCJldmVudHMiOnRydWUsImNvbG9yIjoiIzAwODFmMiIsInN0cmlwZWRCYWNrZ3JvdWQiOnRydWUsInJhbmdlIjpudWxsLCJldmVudE1hcCI6eyJjb3Jwb3JhdGUiOnsiZGl2cyI6dHJ1ZSwic3BsaXRzIjp0cnVlfSwic2lnRGV2Ijp7fX0sInN5bWJvbHMiOlt7InN5bWJvbCI6IkFBUEwiLCJzeW1ib2xPYmplY3QiOnsic3ltYm9sIjoiQUFQTCIsInF1b3RlVHlwZSI6IkVRVUlUWSIsImV4Y2hhbmdlVGltZVpvbmUiOiJBbWVyaWNhL05ld19Zb3JrIn0sInBlcmlvZGljaXR5IjoxLCJpbnRlcnZhbCI6ImRheSIsInRpbWVVbml0IjpudWxsLCJzZXRTcGFuIjpudWxsfV0sInN0dWRpZXMiOnsi4oCMdm9sIHVuZHLigIwiOnsidHlwZSI6InZvbCB1bmRyIiwiaW5wdXRzIjp7ImlkIjoi4oCMdm9sIHVuZHLigIwiLCJkaXNwbGF5Ijoi4oCMdm9sIHVuZHLigIwifSwib3V0cHV0cyI6eyJVcCBWb2x1bWUiOiIjMDBiMDYxIiwiRG93biBWb2x1bWUiOiIjZmYzMzNhIn0sInBhbmVsIjoiY2hhcnQiLCJwYXJhbWV0ZXJzIjp7IndpZHRoRmFjdG9yIjowLjQ1LCJjaGFydE5hbWUiOiJjaGFydCIsInBhbmVsTmFtZSI6ImNoYXJ0In19fX0-">
                  <img src={icon} className="graph-icon" alt="graph" />
                  </a>
                <div className="company-values">
                  <table>
                    <tbody>
                      <tr>
                        <td className="bold">Price:</td>
                        <td className="stockDetails">$ {item.latestPrice}</td>
                      </tr>
                      <tr>
                        <td className="bold">Change:</td>
                        <td className="stockDetails">
                          $ {item.change} ({item.changePercent}%) &nbsp;
                          <i className="icon-arrow-up"></i>
                        </td>
                      </tr>
                      <tr>
                        <td className="bold">Market Capitalisation:</td>
                        <td className="stockDetails">$ {item.marketCap}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="add-minus-button-container">
                    <button className="btn3" onClick={handleBuyVisa}>
                      Buy
                    </button>
                    <Modal show={buy_visa} onHide={handleClose23}>
                      <Modal.Header>
                        <Modal.Title>
                          Buying {item.companyName} stocks?
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form>
                          <label for="quantity">Quantity</label>
                          <input
                            border="3px solid"
                            type="number"
                            name="quantity"
                            placeholder="Number of shares"
                            value={quantity}
                            onChange={handleQuantityChange}
                          ></input>
                          <br></br>
                          <label for="bidPrice">Bid-Price</label>
                          <input
                            type="number"
                            name="bidPrice"
                            placeholder="At what price"
                            value={item.latestPrice}
                            onChange={handleBidPriceChange}
                          ></input>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button color="success" onClick={() => handleSubmit23(item.latestPrice)}>
                          <font color="black">Buy</font>
                        </Button>
                        <Button color="danger" onClick={handleClose23}>
                          <font color="black">Cancel</font>
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <button className="btn1" onClick={handleSellVisa}>
                      Sell
                    </button>
                    <Modal show={sell_visa} onHide={handleClose24}>
                      <Modal.Header>
                        <Modal.Title>
                          Selling {item.companyName} stocks?
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form>
                          <label for="quantity">Quantity</label>
                          <input
                            border="3px solid"
                            type="number"
                            name="quantity"
                            placeholder="Number of shares"
                            value={quantity}
                            onChange={handleQuantityChange}
                          ></input>
                          <br></br>
                          <label for="bidPrice">Bid-Price</label>
                          <input
                            type="number"
                            name="bidPrice"
                            placeholder="At what price"
                            value={item.latestPrice}
                            onChange={handleBidPriceChange}
                          ></input>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button color="success" onClick={() => handleSubmit24(item.latestPrice)}>
                          <font color="black">Sell</font>
                        </Button>
                        <Button color="danger" onClick={handleClose24}>
                          <font color="black">Cancel</font>
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </div>
              <div className="stock-card-chart"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Market() {
  return (
    <div>
      <App/>
    </div>
  );
}

export default Market;