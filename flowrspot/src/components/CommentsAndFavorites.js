import React from "react";
import "../Styles/CommentsAndFavorites.css";

const CommentsAndFavorites = () => {
  return (
    <div className="comments-and-favorites">
      <div className="comments">
        <i class="fa fa-commenting" />
        <p>18 comments</p>
      </div>
      <div className="favorites">
        <i class="fa fa-heart" />
        <p>12 favorites</p>
      </div>
    </div>
  );
};

export default CommentsAndFavorites;
