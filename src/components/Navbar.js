import React, { useState } from "react";
import logo from "../shop.png";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "./AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Home from "./Home";
function Navbar() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to logout");
    }
  };
  const email = currentUser.email;
  const name = email.substring(0, email.indexOf("@"));
  const state = useSelector((state) => state.handleCart.carts);
  const main_head = {
    backgroundColor: "#fff",
    color: "ffff",
    zIndex: 1
  };
  const navbar = {
    minHeight: "10vh",
    padding: "2rem",
    display: "flex",
    alignItem: "center",
    width: "90%",
    margin: "auto",
    flexWrap: "wrap"
  };
  const uli = {
    display: "flex",
    alignItem: "center",
    justifyContent: "space-around",
    flex: "1 1 40rem",
    listStyle: "none"
  };
  const logo = {
    flex: "2 1 40rem",
    fontStyle: "italic",
    fontWeight: "400"
  };
  const user = {
    display: "flex"
  };
  return (
    <>
      <header style={main_head}>
        <nav style={navbar}>
          <h1 style={logo}>
            <NavLink className="nav-link" to="/">
              Shopee
            </NavLink>
          </h1>
          <ul style={uli}>
            <li>
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="nav-link">
                Cart ({state.length})
              </NavLink>
            </li>
            {/* <li>{name}</li> */}
            <li>
              <div style={user}>
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ marginRight: "30px" }}
                />
                <p>{name}</p>
              </div>
              <button onClick={handleLogout}>Log Out</button>
            </li>
          </ul>
        </nav>
      </header>
      <Home />
    </>
  );
}

export default Navbar;
