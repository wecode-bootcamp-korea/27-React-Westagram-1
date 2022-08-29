import React from 'react';
import './CommentYoujin.scss';

function CommentYoujin({ key, name, comment }) {
  return (
    <li className="commentResult">
      <span className="writeId" key={key}>
        {name}
      </span>
      <span className="writeContent">{comment}</span>
    </li>
  );
}
export default CommentYoujin;
