import React from 'react';
import LoginBtnYoujin from './LoginBtnYoujin';
import './LoginFormYoujin.scss';

function LoginFormYoujin() {
  return (
    <div className="loginFormYoujin">
      <form>
        <input
          id="id1"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input id="password1" type="password" placeholder="비밀번호" />
        <LoginBtnYoujin />
      </form>
    </div>
  );
}

export default LoginFormYoujin;
