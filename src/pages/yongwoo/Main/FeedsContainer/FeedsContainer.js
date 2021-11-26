import React, { useState, useEffect } from 'react';
import Comment from '../Comment/Comment';
import './FeedsContainer.scss';

function FeedsContainer() {
  const [comment, setComment] = useState('');
  const [commentArray, setCommentArray] = useState([]);
  const [commentList, setCommentList] = useState([]);
  const onChange = event => {
    const { value } = event.target;
    setComment(value);
  };
  const onSubmit = event => {
    event.preventDefault();
    if (comment === '') {
      return;
    }
    setCommentArray(e => [comment, ...e]);
    setComment('');
  };

  useEffect(() => {
    fetch(`data/commentList.json`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
      });
  }, []);
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
          {commentList.map(user => {
            return (
              <ul className="comment" key={user.id}>
                <li className="commentText">
                  <div className="commentName">
                    <span className="commentNameBold">{user.name}</span>
                    {user.comment}
                  </div>
                  <div className="commentStart">
                    <i className="far fa-trash-alt" />
                    <i className="fas fa-heart colorHeart" />
                  </div>
                </li>
              </ul>
            );
          })}
          <Comment commentArray={commentArray} />
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
