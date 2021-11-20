import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../LoginButton/LoginButton.scss';

function LoginButton(props) {
  let [loginBtn, loginBtnColor] = useState('loginButton');
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-yongwoo');
  };
  loginBtnColor = 'loginButtonChange';
  return (
    <button
      className={
        props.id.includes('@') && props.pw.length >= 5
          ? loginBtnColor
          : loginBtn
      }
      onClick={goToMain}
    >
      로그인
    </button>
  );
}

export default LoginButton;
