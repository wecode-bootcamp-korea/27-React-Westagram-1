import React from 'react';
import './Feeds.scss';

function Feeds() {
  return (
    <div class="Feeds">
      <article className="articleBox">
        <div className="profileBox">
          <div className="profileAndId">
            <img src="images/youjin/knitting_img.jpeg" alt="" />
            <p className="myId">what_are_u</p>
          </div>
          <i className="fas fa-ellipsis-h" href="login.html" />
        </div>
        <div className="imageBox">
          <img src="images/youjin/cafe_img.jpeg" alt="프로필이미지" />
        </div>
        <div className="estimateBox">
          <div className="commentBtnBar">
            <a href="#" className="likeBtn" />
            <a href="#" className="commentBtn" />
            <a href="#" className="shareBtn" />
          </div>
          <div className="bookMark">
            <a href="login.html" className="bookmarkBtn" />
          </div>
        </div>
        <div className="howManyLikes">
          <img src="images/youjin/knitting_img.jpeg" alt="" />
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

export default Feeds;
