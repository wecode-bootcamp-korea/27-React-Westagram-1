import React from 'react';
import SideUser from './SideUser';
import './Side.scss';

function Side() {
  return (
    <aside className="recommendContainer">
      <div className="myProfile">
        <div className="myProfileMeta">
          <div className="myProfileImgBox">
            <img
              className="myProfileImg"
              src="/taeyoung/images/myImg.jpg"
              alt="img"
            />
          </div>

          <span className="myProfileText">
            <p className="myProfileLeftName">Karim Benzema</p>
            <p>KIMEL/기멜</p>
          </span>
        </div>

        <button className="fllowBt">전환</button>
      </div>

      <div className="recommend">
        <span>회원님을 위한 추천</span>
        <button className="moreBt">모두 보기</button>
      </div>

      <SideUser />
      <SideUser />
      <SideUser />
      <SideUser />
      <SideUser />
    </aside>
  );
}

export default Side;
