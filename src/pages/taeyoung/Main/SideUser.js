import React from 'react';
import './SideUser.scss';

function SideUser() {
  return (
    <div className="recommendPeople">
      <div className="recommendPeopleMeta">
        <div className="recommendPeopleImg">
          <img src="/taeyoung/images/userImg2.jpg" alt="img" />
        </div>

        <span className="otherUser">
          <p className="PeopleName">loren gray</p>
          <p className="PeopleFllow">dragon__dragon_님이 팔로우합니다.</p>
        </span>
      </div>

      <button className="fllowBt2">팔로우</button>
    </div>
  );
}

export default SideUser;
