import React from 'react';
import './LoginYoujin.scss';
import LoginForm from './LoginForm/LoginFormYoujin';
import { Link } from 'react-router-dom';

function LoginYoujin() {
  return (
    <div className="loginYoujin">
      <article>
        <div className="logo">
          <p>westagram</p>
          <LoginForm />
          <div className="findPw">
            <Link to="/main-youjin" className="findPwText">
              비밀번호를 잊으셨나요?
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

export default LoginYoujin;
