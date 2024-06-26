import React, { useState, useEffect, Fragment } from "react";
import { removeToken } from "../services/LocalStorageService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { unSetUserToken } from "../features/authSlice";
import { unsetUserInfo } from "../features/userSlice";
const Logout = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch(unsetUserInfo({ name: "", email: "" }));
    dispatch(unSetUserToken({ access_token: null }));
    removeToken();
    navigate("/");
  };

  return (
    <div>
      {
        <a type="button" onClick={handleLogout}>
          Logout
        </a>
      }
    </div>
  );
};

export default Logout;
