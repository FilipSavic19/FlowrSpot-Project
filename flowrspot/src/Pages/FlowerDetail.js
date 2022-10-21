import React from "react";
import FavoriteStarButton from "../components/Buttons/FavoriteStarButton";
import heroSection from "../Images/pl-hero1.png";
import flowerImage from "../Images/pl-image1.png";
import "../Styles/FlowerDetail.css";
import lineBreak from "../Images/Rectangle 3.png";
import SightingList from "./SightingList";

const FlowerDetail = () => {
  return (
    <div className="flower-detail">
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
        <div className="flower-descriptions">
          <div className="flower-descriptions-content">
            <div className="flower-descriptions-left">
              <p>
                Kingdom: Plantae <br /> Order: Asterales <br /> Family:
                Campanulaceae <br /> Species: P. grandiflorus
              </p>
            </div>
            <div className="flower-descriptions-right">
              <p>
                Platycodon grandiflorus (from Ancient Greek πλατύς "wide" and
                κώδων "bell") is a species of herbaceous flowering perennial
                plant of the family Campanulaceae, and the only member of the
                genus Platycodon. It is native to East Asia (China, Korea,
                Japan, and the Russian Far East).[1] It is commonly known as
                balloon flower[2][3] (referring to the balloon-shaped flower
                buds), Chinese bellflower,[2] or platycodon.[2]
                <br /> <br /> Growing to 60 cm (24 in) tall by 30 cm (12 in)
                wide, it is an herbaceous perennial with dark green leaves and
                blue flowers in late summer. A notable feature of the plant is
                the flower bud which swells like a balloon before fully
                opening.[4] The five petals are fused together into a bell shape
                at the base, like its relatives, the campanulas. There are
                varieties with white, pink and purple blooms in cultivation.[5]
                In Korea, white flowers are more common. This plant[6] together
                with its cultivars 'Apoyama group'[7] and 'Mariesii'[8] have
                gained the Royal Horticultural Society's Award of Garden Merit.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="line-break">
          <br className="b" />
          <img src={lineBreak} alt="" />
        </div>
        <div className="sighting-list">
          <SightingList />
        </div>
      </div>
    </div>
  );
};

export default FlowerDetail;
