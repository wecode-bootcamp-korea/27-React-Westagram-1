import React from 'react';
import './Login.scss';
import LoginForm from './LoginForm/LoginForm';
import { Link } from 'react-router-dom';

function LoginYoujin() {
  return (
    <div className="LoginYoujin">
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
