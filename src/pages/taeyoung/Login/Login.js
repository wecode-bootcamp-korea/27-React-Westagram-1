import React from 'react';
import './Login.scss';

function LoginTaeyoung() {
  return (
    <main className="login">
      <section className="loginContainer">
        <p className="logo">Westagram</p>

        <form className="submitIdBox">
          <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
          <input type="password" placeholder="비밀번호" />
          <button class="button">로그인</button>
        </form>

        <div className="divisionLine">
          <div />
          <span>또는</span>
          <div />
        </div>

        <a className="facebookLoginButton" href="*">
          <i className="fab fa-facebook-square" />
          Facebook으로 로그인
        </a>
        <a className="findPasswordButton" href="*">
          비밀번호를 잊으셨나요?
        </a>
      </section>

      <section className="signContainer">
        계정이 없으신가요? &nbsp;<a href="*">가입하기</a>
      </section>

      <section className="downlodeContainer">
        <p>앱을 다운로드하세요.</p>
        <img src="./taeyoung/images/AppStore.png" alt="AppleStore" />
        <img src="./taeyoung/images/PlayStore.png" alt="GooglePlay" />
      </section>
    </main>
  );
}

export default LoginTaeyoung;
