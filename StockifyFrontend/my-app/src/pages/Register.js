import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useRegisterUserMutation } from "../services/userAuthApi";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
  Alert,
  Typography,
} from "@mui/material";
import { storeToken } from "../services/LocalStorageService";
import logo from "../images/image-12.jpg";

const Registration = () => {
  const [server_error, setServerError] = useState({});
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      password2: data.get("password2"),
      tc: data.get("tc"),
    };
    const res = await registerUser(actualData);
    if (res.error) {
      console.log(typeof res.error.data.errors);
      console.log(res.error.data.errors);
      setServerError(res.error.data.errors);
    }
    if (res.data) {
      console.log(typeof res.data);
      console.log(res.data);
      storeToken(res.data.token);
      navigate("/LogIn");
    }
  };

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
        <h1 className="login-heading" style={{ color: "white" }}>
          SIGN UP
        </h1>
        <Box
          component="form"
          noValidate
          sx={{ mt: 1 }}
          id="registration-form"
          onSubmit={handleSubmit}
        >
          <TextField
            className="login_textfield"
            margin="normal"
            required
            fullWidth
            id="name"
            name="name"
            label="Name"
          />
          {/* error indication */}
          {server_error.name ? (
            <Typography style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
              {server_error.name[0]}
            </Typography>
          ) : (
            ""
          )}
          <TextField
            className="login_textfield"
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            label="Email Address"
          />
          {/* error indication */}
          {server_error.email ? (
            <Typography style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
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
          {/* error indication */}
          {server_error.password ? (
            <Typography style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
              {server_error.password[0]}
            </Typography>
          ) : (
            ""
          )}
          <TextField
            className="login_textfield"
            margin="normal"
            required
            fullWidth
            id="password2"
            name="password2"
            label="Confirm Password"
            type="password"
          />
          {/* error indication */}
          {server_error.password2 ? (
            <Typography style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
              {server_error.password2[0]}
            </Typography>
          ) : (
            ""
          )}
          <div className="checkbox-register" style={{ color: "white" }}>
            <FormControlLabel
              control={
                <Checkbox value={true} color="primary" name="tc" id="tc" />
              }
              label="I agree to terms and conditions."
            />
          </div>
          {/* error indication */}
          {server_error.tc ? (
            <span style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
              {server_error.tc[0]}
            </span>
          ) : (
            ""
          )}
          <Box textAlign="center">
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, px: 5 }}
            >
              Join
            </Button>
          </Box>
        </Box>
        {/* error indication password doesn't match */}
        {server_error.non_field_errors ? (
          <Alert severity="error">{server_error.non_field_errors[0]}</Alert>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Registration;
