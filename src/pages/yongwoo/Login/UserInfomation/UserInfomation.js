import React, { useState } from 'react';
import './UserInfomation.scss';

function UserInfomation(props) {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const handleIdInput = event => {
    setId(event.target.value);
  };
  const handlePwInput = event => {
    setPw(event.target.value);
  };
  return (
    <form className="userInfomation">
      <input
        className="userName"
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        value={id}
        onChange={handleIdInput}
      />
      <input
        className="userPassword"
        type="password"
        placeholder="비밀번호"
        value={pw}
        onChange={handlePwInput}
      />
    </form>
  );
}

export default UserInfomation;
