import './Comment.scss';
function Comments({ comments }) {
  let counter = 1;
  return (
    <div>
      {comments.map(el => (
        <div className="comment" key={counter++}>
          <span className="likeComment bold commentAdd">cannon_mj</span>
          <span className=" likeComment dot">{el} </span>
        </div>
      ))}
    </div>
  );
}

export default Comments;
