import React, { useState } from 'react';
import './FeedsContainer.scss';

function FeedsContainer() {
  const [comment, setComment] = useState('');
  const [commentArray, setCommentArray] = useState([]);
  const onChange = event => setComment(event.target.value);
  const onSubmit = event => {
    event.preventDefault();
    if (comment === '') {
      return;
    }
    setCommentArray(commentValueList => [comment, ...commentValueList]);
    setComment('');
  };
  return (
    <main className="feedsContainer">
      <article className="feed">
        <div className="profileWrap">
          <div className="logoWrap">
            <img src="images/yongwoo/profile.jpeg" alt="logo" />
            <h2>94_yongyong_lee</h2>
          </div>
          <i className="fas fa-ellipsis-h" />
        </div>
        <div className="photoWrap">
          <img src="images/yongwoo/instagram_feed.jpeg" alt="mainPhoto" />
        </div>
        <div className="feedsPictogram">
          <div className="feedsPictogramLeft">
            <img src="images/yongwoo/heart.png" alt="하트" />
            <img
              className="speachBubble"
              src="images/yongwoo/bubble-chat.png"
              alt="speachBubble"
            />
            <img src="images/yongwoo/share.png" alt="share" />
          </div>
          <img
            className="saveIcon"
            src="https://cdn-icons-png.flaticon.com/512/84/84510.png"
            alt="save"
          />
        </div>
        <div className="goodWrap">
          <img
            className="goodImg"
            src="images/yongwoo/goodImage.jpeg"
            alt="좋아요"
          />
          <p>sung_sae_h2 님 외 24명이 좋아합니다.</p>
        </div>
        <div className="textWrap">
          <p className="text">
            #모동숲 #모여봐요동물의숲 #박새로이머리 #오징어 #낚시
          </p>
          <ul className="comment">
            <li className="commentText">
              <div className="commentMargin">
                <span className="commentNameBold">jeffkim01</span>
                진짜 세상 부럽다... 저도 동숲...
              </div>
              <div className="commentStart">
                <i className="far fa-trash-alt" />
                {/* <i className="far fa-heart" /> */}
                <i className="fas fa-heart colorHeart" />
              </div>
            </li>
          </ul>

          <ul className="comment">
            {commentArray.map((value, index) => (
              <li key={index} className="commentText">
                <div className="commentMargin">
                  <span className="commentNameBold">94_yongyong_lee</span>
                  {value}
                </div>
                <div className="commentStart">
                  <i className="far fa-trash-alt" />
                  {/* <i className="far fa-heart" /> */}
                  <i className="fas fa-heart colorHeart" />
                </div>
              </li>
            ))}
          </ul>

          <p className="commentView">54분전</p>
        </div>
        <div className="commentContainer" onSubmit={onSubmit}>
          <form className="commentWrap">
            <input
              type="text"
              placeholder="댓글달기..."
              value={comment}
              onChange={onChange}
            />
            <button className="commetBtn">게시</button>
          </form>
        </div>
      </article>
    </main>
  );
}

export default FeedsContainer;
