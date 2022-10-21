import React from "react";
import cardPhoto from "../Images/pl-image.png";
import cardPfp from "../Images/profile-holder.png";
import "../Styles/CardSighting.css";
import CommentsAndFavorites from "./CommentsAndFavorites";

const CardSighting = () => {
  return (
    <div className="card-sighting">
      <div className="card-picture">
        <img src={cardPhoto} alt="" />
        <div className="card-location">
          <i class="fa fa-map-marker" />
          <p>San Francisco, US</p>
        </div>
      </div>
      <div className="card-description">
        <div className="card-pfp">
          <img src={cardPfp} alt="" width="45px" />
          <div className="card-user-info">
            <p className="name-flwr">Balcony Flower</p>
            <p className="name-usr">by Adam Moore</p>
          </div>
        </div>
        <div className="card-text">
          <p>
            Platycodon grandiflorus (from Ancient Greek πλατύς "wide" and κώδων
            "bell") is a species of herbaceous flowering perennial plant of the
            …
          </p>
        </div>
        <div className="card-favorites-comments">
          <CommentsAndFavorites />
        </div>
      </div>
    </div>
  );
};

export default CardSighting;
