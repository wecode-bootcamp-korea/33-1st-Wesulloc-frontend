import UserInputForm from './components/UserInputForm';

import './SignUp.scss';

const SignUp = () => {
  return (
    <div className="signup">
      <section className="signupForm">
        <h1 className="signupTitle">위설록 회원가입</h1>
        <UserInputForm />
      </section>
    </div>
  );
};

export default SignUp;
