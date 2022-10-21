import React from "react";
import flowerPhoto from "../Images/pl-image.png";
import "../Styles/FlowerItem.css";
import { Link } from "react-router-dom";
import FavoriteStarButton from "./Buttons/FavoriteStarButton";

const FlowerItem = () => {
  return (
    <div className="flower-card">
      <Link to="/flowerdetail">
        <img src={flowerPhoto} alt="" />
      </Link>
      <div className="favorite-btn">
        <FavoriteStarButton />
      </div>
      <div className="flower-description">
        <div className="flower-name">
          <h3>Balloon Flower</h3>
        </div>
        <div className="latin-name">
          <p>Platycodon grandiflorus</p>
        </div>
        <div className="flower-sightings">
          <p>127 sightings</p>
        </div>
      </div>
    </div>
  );
};

export default FlowerItem;
