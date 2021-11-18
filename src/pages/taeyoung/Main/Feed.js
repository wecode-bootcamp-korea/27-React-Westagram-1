import React from 'react';
import './Feed.scss';

function Feed() {
  return (
    <>
      <article class="feedBox">
        <div class="feedTop">
          <div class="feedUserPorfile">
            <div class="feedUserPorfileLeft">
              <img src="/taeyoung/images/myImg.jpg" alt="img" />
            </div>
            <span>dragon__dragon_</span>
          </div>
          <img src="/taeyoung/images/ellipsis-h-solid.svg" alt="img" />
        </div>

        <div class="feedImg">
          <div class="feedContents">
            <img src="/taeyoung/images/feedImg.png" alt="img" />
          </div>
        </div>
        <div class="feedBottom">
          <div class="feedIcon">
            <div class="feedIconLeft">
              <i class="far fa-heart" />
              <i class="far fa-comment" />
              <i class="far fa-paper-plane" />
            </div>
            <div class="feedIconRight">
              <i class="far fa-bookmark" />
            </div>
          </div>

          <div class="feedUser">
            <div class="feedUserImg">
              <img src="/taeyoung/images/userImg1.jpg" alt="img" />
            </div>
            <span>sisnanaad님 외 101명이 좋아합니다.</span>
          </div>
          <div class="feedComment">
            <div class="feedCommentLeft">
              <div class="feedUserBox">
                <span class="feedUserName">dragon__dragon_</span>
                <span class="feedLike">
                  <i class="far fa-heart" />
                </span>
              </div>
              <span class="moreComment">댓글 2개 모두 보기</span>
              <span class="feedTime">1시간 전</span>
            </div>
          </div>
        </div>
      </article>

      <div class="reCommnet">
        <input type="text" class="recommnetInput" placeholder="댓글 달기..." />
        <button class="recommnetBt">게시</button>
      </div>
    </>
  );
}

export default Feed;
