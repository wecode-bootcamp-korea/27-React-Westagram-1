import './Login.scss';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();

  const gotoMain = () => {
    navigate('/main-inwoong');
  };
  return (
    <div class="Login">
      <div class="titleWrapper">
        <h1 class="title">Westagram</h1>
      </div>
      <div class="loginBox">
        <input
          class="idBox"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input class="passwordBox" type="password" placeholder="비밀번호" />
      </div>
      <div>
        {/* <button class="button" disabled> */}
        <button class="button" onClick={gotoMain}>
          로그인
        </button>
      </div>
      <div class="passwordBox">
        <p class="findPassword">
          <a href="https://www.google.com/search?q=%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4&oq=%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4&aqs=chrome..69i57j0i512l8.2922j0j7&sourceid=chrome&ie=UTF-8">
            비밀번호를 잊으셨나요?
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
