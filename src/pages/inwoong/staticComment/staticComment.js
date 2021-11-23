import './staticComment.scss';

function StaticComment({ commentList, count }) {
  let temp = commentList.filter(el => el.key === count);
  return (
    <div class="StaticCommentInwoong">
      {temp.map((el, index) => {
        return (
          <p className="box-margin bottom-margin" key={index}>
            <span className="bold likeComment">{el.userName}</span>
            <span className="likeComment">{el.content}</span>
          </p>
        );
      })}
    </div>
  );
}

export default StaticComment;
