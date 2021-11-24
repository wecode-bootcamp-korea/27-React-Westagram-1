import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginFormYoujin.scss';

function LoginFormYoujin() {
  const [isValue, setIsValue] = useState({
    idValue: '',
    passwordValue: '',
  });
  const [booleanBtn, setBooleanBtn] = useState(false);

  const handleIdInput = event => {
    const { name, value } = event.target;
    setIsValue({
      ...isValue,
      [name]: value,
    });
  };

  const passLogin = () => {
    isValue.idValue.includes('@') && isValue.passwordValue.length > 4
      ? setBooleanBtn(true)
      : setBooleanBtn(false);
  };
  const navigate = useNavigate();

  const goToMain = event => {
    event.preventDefault();
    fetch('http://10.58.3.112:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        name: 'kuyoujin',
        email: isValue.idValue,
        password: isValue.passwordValue,
        phone: '01048020445',
      }),
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(response => response.json())
      .then(result =>
        result.Token
          ? navigate('/main-youjin')
          : alert('id와 password를 다시 입력해주세요.')
      );
  };
  return (
    <div className="loginFormYoujin">
      <form onKeyUp={passLogin} onChange={handleIdInput}>
        <input
          className="inputBox"
          id="id1"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          // onChange={handleIdInput}
          name="idValue"
        />
        <input
          className="inputBox"
          id="password1"
          type="password"
          placeholder="비밀번호"
          // onChange={handleIdInput}
          name="passwordValue"
        />
        <div className="loginBtnYoujin">
          <button
            className={booleanBtn ? 'afterButton' : 'beforeButton'}
            onClick={goToMain}
            disabled={booleanBtn ? false : true}
          >
            로그인
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginFormYoujin;
