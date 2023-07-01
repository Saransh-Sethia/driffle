import React from "react";
import "./Navbar.css";
import { FaGlobe } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { AiFillShopping } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <NavLink className="primary-nav" to="/home">
          <img
            className="logo"
            alt=""
            id="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPmOehj7fcnxpIjkbKbiWpkrxvnl71cC8Fuw&usqp=CAU"
          />
        </NavLink>
        <NavLink className="icon" to="/origin">
          <FaGlobe />
        </NavLink>
        <NavLink className="icon" to="/likes">
          <AiFillHeart />
        </NavLink>
        <NavLink className="icon" to="/cart">
          <AiFillShopping />
        </NavLink>
        <NavLink className="icon" to="/users">
          <FaUserCircle />
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
