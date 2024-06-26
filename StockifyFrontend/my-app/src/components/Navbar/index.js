import React, { useEffect, useState } from "react";
import "./navbarelement.css";
import { NavLinks, NavLogo, NavBtnLink, NavLinkss } from "./NavbarElements";
import "bootstrap/dist/css/bootstrap.min.css";
import { getToken } from "../../services/LocalStorageService";
import { useGetLoggedUserQuery } from "../../services/userAuthApi";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../features/userSlice";
const Navbar = () => {
  const { access_token } = getToken();
  const { data, isSuccess } = useGetLoggedUserQuery(access_token);

  const [userData, setUserData] = useState({
    email: "",
    name: "",
  });
  // Store User Data in Local State
  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        email: data.email,
        name: data.name,
      });
    }
  }, [data, isSuccess]);

  // Store User Data in Redux Store
  const dispatch = useDispatch();
  useEffect(() => {
    if (data && isSuccess) {
      dispatch(
        setUserInfo({
          email: data.email,
          name: data.name,
        })
      );
    }
  }, [data, isSuccess, dispatch]);
  return (
    <>
      <div className="Nav">
        <div className="NavbarContainer">
          <NavLogo className="NavLogo" to="/">
            Stockify
          </NavLogo>
          <div className="NavMenu">
            <div className="Nav-responsive">
              <div className="NavItem">
                <NavLinks to="about"> About</NavLinks>
              </div>
            </div>
            <div className="Nav-responsive">
              <div className="NavItem">
                <NavLinks to="discover">Discover</NavLinks>
              </div>
            </div>
            <div className="NavItem">
              <NavLinkss to="register">Register</NavLinkss>
            </div>
          </div>
          {access_token ? (
            <div className="NavBtn">
              <div className="Navbtnlink">
                <NavBtnLink to="login">{userData.name}</NavBtnLink>
              </div>
            </div>
          ) : (
            <div className="NavBtn">
              <div className="Navbtnlink">
                <NavBtnLink to="login">Log In</NavBtnLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
