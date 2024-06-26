import React from "react";
import { Link } from "react-router-dom";
import "../components/LogInPage/LogInPage.css";
import logo from "../images/image-11.jpg";
import { useState } from "react";
import { useEffect } from "react";
import {
  TextField,
  Button,
  Box,
  Alert,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../services/userAuthApi";
import { getToken, storeToken } from "../services/LocalStorageService";
import { setUserToken } from "../features/authSlice";
const UserLogin = () => {
  const [server_error, setServerError] = useState({});
  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    const res = await loginUser(actualData);
    if (res.error) {
      // console.log(typeof (res.error.data.errors))
      // console.log(res.error.data.errors)
      setServerError(res.error.data.errors);
    }
    if (res.data) {
      console.log(typeof res.data);
      console.log(res.data);
      storeToken(res.data.token);
      let { access_token } = getToken();
      dispatch(setUserToken({ access_token: access_token }));
      navigate("/Portfolio");
    }
  };
  let { access_token } = getToken();
  useEffect(() => {
    dispatch(setUserToken({ access_token: access_token }));
  }, [access_token, dispatch]);

  return (
    <div className="container1">
      {server_error.non_field_errors
        ? console.log(server_error.non_field_errors[0])
        : ""}
      {server_error.email ? console.log(server_error.email[0]) : ""}
      {server_error.password ? console.log(server_error.password[0]) : ""}
      {/* {this.renderRedirect()} */}
      <div className="div1">
        <img src={logo} height="100%" />
      </div>
      <div className="div2">
        <h1 className="login-heading">LOGIN</h1>
        <div className="form_container">
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            id="login-form"
            onSubmit={handleSubmit}
          >
            <TextField
              className="login_textfield"
              borderColor="white"
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              label="Email Address"
            />
            {server_error.email ? (
              <Typography
                style={{ fontSize: 12, color: "white", paddingLeft: 10 }}
              >
                {server_error.email[0]}
              </Typography>
            ) : (
              ""
            )}
            <TextField
              className="login_textfield"
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
            />
            {server_error.password ? (
              <Typography
                style={{ fontSize: 12, color: "red", paddingLeft: 10 }}
              >
                {server_error.password[0]}
              </Typography>
            ) : (
              ""
            )}
            <Box textAlign="center">
              {isLoading ? (
                <CircularProgress />
              ) : (
                <Button
                  color="success"
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, px: 5 }}
                >
                  Login
                </Button>
              )}
            </Box>

            <NavLink to="/sendpasswordresetemail">Forgot Password?</NavLink>
            {server_error.non_field_errors ? (
              <Alert severity="error">{server_error.non_field_errors[0]}</Alert>
            ) : (
              ""
            )}
          </Box>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
