/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../LoginButton/LoginButton.scss';

function LoginButton(props) {
  let [loginBtn, loginBtnColor] = useState('loginButton');
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-yongwoo');
  };

  const { id, pw } = props;
  const userInputValue = id.includes('@') && pw.length >= 5;
  loginBtnColor = 'loginButtonChange';

  return (
    <button
      className={userInputValue ? loginBtnColor : loginBtn}
      onClick={userInputValue ? goToMain : ''}
    >
      로그인
    </button>
  );
}

export default LoginButton;
