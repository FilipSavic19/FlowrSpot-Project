/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Hero from "../Images/pl-hero.png";
import "../Styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="hero-section">
      <div className="hero-image">
        <img id="img" src={Hero} />
      </div>
      <h1>Discover flowers around you</h1>
    </div>
  );
};

export default HomePage;
