import React from 'react';
import LoginBtn from './LoginBtn';
import './LoginForm.scss';

function LoginForm() {
  return (
    <div className="LoginForm">
      <form>
        <input
          id="id1"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input id="password1" type="password" placeholder="비밀번호" />
        <LoginBtn />
      </form>
    </div>
  );
}

export default LoginForm;
