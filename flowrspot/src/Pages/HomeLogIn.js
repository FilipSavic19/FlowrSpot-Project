import React from "react";
import "../Styles/Login.css";

const HomeLogIn = ({ funct }) => {
  return (
    <div className="modal-login">
      <h1>Welcome Back</h1>
      <div className="email-password">
        <input placeholder="Email Address" />
        <input type="password" placeholder="Password" />
      </div>
      <div className="login-button">
        <button>Login to your Account</button>
      </div>
      <div
        onClick={() => {
          funct(false);
        }}
        className="close-form-login"
      >
        I dont want to Login
      </div>
    </div>
  );
};

export default HomeLogIn;
