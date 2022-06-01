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
    try {
      const response = await fetch(
        // 아래 주소와 데이터 형식은 테스트를 위한 것으로 추후 백엔드 API 사양에 맞게 바꿀 것
        'http://10.58.0.93:8000/user/signup',
        {
          method: 'POST',
          body: JSON.stringify({
            user_account: submitData.id,
            user_password: submitData.password,
            user_name: submitData.username,
            user_contact: submitData.phonenumber,
            user_birth: submitData.birthday,
            // user_gender: submitData.gender,
            // user_address: '',
            user_email: '',
            user_terms_agreements: '{1:1}',
          }),
        }
      );

      if (response.ok) {
        alert(`${submitData.id}님 환영합니다.`);
        navigate('/main');
      } else {
        throw new Error('인증에 실패하였습니다.');
      }
    } catch (error) {
      alert(error.message);
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
