import React from 'react';
import StoreWrap from './StoreWrap/StoreWrap';
import LoginButton from './LoginButton/LoginButton';
import UserInfomation from './UserInfomation/UserInfomation';
import { Link } from 'react-router-dom';
import './Login.scss';

function LoginYongwoo() {
  return (
    <section className="LoginYongwoo">
      <article className="topWrap">
        <h1 className="logo">Westagram</h1>
        <UserInfomation />
        <LoginButton />
        <div className="meddleLine">
          <div className="line" />
          <p>또는</p>
          <div className="line" />
        </div>
        <div className="facebookWrap">
          <p>Facebook으로 로그인</p>
        </div>
        <p className="passwordLost">비밀번호를 잊으셨나요?</p>
      </article>
      <article className="signUpWrap">
        <p>
          계정이 없으신가요?{' '}
          <Link to="/main-yongwoo">
            <button href="" className="signUpBlue">
              가입하기
            </button>
          </Link>
        </p>
      </article>
      <p className="downlodeCopyright">앱을 다운로드하세요.</p>
      <StoreWrap />
    </section>
  );
}

export default LoginYongwoo;
