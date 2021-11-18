import React from 'react';
import './UserMeta.scss';

function UserMeta() {
  return (
    <div className="userMeta">
      <div className="userImgBackground">
        <img
          src="/taeyoung/images/userImg5.jpg"
          alt="img"
          className="userImg"
        />
      </div>
      <div className="userName">Jennifer Lop</div>
    </div>
  );
}

export default UserMeta;
