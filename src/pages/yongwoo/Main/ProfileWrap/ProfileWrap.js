import React from 'react';
import './ProfileWrap.scss';

function ProfileWrap() {
  return (
    <div className="profileWrap">
      <div className="logoWrap">
        <img src="images/yongwoo/profile.jpeg" alt="logo" />
        <h2>94_yongyong_lee</h2>
      </div>
      <i className="fas fa-ellipsis-h" />
    </div>
  );
}

export default ProfileWrap;
