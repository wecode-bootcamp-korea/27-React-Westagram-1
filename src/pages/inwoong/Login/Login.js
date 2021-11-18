import './Login.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const gotoMain = () => {
    navigate('/main-inwoong');
  };

  function handleIdInput(event) {
    setIdValue(event.target.value);
  }
  function handlePwInput(event) {
    setPwValue(event.target.value);
  }
  return (
    <div className="LoginInwoong">
      <div className="titleWrapper">
        <h1 className="title">Westagram</h1>
      </div>
      <div className="loginBox">
        <input
          onChange={handleIdInput}
          className="idBox"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          onChange={handlePwInput}
          className="passwordBox"
          type="password"
          placeholder="비밀번호"
        />
      </div>
      <div>
        {idValue.includes('@') && pwValue.length > 4 ? (
          <button className="button" onClick={gotoMain}>
            로그인
          </button>
        ) : (
          <button className="closedButton"> 로그인</button>
        )}
      </div>
      <div className="passwordBox">
        <p className="findPassword">
          <a href="https://www.google.com/search?q=%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4&oq=%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4&aqs=chrome..69i57j0i512l8.2922j0j7&sourceid=chrome&ie=UTF-8">
            비밀번호를 잊으셨나요?
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
