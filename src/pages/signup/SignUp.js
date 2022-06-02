import { useState, useCallback } from 'react';
import UserInputForm from './components/UserInputForm';
import Terms from './components/Terms';

import './SignUp.scss';

const SignUp = () => {
  const [termsAgreementList, setTermsAgreementList] = useState([]);
  const [isAgreeTerms, setIsAgreeTerms] = useState(false);

  const listSubmitHandler = useCallback((list, isAgree) => {
    setTermsAgreementList(list);
    setIsAgreeTerms(isAgree);
  }, []);

  return (
    <div className="signup">
      <Terms onAgree={listSubmitHandler} />
      <section className="signupForm">
        <h1 className="signupTitle">위설록 회원가입</h1>
        <UserInputForm
          termsAgreementList={termsAgreementList}
          isAgreeTerms={isAgreeTerms}
        />
      </section>
    </div>
  );
};

export default SignUp;
