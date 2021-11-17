import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginBtn.scss';

function LoginBtn() {
  const navigate = useNavigate();
  const goToMain = () => {
    if (true) {
      navigate('/main-youjin');
    } else {
      alert('ddd');
    }
  };
  return (
    <div class="LoginBtn">
      <button className="beforeButton" onClick={goToMain}>
        로그인
      </button>
    </div>
  );
}

export default LoginBtn;
