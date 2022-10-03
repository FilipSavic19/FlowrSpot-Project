import React from "react";
import "../Styles/CreateAccount.css";

const HomeCreateAccount = ({ func }) => {
  return (
    <div className="home-create-account">
      <h1>Create an Account</h1>
      <div className="firstname-lastname">
        <input placeholder="First Name" />
        <input placeholder="Last Name" />
      </div>
      <div className="others">
        <input placeholder="Date of Birth" />
        <input placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="button-create">Create Account</button>
      </div>
      <div
        onClick={() => {
          func(false);
        }}
        className="close-form"
      >
        I dont want to register
      </div>
    </div>
  );
};

export default HomeCreateAccount;
