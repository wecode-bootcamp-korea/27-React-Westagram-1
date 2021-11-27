import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm/LoginFormYoujin';
import './LoginYoujin.scss';

function LoginYoujin() {
  return (
    <div className="loginYoujin">
      <article className="logoArticle">
        <div className="logo">
          <p className="logoName">westagram</p>
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
