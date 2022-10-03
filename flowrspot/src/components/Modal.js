import React from "react";
import "../Styles/Modal.css";

const Modal = ({ children, close }) => {
  return (
    <div>
      <div className="background"></div>
      <div>{children}</div>
    </div>
  );
};

export default Modal;
