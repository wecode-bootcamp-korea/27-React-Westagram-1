import React, { useState, useEffect } from 'react';
import CommentYoujin from './CommentYoujin';
import './FeedsYoujin.scss';

function FeedsYoujin({ key, name, content, feedImage, comment }) {
  const [inputText, setInputText] = useState('');
  const [comments, setComments] = useState([]);
  // const [checkBtn, setCheckBtn] = useState(false);

  const handleChange = event => {
    setInputText(event.target.value);
  };

  // enter press or button onClick
  // comments add
  // setComments

  // eventlistner
  // setComments -> comments => prev + newComment
  // const commentList = [...arrayText, inputText];

  const addComment = event => {
    event.preventDefault();
    setComments([...comments, inputText]);
    setInputText('');
    // setCheckBtn(false);
  };

  const checkInput = inputText.value;

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => setComments(data));
  }, []);

  return (
    <div className="feedsYoujin">
      <article className="articleBox">
        <div className="profileBox">
          <div className="profileAndId">
            <img src="images/youjin/knitting_img.jpeg" alt="프로필작은사진" />
            <p className="myId" key={key}>
              {name}
            </p>
          </div>
          <i className="fas fa-ellipsis-h" />
        </div>
        <div className="imageBox">
          <img src={feedImage} alt="프로필이미지" />
        </div>
        <div className="estimateBox">
          <div className="commentBtnBar">
            <i className="far fa-heart" />
            <i className="far fa-comment" />
            <i className="far fa-paper-plane" />
          </div>
          <div className="bookMark">
            <i className="far fa-bookmark" />
          </div>
        </div>
        <div className="howManyLikes">
          <img src="images/youjin/knitting_img.jpeg" alt="아이디사진" />
          <p>1명이 당신을 좋아합니다.</p>
        </div>
        <div className="commentBox">
          <ul className="commentList">
            <li className="commentResult">
              <span className="writeId">{name}</span>
              <span className="writeContent">{content}</span>
            </li>
            {comments.map(comment => (
              <CommentYoujin
                key={comment.id}
                name={comment.userName}
                comment={comment.content}
              />
            ))}
          </ul>
        </div>
        <p className="beforeFewMin">42분전</p>
        <form className="addComment" onSubmit={addComment}>
          <input
            id="commentText"
            type="text"
            placeholder="댓글 달기..."
            value={inputText}
            onChange={handleChange}
            onKeyUp={checkInput}
          />
          <button
            className={!inputText ? 'buttonOff' : 'buttonOn'}
            type="submit"
            disabled={!inputText}
          >
            게시
          </button>
        </form>
      </article>
    </div>
  );
}
export default FeedsYoujin;
