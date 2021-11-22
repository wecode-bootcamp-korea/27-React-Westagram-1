import React, { useEffect, useState } from 'react';
import './FeedsYoujin.scss';
import CommentYoujin from './CommentYoujin';

function FeedsYoujin() {
  const [inputText, setInputText] = useState('');
  const [checkBtn, setCheckBtn] = useState(false); //
  const [comments, setComments] = useState([]);

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
    setCheckBtn(false);
  };
  // useEffect(() => {
  //   console.log('comments', inputText);
  // }, [inputText]);

  const checkInput = () => {
    inputText.length ? setCheckBtn(true) : setCheckBtn(false);
  };

  return (
    <div className="feedsYoujin">
      <article className="articleBox">
        <div className="profileBox">
          <div className="profileAndId">
            <img src="images/youjin/knitting_img.jpeg" alt="프로필작은사진" />
            <p className="myId">what_are_u</p>
          </div>
          <i className="fas fa-ellipsis-h" />
        </div>
        <div className="imageBox">
          <img src="images/youjin/cafe_img.jpeg" alt="프로필이미지" />
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
              <span className="writeId">sodalite.1204</span>
              <span className="writeContent">hello</span>
            </li>
            {comments.map((item, i) => (
              <CommentYoujin item={item} key={i} />
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
            className={checkBtn ? 'buttonOn' : 'buttonOff'}
            type="submit"
            disabled={checkBtn ? false : true}
          >
            게시
          </button>
        </form>
      </article>
    </div>
  );
}
export default FeedsYoujin;