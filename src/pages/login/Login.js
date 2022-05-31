import LoginInputForm from './components/LoginInputForm';

import './Login.scss';

const SignUp = () => {
  return (
    <div className="login">
      <section className="loginForm">
        <h1 className="loginTitle">위설록 로그인</h1>
        <LoginInputForm />
      </section>
    </div>
  );
};

export default SignUp;
