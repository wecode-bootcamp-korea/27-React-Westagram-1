import React, { useState } from 'react';
import './Comment.scss';

function Comment(props) {
  // console.log(props);

  return (
    <li className="commentList">
      <div className="commentBox">
        <span className="commentName">{props.name}</span>
        <div className="userComment">{props.comment}</div>
      </div>
      <i className="far fa-heart" />
    </li>
  );
}

export default Comment;
