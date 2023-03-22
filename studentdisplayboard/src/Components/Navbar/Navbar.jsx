import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions//fetchDataAction";
import { navActiveLink, navLink } from "./styleClasses";

const Navbar = () => {
  const navStyle = ({ isActive }) => {
    return isActive ? navLink : navActiveLink;
  };

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.token);
  const navigation = useNavigate();
  const handleClick = () => {
    localStorage.clear();
    dispatch(logout());
    navigation("/login");
  };
  return (
    <ul className="nav">
      {!isLoggedIn && (
        <li>
          <NavLink to="/login" style={navStyle}>
            Login
          </NavLink>
        </li>
      )}
      {!isLoggedIn && (
        <li>
          <NavLink to="/signup" style={navStyle}>
            Register
          </NavLink>
        </li>
      )}
      {isLoggedIn && (
        <li>
          <NavLink to="/dashboard" style={navStyle}>
            HOME
          </NavLink>
        </li>
      )}
      {isLoggedIn && (
        <li>
          <NavLink to="/login" style={navStyle} onClick={handleClick}>
            Logout
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default Navbar;
