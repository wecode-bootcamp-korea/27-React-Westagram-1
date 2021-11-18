import React from 'react';
import './FeedsYoujin.scss';

function FeedsYoujin() {
  return (
    <div class="feedsYoujin">
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
            <i class="far fa-heart" />
            <i class="far fa-comment" />
            <i class="far fa-paper-plane" />
          </div>
          <div className="bookMark">
            <i class="far fa-bookmark" />
          </div>
        </div>
        <div className="howManyLikes">
          <img src="images/youjin/knitting_img.jpeg" alt="아이디사진" />
          <p>1명이 당신을 좋아합니다.</p>
        </div>
        <div className="commentBox">
          <ul className="commentList">
            <li className="commentResult">
              <a href="login.html" className="writeId">
                sodalite.1204
              </a>
              <p className="writeContent">모르겠다</p>
            </li>
          </ul>
        </div>
        <p className="beforeFewMin">42분전</p>
        <form className="addComment">
          <input id="commentText" type="text" placeholder="댓글 달기..." />
          <button type="submit" id="postBtn">
            게시
          </button>
        </form>
      </article>
    </div>
  );
}

export default FeedsYoujin;
