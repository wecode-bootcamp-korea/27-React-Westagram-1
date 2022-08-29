import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginFormYoujin.scss';

function LoginFormYoujin() {
  const [isValue, setIsValue] = useState({
    idValue: '',
    passwordValue: '',
  });
  const [count, setCount] = useState(0);

  const handleIdInput = event => {
    const { name, value } = event.target;
    setIsValue({
      ...isValue,
      [name]: value,
    });
  };

  const passLogin =
    isValue.idValue.includes('@') && isValue.passwordValue.length > 4;

  const navigate = useNavigate();
  const test1 = 1;

  const goToMain = event => {
    event.preventDefault();
    fetch('http://10.58.5.25:8000/postings/', {
      method: 'POST',
      header: JSON.stringify({ Authorization: '' }),
      body: JSON.stringify({
        title: '2번째 게시글',
        // name: 'kuyoujin',
        // email: isValue.idValue,
        // password: isValue.passwordValue,
        // phone: '01012341234',
      }),
    })
      .then(response => response.json())
      .then(result =>
        result.Token
          ? navigate('/main-youjin')
          : alert('id와 password를 다시 입력해주세요.')
      );
  };

  useEffect(
    () =>
      fetch(`http://10.58.5.25:8000/postings/${count}`, {
        method: 'POST',
        header: JSON.stringify({ Authorization: '' }),
        body: JSON.stringify({
          title: '2번째 게시글',
          // name: 'kuyoujin',
          // email: isValue.idValue,
          // password: isValue.passwordValue,
          // phone: '01012341234',
        }),
      }),
    []
  );

  return (
    <div className="loginFormYoujin">
      <form className="loginForm" onKeyUp={passLogin} onChange={handleIdInput}>
        <input
          className="inputBox"
          id="id1"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          name="idValue"
        />
        <input
          className="inputBox"
          id="password1"
          type="password"
          placeholder="비밀번호"
          name="passwordValue"
        />
        <div className="loginBtnYoujin">
          <p onClick={() => setCount(prev => prev + 1)}>test</p>
          <button
            className={!passLogin ? 'beforeButton' : 'afterButton'}
            onClick={goToMain}
            disabled={!passLogin}
          >
            로그인
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginFormYoujin;
