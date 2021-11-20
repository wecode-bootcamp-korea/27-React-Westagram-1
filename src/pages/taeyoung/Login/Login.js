import React, { useState } from 'react';
import './Login.scss';

function LoginTaeyoung(e) {
  //=============  //=============  //=============
  //사용자 입력 데이터 저장
  const [newInput, setnewInput] = useState({
    idValue: '',
    pwValue: '',
  });
  // console.log(newInput);

  const handleIdInput = e => {
    const { name, value } = e.target;
    setnewInput({
      ...newInput,
      [name]: value,
    });
  };

  //=============  //=============  //=============
  //로그인 버튼 활성화
  const { idValue, pwValue } = newInput; // 비구조화를 통해서 state의 각 key의 value를 html태그에서 알 수 있도록 해주어야 해당 값을 사용할 수 있다.

  // console.log(idValue.includes('@'));
  // console.log(pwValue.length >= 5);
  // console.log(idValue.includes('@') && pwValue.length >= 5);

  // button의 조건에서 정상적으로 입력되는지 확인하기 위한 console.log
  //=============  //=============  //=============

  return (
    <main className="login">
      <section className="loginContainer">
        <p className="logo">Westagram</p>

        <form className="submitIdBox">
          <input
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            name="idValue"
            // value={idValue}
            onChange={handleIdInput}
          />
          <input
            type="password"
            placeholder="비밀번호"
            name="pwValue"
            // value={pwValue}
            onChange={handleIdInput}
          />
          <button
            className="button"
            name="loginButton"
            onClick=""
            disabled={!(idValue.includes('@') && pwValue >= 5)}
          >
            로그인
          </button>
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
