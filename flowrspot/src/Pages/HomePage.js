/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Hero from "../Images/pl-hero.png";
import SearchIcon from "../Images/Vector 3.png";
import "../Styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="hero-section">
      <div className="hero-image">
        <img className="hero-image-background" src={Hero} />
        <div className="hero-image-content">
          <h1>Discover flowers around you</h1>
          <p className="explore">Explore between more than 8.427 sightings</p>
          <input placeholder="Looking for something specific?" />
          <img className="hero-image-search-image" src={SearchIcon} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
