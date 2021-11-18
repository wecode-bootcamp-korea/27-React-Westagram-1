import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginBtnYoujin.scss';

function LoginBtnYoujin() {
  const navigate = useNavigate();
  const goToMain = () => {
    if (true) {
      navigate('/main-youjin');
    } else {
      alert('ddd');
    }
  };
  return (
    <div class="loginBtnYoujin">
      <button className="beforeButton" onClick={goToMain}>
        로그인
      </button>
    </div>
  );
}

export default LoginBtnYoujin;
