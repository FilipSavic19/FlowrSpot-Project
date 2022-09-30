/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import Vector from "../Images/Vector.png";
import Vector1 from "../Images/Vector1.png";
import Vector2 from "../Images/Vector2.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src={Vector} />
          <img src={Vector1} />
          <img src={Vector2} />
        </div>
        <h2>FlowrSpot</h2>
      </div>
      <div className="navbar-right">
        <Link className="navbar-item" to="/flowerlist">
          Flowers
        </Link>
        <Link className="navbar-item" to="/sightinglist">
          Latest Sightings
        </Link>
        <Link className="navbar-item" to="/favoriteflowers">
          Favorites
        </Link>
        <Link className="navbar-item-login" to="/homelogin">
          Login
        </Link>

        <button>New Account</button>
      </div>
    </div>
  );
};

export default Navbar;
