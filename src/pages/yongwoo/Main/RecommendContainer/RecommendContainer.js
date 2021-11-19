import React from 'react';
import './RecommendContainer.scss';

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

        <div className="information">
          <ul className="informatioinList">
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

export default RecommendContainer;