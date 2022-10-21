import React from "react";
import sightingCardPhoto from "../Images/pl-image.png";
import sightingCardPfp from "../Images/profile-holder.png";
import CommentsAndFavorites from "./CommentsAndFavorites";
import "../Styles/SightingDetailCard.css";

const SightingDetailCard = () => {
  return (
    <div className="sightingDetailCard">
      <div className="sightingDetailCard-picture">
        <img src={sightingCardPhoto} alt="" />
      </div>
      <div className="sightingDetailCard-description">
        <div className="sightingDetailCard-pfp">
          <img src={sightingCardPfp} alt="" width="45px" />
          <div className="sightingDetailCard-user-info">
            <p className="sightingDetailCardName-flwr">Balcony Flower</p>
            <p className="sightingDetailCardName-usr">by Adam Moore</p>
          </div>
        </div>
        <div className="sightingDetailCard-text">
          <p>
            Platycodon grandiflorus (from Ancient Greek πλατύς "wide" and κώδων
            "bell") is a species of herbaceous flowering perennial plant of the
            family Campanulaceae, and the only member of the genus Platycodon.
            It is native to East Asia (China, Korea, Japan, and the Russian Far
            East).[1] It is commonly known as balloon flower[2][3] (referring to
            the balloon-shaped flower buds), Chinese bellflower,[2] or
            platycodon.[2]
          </p>
        </div>
        <div className="sightingDetailCard-favorites-comments">
          <CommentsAndFavorites />
        </div>
      </div>
    </div>
  );
};

export default SightingDetailCard;
