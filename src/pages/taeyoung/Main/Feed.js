import React from 'react';
import './Feed.scss';

function Feed() {
  return (
    <>
      <article className="feedBox">
        <div className="feedTop">
          <div className="feedUserPorfile">
            <div className="feedUserPorfileLeft">
              <img src="/taeyoung/images/myImg.jpg" alt="img" />
            </div>
            <span>dragon__dragon_</span>
          </div>
          <img src="/taeyoung/images/ellipsis-h-solid.svg" alt="img" />
        </div>

        <div className="feedImg">
          <div className="feedContents">
            <img src="/taeyoung/images/feedImg.png" alt="img" />
          </div>
        </div>
        <div className="feedBottom">
          <div className="feedIcon">
            <div className="feedIconLeft">
              <i className="far fa-heart" />
              <i className="far fa-comment" />
              <i className="far fa-paper-plane" />
            </div>
            <div className="feedIconRight">
              <i className="far fa-bookmark" />
            </div>
          </div>

          <div className="feedUser">
            <div className="feedUserImg">
              <img src="/taeyoung/images/userImg1.jpg" alt="img" />
            </div>
            <span>sisnanaad님 외 101명이 좋아합니다.</span>
          </div>
          <div className="feedComment">
            <div className="feedCommentLeft">
              <div className="feedUserBox">
                <span className="feedUserName">dragon__dragon_</span>
                <span className="feedLike">
                  <i className="far fa-heart" />
                </span>
              </div>
              <span className="moreComment">댓글 2개 모두 보기</span>
              <span className="feedTime">1시간 전</span>
            </div>
          </div>
        </div>
      </article>

      <div className="reCommnet">
        <input
          type="text"
          className="recommnetInput"
          placeholder="댓글 달기..."
        />
        <button className="recommnetBt">게시</button>
      </div>
    </>
  );
}

export default Feed;
