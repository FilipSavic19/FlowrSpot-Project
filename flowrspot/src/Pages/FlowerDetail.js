import React from "react";
import FavoriteStarButton from "../components/Buttons/FavoriteStarButton";
import heroSection from "../Images/pl-hero1.png";
import flowerImage from "../Images/pl-image1.png";
import "../Styles/FlowerDetail.css";

const FlowerDetail = () => {
  return (
    <div>
      <div className="hero-section-flower-detail">
        <img className="hero-img" src={heroSection} alt="" />
        <div className="hero-section-content">
          <div className="flower-image">
            <img className="flower-img" src={flowerImage} alt="" />
          </div>
          <div className="flower-profile">
            <div className="flower-detail-left">
              <div className="flower-sighting">
                <FavoriteStarButton />
                <p className="n-sightings">127 sightings</p>
              </div>
              <div className="flower-name">
                <div className="flower-name-left">
                  <h3>Balloon Flower</h3>
                  <p>Platycodon grandiflorus</p>
                </div>
              </div>
            </div>
            <div className="flower-name-right">
              <button>+Add New Sighting</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowerDetail;
