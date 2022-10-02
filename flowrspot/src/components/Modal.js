import React from "react";
import "../Styles/Modal.css";

const Modal = ({ children }) => {
  return (
    <div>
      <div className="background"></div>
      <div>{children}</div>
    </div>
  );
};

export default Modal;
