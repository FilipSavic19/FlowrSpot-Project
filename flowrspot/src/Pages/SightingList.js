import React from "react";
import AddNewSightingButton from "../components/Buttons/AddNewSightingButton";
import CardSighting from "../components/CardSighting";
import "../Styles/SightingList.css";

const SightingList = () => {
  return (
    <div className="sightingList">
      <div className="sightingListTopPart">
        <div className="sightingTitleButton">
          <div className="sightingTitle">
            <p>Sighting List</p>
          </div>
          <div className="sightingButtonAdd">
            <AddNewSightingButton />
          </div>
        </div>
        <div className="sightingListDesc">
          <p>Explore between more than 8427 sightings</p>
        </div>
      </div>
      <div className="sighting-list">
        <CardSighting />
        <CardSighting />
        <CardSighting />
        <CardSighting />
        <CardSighting />
        <CardSighting />
        <CardSighting />
        <CardSighting />
        <CardSighting />
        <CardSighting />
        <CardSighting />
        <CardSighting />
      </div>
      <div className="sightingBtnAdd">
        <AddNewSightingButton />
      </div>
    </div>
  );
};

export default SightingList;
