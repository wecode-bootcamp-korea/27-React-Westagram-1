import './Comment.scss';

function Comment({ name, comment }) {
  // console.log(props);

  return (
    <li className="commentList">
      <div className="commentBox">
        <span className="commentName">{name}</span>
        <div className="commentComment">{comment}</div>
      </div>
      <i className="far fa-heart" />
    </li>
  );
}

export default Comment;
