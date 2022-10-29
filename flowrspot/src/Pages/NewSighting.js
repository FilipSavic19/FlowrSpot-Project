import React from "react";
import ViewOnGoogleMaps from "../components/Buttons/ViewOnGoogleMaps";
import Map from "../components/Map";
import "../Styles/NewSighting.css";
import AddPhotoButton from "../components/Buttons/AddPhotoButton";
import CreateNewSightingButton from "../components/Buttons/CreateNewSightingButton";

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
          <div className="inputs-and-button">
            <div className="inputOne">
              <input placeholder="Title of the sighting" />
            </div>
            <div className="inputTwo">
              <input placeholder="Coordinates of the sighting" />
            </div>
            <div className="addPhotoBtn">
              <AddPhotoButton />
            </div>
          </div>
          <div className="inputThree">
            <input placeholder="Write a description..." />
          </div>
          <div className="cnaButton">
            <CreateNewSightingButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSighting;
