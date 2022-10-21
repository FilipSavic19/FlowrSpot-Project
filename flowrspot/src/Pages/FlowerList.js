import React from "react";
import SearchBar from "../components/SearchBar";
import "../Styles/FlowerList.css";
import FlowerItemList from "../components/FlowerItemList";

const FlowerList = () => {
  return (
    <div className="flower-list">
      <div className="search">
        <SearchBar />
      </div>
      <div className="flower-item-list">
        <FlowerItemList />
      </div>
    </div>
  );
};

export default FlowerList;
