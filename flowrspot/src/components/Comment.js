import React from "react";
import commentPfp from "../Images/profile-holder.png";
import "../Styles/Comment.css";
const Comment = () => {
  return (
    <div className="comment">
      <div className="commentProfile">
        <div className="commentPicture">
          <img src={commentPfp} alt="" width="45px" />
        </div>
        <div className="commentNameAndDate">
          <p className="commentFlwrName">Balcony Flower</p>
          <p className="commentPostDate">4 days ago</p>
        </div>
      </div>
      <div className="commentContent">
        <p>
          So strongly and metaphysically did I conceive of my situation then,
          that while earnestly watching his motions, I seemed distinctly to
          perceive that my own individuality was now merged in a joint stock
          company of two; that my free will had received a mortal wound; and
          that another's mistake or misfortune might plunge innocent me into
          unmerited disaster and death.
        </p>
      </div>
    </div>
  );
};

export default Comment;
