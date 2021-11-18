import React from 'react';
import './CommentContainer.scss';

function CommentContainer() {
  return (
    <div className="commentContainer">
      <div className="commentWrap">
        <input type="text" placeholder="댓글달기..." />
        <button className="commetBtn">게시</button>
      </div>
    </div>
  );
}

export default CommentContainer;
