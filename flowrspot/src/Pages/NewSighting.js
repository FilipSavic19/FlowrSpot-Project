import React from "react";
import ViewOnGoogleMaps from "../components/Buttons/ViewOnGoogleMaps";
import Map from "../components/Map";
import "../Styles/NewSighting.css";

const NewSighting = () => {
  return (
    <div className="newSighting">
      <div className="newSightingMap">
        <Map />
      </div>
      <div className="buttonAndComponents">
        <div className="vogmButton">
          <ViewOnGoogleMaps />
        </div>
        <div className="newSightingComponents">
          <div className="newSightingTitle">
            <h3>Add New Sighting</h3>
            <p>Explore between more than 8247 sightings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSighting;
