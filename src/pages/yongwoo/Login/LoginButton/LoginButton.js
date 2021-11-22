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
  let idValue = props.id;
  let passWordValue = props.pw;
  loginBtnColor = 'loginButtonChange';
  return (
    <button
      className={
        idValue.includes('@') && passWordValue.length >= 5
          ? loginBtnColor
          : loginBtn
      }
      onClick={
        idValue.includes('@') && passWordValue.length >= 5 ? goToMain : ''
      }
    >
      로그인
    </button>
  );
}

export default LoginButton;
