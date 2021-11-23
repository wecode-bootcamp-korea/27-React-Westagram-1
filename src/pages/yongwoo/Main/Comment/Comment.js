/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './Comment.scss';

function Comment(props) {
  const { commentArray } = props;
  return (
    <ul className="comment">
      {commentArray.map((value, id) => (
        <li key={id} className="commentText">
          <div className="commentMargin">
            <span className="commentNameBold">94_yongyong_lee</span>
            {value}
          </div>
          <div className="commentStart">
            <i className="far fa-trash-alt" />
            {/* <i className="far fa-heart" /> */}
            <i className="fas fa-heart colorHeart" />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Comment;
