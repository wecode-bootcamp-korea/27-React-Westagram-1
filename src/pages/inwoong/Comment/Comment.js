import './Comment.scss';
function Comments({ comments }) {
  return (
    <div>
      {comments.map((el, index) => (
        <div className="comment" key={index}>
          <span className="likeComment bold commentAdd">cannon_mj</span>
          <span className=" likeComment dot">{el} </span>
        </div>
      ))}
    </div>
  );
}

export default Comments;
