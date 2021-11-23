import React from 'react';
import './CommentYoujin.scss';

function CommentYoujin({ item }) {
  return (
    <li className="commentResult">
      <span className="writeId">sodalite.1204</span>
      <span className="writeContent">{item}</span>
    </li>
  );
}
export default CommentYoujin;
