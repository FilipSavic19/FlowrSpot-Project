import React from "react";
import SearchIcon from "../Images/Vector 3.png";
import "../Styles/HomePage.css";
const SearchBar = () => {
  return (
    <div className="form-input">
      <input placeholder="Looking for something specific?" />
      <img
        className="hero-image-search-image"
        alt=""
        src={SearchIcon}
        width="30px"
      />
    </div>
  );
};

export default SearchBar;
