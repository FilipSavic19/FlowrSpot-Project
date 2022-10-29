import React from "react";
import userPfp from "../Images/profile-holder.png";
import ReportButton from "../components/Buttons/ReportButton";
import "../Styles/User.css";
import SightingList from "./SightingList";

const User = () => {
  return (
    <div className="user">
      <div className="userInterface">
        <div className="userInformations">
          <div className="user-photo">
            <img src={userPfp} alt="" width="80px" />
          </div>
          <div className="user-infos">
            <p className="userName">Adam Moore</p>
            <p className="userSightings">47 sightings</p>
          </div>
        </div>
        <div className="report-button">
          <ReportButton />
        </div>
      </div>
      <div className="userCards">
        <SightingList />
      </div>
    </div>
  );
};

export default User;
