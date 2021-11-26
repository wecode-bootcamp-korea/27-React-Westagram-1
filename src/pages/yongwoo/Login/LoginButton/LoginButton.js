/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../LoginButton/LoginButton.scss';

function LoginButton(props) {
  let [loginBtn, loginBtnColor] = useState('loginButton');
  const { id, pw } = props;
  const userInputValue = id.includes('@') && pw.length >= 5;
  loginBtnColor = 'loginButtonChange';

  const navigate = useNavigate();
  const goToMain = () => {
    //   fetch('http://10.58.5.25:8000/users/signin/', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       email: 'komhgogo@gmail.com',
    //       password: 'Rhalsgur1@',
    //     }),
    //   })
    //     .then(response => response.json())
    //     .then(result => console.log('결과: ', result))
    //     .then();
    navigate('/main-yongwoo');
  };

  return (
    <button
      className={userInputValue ? loginBtnColor : loginBtn}
      onClick={userInputValue ? goToMain : ''}
      type="button"
    >
      로그인
    </button>
  );
}

export default LoginButton;
