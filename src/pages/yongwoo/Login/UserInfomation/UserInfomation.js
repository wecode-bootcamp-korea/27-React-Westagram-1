import React, { useState } from 'react';
import LoginButton from '../LoginButton/LoginButton';
import './UserInfomation.scss';

function UserInfomation(props) {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const handleIdInput = event => {
    const { value } = event.target;
    setId(value);
  };
  const handlePwInput = event => {
    const { value } = event.target;
    setPw(value);
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
      <LoginButton id={id} pw={pw} />
    </form>
  );
}

export default UserInfomation;
