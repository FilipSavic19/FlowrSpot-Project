import React from "react";
import pfp from "../Images/profile-holder.png";
import "../Styles/Profile.css";

const Profile = ({ funct, funcLog }) => {
  return (
    <div className="profile">
      <div className="close-profile">X</div>
      <div className="profile-pic-name">
        <div className="profile-image">
          <img src={pfp} alt="" />
        </div>
        <div className="profile-name">
          <h3>Michael Berry</h3>
          <p>47 sightings</p>
        </div>
      </div>
      <div className="profile-info">
        <div className="First Name">
          <p>First Name</p>
          <h3>Michael</h3>
        </div>
        <div className="Last Name">
          <p>Last Name</p>
          <h3>Berry</h3>
        </div>
        <div className="Date of Birth">
          <p>Date of Birth</p>
          <h3>May 20, 1980</h3>
        </div>
        <div className="Email Address">
          <p>Email Address</p>
          <h3>michael.berry@gmail.com</h3>
        </div>
      </div>
      <div className="profile-button">
        <button
          onClick={() => {
            funcLog(false);
            funct(false);
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
