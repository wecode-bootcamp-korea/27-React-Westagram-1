import React from 'react';
import ProfileWrap from '../ProfileWrap/ProfileWrap';
import FeedsPictogram from '../FeedsPictogram/FeedsPictogram';
import TextWrap from '../TextWrap/TextWrap';
import CommentContainer from '../CommentContainer/CommentContainer';
import './FeedsContainer.scss';

function FeedsContainer() {
  return (
    <main className="feedsContainer">
      <article className="feed">
        <ProfileWrap />
        <div className="photoWrap">
          <img src="images/yongwoo/instagram_feed.jpeg" alt="mainPhoto" />
        </div>
        <FeedsPictogram />
        <div className="goodWrap">
          <img
            className="goodImg"
            src="images/yongwoo/goodImage.jpeg"
            alt="좋아요"
          />
          <p>sung_sae_h2 님 외 24명이 좋아합니다.</p>
        </div>
        <TextWrap />
        <CommentContainer />
      </article>
    </main>
  );
}

export default FeedsContainer;
