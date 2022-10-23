import React from "react";
import AddCommentButton from "./Buttons/AddCommentButton";
import Comment from "./Comment";
import "../Styles/CommentsList.css";
import PublishCommentButton from "./Buttons/PublishCommentButton";
const CommentsList = () => {
  return (
    <div className="commentsList">
      <div className="commentsNumber">
        <p>14 Comments</p>
        <AddCommentButton />
      </div>
      <div className="comments">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
      <div className="writeComment">
        <p>Write a comment...</p>
        <input type="text" />
      </div>
      <div className="publishCommentButton">
        <PublishCommentButton />
      </div>
    </div>
  );
};

export default CommentsList;
