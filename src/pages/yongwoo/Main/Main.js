import React from 'react';

function LogoWrap(params) {
  return (
    <article className="logoWrap">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png"
        alt="로고"
      />
      <div className="columnLine" />
      <h1 className="logo">Westagram</h1>
    </article>
  );
}

function Search() {
  return (
    <article className="search">
      <input type="text" placeholder="검색" />
    </article>
  );
}

function PictogramWrap() {
  return (
    <article className="pictogramWrap">
      <img
        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
        alt="탐색"
      />
      <img
        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
        alt="하트"
      />
      <img
        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
        alt="프로필"
      />
    </article>
  );
}

function Navigation() {
  return (
    <nav className="navigation">
      <div className="navContainer">
        <LogoWrap />
        <Search />
        <PictogramWrap />
      </div>
    </nav>
  );
}

function ProfileWrap(params) {
  return (
    <div className="profileWrap">
      <div className="logoWrap">
        <img src="images/yongwoo/heart.png" alt="logo" />
        <h2>94_yongyong_lee</h2>
      </div>
      <i className="fas fa-ellipsis-h" />
    </div>
  );
}

function FeedsPictogram() {
  return (
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
  );
}

function CommentContainer() {
  return (
    <div className="commentContainer">
      <div className="commentWrap">
        <input type="text" placeholder="댓글달기..." />
        <button className="commetBtn">게시</button>
      </div>
    </div>
  );
}

function PhotoWrap(params) {
  return (
    <div className="photoWrap">
      <img src="images/yongwoo/instagram_feed.jpeg" alt="mainPhoto" />
    </div>
  );
}

function GoodWrap() {
  return (
    <div className="goodWrap">
      <img
        className="goodImg"
        src="images/yongwoo/goodImage.jpeg"
        alt="좋아요"
      />
      <p>sung_sae_h2 님 외 24명이 좋아합니다.</p>
    </div>
  );
}

function TextWrap() {
  return (
    <div className="textWrap">
      <p className="text">
        #모동숲 #모여봐요동물의숲 #박새로이머리 #오징어 #낚시
      </p>
      <div className="comment">
        <p className="commentNameBold">
          jeffkim01
          <span className="commentText"> 진짜 세상 부럽다... 저도 동숲...</span>
        </p>
        <i className="fas fa-heart textolorHeart" />
      </div>
      {/* <div className="commentStart">
        <i className="far fa-trash-alt" />
        <i className="far fa-heart" />
        <i className="fas fa-heart colorHeart" />
      </div> */}
      <p className="commentView">54분전</p>
    </div>
  );
}

function FeedsContainer() {
  return (
    <main className="feedsContainer">
      <article className="feed">
        <ProfileWrap />
        <PhotoWrap />
        <FeedsPictogram />
        <GoodWrap />
        <TextWrap />
        <CommentContainer />
      </article>
    </main>
  );
}
function RecommendContainer() {
  return (
    <main className="recommendContainer">
      <article className="mainRight">
        <div className="myInfoWrap">
          <div className="myInfoPhotoWrap">
            <img src="images/yongwoo/profile.jpeg" alt="프로필" />
            <div className="myInfo">
              <h2>94_yongyong_lee</h2>
              <p>이용우</p>
            </div>
          </div>
          <p className="infoBlue">전환</p>
        </div>
        <div className="recommendTitle">
          <p className="grayColor">회원님을 위한 추천</p>
          <p className="blackColor">모두 보기</p>
        </div>
        <div className="recommendWrap">
          <div className="recommend">
            <img
              className="recommendPhoto"
              src="images/yongwoo/recommend_01.jpeg"
              alt="추천1"
            />
            <div className="recommendText">
              <h4>jomingi62</h4>
              <p>dlfjwk11003님이 팔로우합니다</p>
            </div>
          </div>
          <div className="follow">팔로우</div>
        </div>

        <div className="recommendWrap">
          <div className="recommend">
            <img
              className="recommendPhoto"
              src="images/yongwoo/recommend_02.jpeg"
              alt="추천2"
            />
            <div className="recommendText">
              <h4>s_._hoo</h4>
              <p>회원님을 팔로우합니다</p>
            </div>
          </div>
          <div className="follow">팔로우</div>
        </div>

        <div className="recommendWrap">
          <div className="recommend">
            <img
              className="recommendPhoto"
              src="images/yongwoo/recommend_03.jpeg"
              alt="추천3"
            />
            <div className="recommendText">
              <h4>s_._hoo</h4>
              <p>회원님을 팔로우합니다</p>
            </div>
          </div>
          <div className="follow">팔로우</div>
        </div>

        <div className="recommendWrap">
          <div className="recommend">
            <img
              className="recommendPhoto"
              src="images/yongwoo/recommend_04.jpeg"
              alt="추천4"
            />
            <div className="recommendText">
              <h4>s_._hoo</h4>
              <p>회원님을 팔로우합니다</p>
            </div>
          </div>
          <div className="follow">팔로우</div>
        </div>

        <div className="recommendWrap">
          <div className="recommend">
            <img
              className="recommendPhoto"
              src="images/yongwoo/recommend_05.jpeg"
              alt="추천5"
            />
            <div className="recommendText">
              <h4>s_._hoo</h4>
              <p>회원님을 팔로우합니다</p>
            </div>
          </div>
          <div className="follow">팔로우</div>
        </div>

        <div className="infomation">
          <ul className="infomatioinList">
            <li>소개.</li>
            <li>도움말.</li>
            <li>홍보센터.</li>
            <li>API.</li>
            <li>채용정보.</li>
            <li>개인정보처리방침.</li>
            <li>약관.</li>
            <li>위치.</li>
            <li>인기 계정.</li>
            <li>해시태그.</li>
            <li>언어</li>
          </ul>
          <p>© 2021 INSTAGRAM FROM META</p>
        </div>
      </article>
    </main>
  );
}

function MainYongwoo() {
  return (
    <>
      <Navigation />
      <div className="main">
        <FeedsContainer />
        <RecommendContainer />
      </div>
    </>
  );
}

export default MainYongwoo;
