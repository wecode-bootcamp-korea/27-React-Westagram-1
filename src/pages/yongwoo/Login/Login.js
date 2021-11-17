import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Logo() {
  return <h1 className="logo">Westagram</h1>;
}

function UserInfo() {
  return (
    <>
      <input
        className="userName"
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
      />
      <input className="userPassword" type="password" placeholder="비밀번호" />
    </>
  );
}

function SignUpWrap() {
  return (
    <article className="signUpWrap">
      <p>
        계정이 없으신가요?{" "}
        <Link to="/Main">
          <button href="" className="signUpBlue">
            가입하기
          </button>
        </Link>
      </p>
    </article>
  );
}

function LoginButton() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/Main");
  };
  return (
    <button className="loginButton" onClick={goToMain}>
      로그인
    </button>
  );
}

function StoreWrap() {
  return (
    <>
      <article className="storeWrap">
        <img
          src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"
          alt="appStore"
        />
        <img
          src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
          alt="googlePlay"
        />
      </article>
    </>
  );
}

function LoginYongwoo() {
  return (
    <>
      <section className="login">
        <article className="topWrap">
          <Logo />
          <UserInfo />
          <LoginButton />
          <div className="meddleLine">
            <div className="line"></div>
            <p>또는</p>
            <div className="line"></div>
          </div>
          <div className="facebookWrap">
            <p>Facebook으로 로그인</p>
          </div>
          <p className="passwordLost">비밀번호를 잊으셨나요?</p>
        </article>
        <SignUpWrap />
        <p className="downlodeCopyright">앱을 다운로드하세요.</p>
        <StoreWrap />
      </section>
    </>
  );
}

export default LoginYongwoo