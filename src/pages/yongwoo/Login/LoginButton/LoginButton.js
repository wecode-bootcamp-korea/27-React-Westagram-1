import { useNavigate } from 'react-router-dom';
import '../LoginButton/LoginButton.scss';

function LoginButton() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-yongwoo');
  };

  return (
    <button className="loginButton" onClick={goToMain}>
      로그인
    </button>
  );
}

export default LoginButton;
