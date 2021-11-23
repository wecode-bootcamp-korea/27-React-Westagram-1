import './Comment.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as full } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
function Comments({ comments, count }) {
  let counter = 1;
  function onClick(event) {
    setHeart('black');
  }
  const [heart, setHeart] = useState('red');
  let filtered = comments.filter(el => Number(el.id) === count);
  return (
    <div className="CommentInwoong">
      {filtered.map(el => (
        <div className="comment" key={counter++} onClick={onClick}>
          <span className="likeComment bold commentAdd">cannon_mj</span>
          <span className=" likeComment dot">{el.content} </span>
          <span className="heart">
            <FontAwesomeIcon
              // onClick={onClick}
              icon={full}
              style={{ color: heart }}
            />
          </span>
        </div>
      ))}
    </div>
  );
}

export default Comments;
