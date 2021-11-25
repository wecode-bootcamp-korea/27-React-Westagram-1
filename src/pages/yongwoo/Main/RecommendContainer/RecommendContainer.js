import React from 'react';
import Information from '../RecommendContainer/Information/Information';
import { STORY_DATA } from './storyData';
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
        {STORY_DATA.map(user => {
          return (
            <div className="recommendWrap" key={user.id}>
              <div className="recommend">
                <img className="recommendPhoto" src={user.src} alt={user.alt} />
                <div className="recommendText">
                  <h4>{user.userName}</h4>
                  <p>{user.follow}</p>
                </div>
              </div>
              <div className="follow">팔로우</div>
            </div>
          );
        })}
        <Information />
      </article>
    </main>
  );
}

export default RecommendContainer;
