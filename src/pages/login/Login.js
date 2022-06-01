import { useNavigate } from 'react-router-dom';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';
import LoginInputForm from './components/LoginInputForm';

import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const buttonHandler = event => {
    navigate('/terms');
  };

  return (
    <>
      <Nav />
      <div className="login">
        <section className="loginForm">
          <h1 className="loginTitle">위설록 로그인</h1>
          <LoginInputForm />
          <button className="signupBtn" onClick={buttonHandler}>
            아직 회원이 아니세요?
          </button>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Login;
