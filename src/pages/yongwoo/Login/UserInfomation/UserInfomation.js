import React from 'react';
import './UserInfomation.scss';

function UserInfomation() {
  return (
    <div className="userInfomation">
      <input
        className="userName"
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
      />
      <input className="userPassword" type="password" placeholder="비밀번호" />
    </div>
  );
}

export default UserInfomation;
