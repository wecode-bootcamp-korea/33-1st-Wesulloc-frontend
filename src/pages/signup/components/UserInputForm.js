import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import InputUserInfo from './InputUserInfo';
import InputPersonalInfo from './InputPersonalInfo';

import './UserInputForm.scss';

const UserInputForm = () => {
  const [personalInfo, setPersonalInfo] = useState({
    username: '',
    birthday: '',
    gender: '',
    phonenumber: '',
    isValid: false,
  });

  const [isValidButton, setIsValidButton] = useState(false);

  const [userInfo, setUserInfo] = useState({
    id: '',
    password: '',
    isValid: false,
  });

  const navigate = useNavigate();

  const personalInfoHandler = (key, value) => {
    setPersonalInfo(prevState => {
      return { ...prevState, [key]: value };
    });
  };

  const userInfoHandler = (key, value) => {
    setUserInfo(prevState => {
      return { ...prevState, [key]: value };
    });
  };

  const validationHandler = useCallback((id, value) => {
    if (id === 'personalInfo') {
      setPersonalInfo(prevState => {
        return { ...prevState, isValid: value };
      });
    }

    if (id === 'userInfo') {
      setUserInfo(prevState => {
        return { ...prevState, isValid: value };
      });
    }
  }, []);

  const submitHandler = event => {
    event.preventDefault();
    signupHandler({ ...userInfo, ...personalInfo });
  };

  async function signupHandler(submitData) {
    const response = await fetch(
      'https://fir-40252-default-rtdb.firebaseio.com/signup.json',
      {
        method: 'POST',
        body: JSON.stringify(submitData),
      }
    );

    if (response.ok) {
      alert(`${userInfo.id}님 환영합니다.`);
      navigate('/main');
    }
  }

  useEffect(() => {
    setIsValidButton(personalInfo.isValid && userInfo.isValid);
  }, [personalInfo, userInfo]);

  return (
    <form className="signupSubmitForm" onSubmit={submitHandler}>
      <InputPersonalInfo
        onChange={personalInfoHandler}
        onChangeValidation={validationHandler}
      />
      <InputUserInfo
        onChange={userInfoHandler}
        onChangeValidation={validationHandler}
      />
      <button disabled={!isValidButton}>회원가입</button>
    </form>
  );
};

export default UserInputForm;
