import React, { useState } from 'react';
import LoginBtnYoujin from './LoginBtnYoujin';
import './LoginFormYoujin.scss';

function LoginFormYoujin() {
  const [isValue, setIsValue] = useState({
    idValue: '',
    passwordValue: '',
  });

  const handleIdInput = event => {
    const { name, value } = event.target;
    setIsValue({
      ...isValue,
      [name]: value,
    });
  };

  return (
    <div className="loginFormYoujin">
      <form>
        <input
          id="id1"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleIdInput}
          name="idValue"
        />
        <input
          id="password1"
          type="password"
          placeholder="비밀번호"
          onChange={handleIdInput}
          name="passwordValue"
        />
        <LoginBtnYoujin />
      </form>
    </div>
  );
}

export default LoginFormYoujin;
