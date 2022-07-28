import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./Home";
function EkorNav() {
  const state = useSelector((state) => state.handleCart.carts);
  const main_head = {
    backgroundColor: "#f4f0f7",
    color: "ffff",
    zIndex: 1
  };
  const navbar = {
    minHeight: "10vh",
    padding: "1rem",
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
          </ul>
        </nav>
      </header>
    </>
  );
}
export default EkorNav;
