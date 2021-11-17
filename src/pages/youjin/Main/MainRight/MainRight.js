import React from 'react';
import './MainRight.scss';

function MainRight() {
  return (
    <div className="MainRight">
      <div className="sideContainer">
        <div className="showMyId">
          <img src="images/youjin/myphoto.jpg" alt="" />
          <div>
            <h1>sodalite.1204</h1>
            <h2>구유진입니다</h2>
          </div>
        </div>
        <div className="storyContainer">
          <div className="storyBar">
            <p className="storyName">스토리</p>
            <a href="login.html" className="allView">
              모두 보기
            </a>
          </div>
          <div className="storyBox">
            <div className="stroyAccount">
              <ul>
                <li>
                  <span className="storyAndId">
                    <img src="images/youjin/myphoto.jpg" alt="" />
                  </span>
                  <span className="storyAndId">
                    <p id="userId">sodalite.1204</p>
                    <p id="ubloadTime">14분전</p>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="addFriendContainer">
          <div className="addFriendBar">
            <p className="addFriendName">회원님을 위한 추천</p>
            <a href="login.html" className="allVies">
              모두 보기
            </a>
          </div>
          <div className="addFriendBox">
            <div className="addFriendAccount">
              <ul>
                <li>
                  <span className="photoAndId">
                    <img src="images/youjin/myphoto.jpg" alt="" />
                  </span>
                  <span className="photoAndId">
                    <p id="addFriendId">sodalite.1204</p>
                    <p id="howManyAddFriend">14분전</p>
                  </span>
                  <a href="login.html" id="addFollow">
                    팔로우
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainRight;
