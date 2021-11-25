import './Comment.scss';

function Comment({ name, comment }) {
  return (
    <li className="commentList">
      <div className="commentBox">
        <span className="commentName">{name}</span>
        <div className="userComment">{comment}</div>
      </div>
      <i className="far fa-heart" />
    </li>
  );
}

export default Comment;
