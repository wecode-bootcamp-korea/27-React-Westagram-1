import StaticComment from '../staticComment/staticComment';
import Comments from '../Comment/Comment';
import { useState, useEffect } from 'react';
import './FeedBox.scss';
function FeedBox() {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  const [comments, setComments] = useState([]);
  const [feedList, setFeedList] = useState([]);
  const [object, setObject] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json')
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/data/feedData.json')
      .then(res => res.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);
  let count = 1;
  function handleCommentValue(event) {
    setComment(event.target.value);
  }
  function onSubmit(event) {
    console.log(event.target.name); //키값 대신 name 으로 한번 해결해보기
    setObject({ id: event.target.name, content: comment });
    console.log(object);
    event.preventDefault();
    if (comment === '') {
      return;
    }
    setComments(prev => [...prev, object]);
    setComment('');
  }
  return feedList.map(el => {
    return (
      <div className="feedBoxInwoong" key={++count}>
        <div className="feedTopBox">
          <div>
            <img className="image box-margin" src={el.src} alt="profile" />
          </div>
          <div className="box-margin mj">
            <h2>{el.userName}</h2>
          </div>
          <div style={{ flexGrow: 1 }} />
          <div className="dot-margin">
            <i className="fas fa-ellipsis-h dot" />
          </div>
        </div>
        <div className="imageWrapper">
          <img className="feedImage" src={el.src2} alt="profile" />
        </div>
        <div className="commentWrapper">
          <div className="fontWrapper">
            <i className="far fa-heart leftIcon" />
            <i className="far fa-comment leftIcon" />
            <i className="fas fa-share-alt leftIcon" />
            <i className="far fa-bookmark bookmark" />
          </div>
          <div className="likeWrapper">
            <img
              src="images/inwoong/profile2.jpg"
              className="smallImage box-margin"
              alt="profile"
            />
            <p className="likeComment">
              <span className="bold">ainworld</span>님{' '}
              <span className="bold">외 11명</span>이 좋아합니다
            </p>
          </div>
          <div>
            <p className="box-margin bottom-margin">
              <span className="bold likeComment">{el.userName}</span>
              <span className="likeComment">{el.content}</span>{' '}
              <span className="likeComment add">더 보기</span>
            </p>
          </div>
          <div>
            <StaticComment commentList={commentList} count={count} />
          </div>
          <div className="commentBox" />
          <Comments comments={comments} count={count} />
          <div>
            <span className="time">42분전</span>
          </div>
          <div className="inputWrapper">
            <form onSubmit={onSubmit} name={count}>
              <input
                className="input-Box"
                type="text"
                value={comment}
                placeholder="댓글달기..."
                onChange={handleCommentValue}
              />
              <button className="post">게시</button>
            </form>
          </div>
        </div>
      </div>
    );
  });
}

export default FeedBox;
