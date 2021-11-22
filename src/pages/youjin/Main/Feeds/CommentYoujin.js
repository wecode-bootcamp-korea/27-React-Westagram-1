import React from 'react';
import './CommentYoujin.scss';

function CommentYoujin(props) {
  return (
    <li className="commentResult">
      <span className="writeId">sodalite.1204</span>
      <span className="writeContent">{props.item}</span>
    </li>
  );
}
export default CommentYoujin;
