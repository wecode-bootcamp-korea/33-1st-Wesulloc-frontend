import { useState, useEffect } from 'react';
import InputUserInfo from './InputUserInfo';
import InputPersonalInfo from './InputPersonalInfo';

import './UserInputForm.scss';

const UserInputForm = () => {
  const [personalInfo, setPersonalInfo] = useState({
    username: '',
    birthday: '',
    gender: '',
    phonenumber: '',
  });

  const [isValidPersonalInfo, setIsValidPersonalInfo] = useState(false);
  const [isValidButton, setIsValidButton] = useState(false);

  const [userInfo, setUserInfo] = useState({
    id: '',
    password: '',
  });

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

  useEffect(() => {
    const personalInfoValueArr = Object.values(personalInfo);
    if (!personalInfoValueArr.includes('')) {
      setIsValidPersonalInfo(true);
    } else {
      setIsValidPersonalInfo(false);
    }
  }, [personalInfo]);

  useEffect(() => {
    setIsValidButton(isValidPersonalInfo);
  }, [isValidPersonalInfo]);

  return (
    <form className="signupSubmitForm">
      {PERSONAL_INFO.map(obj => {
        return (
          <InputPersonalInfo
            key={obj.id}
            obj={obj}
            personalInfo={personalInfo}
            onChange={personalInfoHandler}
          />
        );
      })}
      {USER_INFO.map(obj => {
        return (
          <InputUserInfo
            key={obj.id}
            obj={obj}
            userInfo={userInfo}
            onChange={userInfoHandler}
          />
        );
      })}
      <button disabled={!isValidButton}>회원가입</button>
    </form>
  );
};

const PERSONAL_INFO = [
  { id: 1, name: 'username', placeholder: '이름', type: 'text' },
  { id: 2, name: 'birthday', placeholder: '생년월일/성별', type: 'number' },
  {
    id: 3,
    name: 'phonenumber',
    placeholder: '휴대폰 번호 (- 포함 입력)',
    type: 'text',
  },
];

const USER_INFO = [
  { id: 101, name: 'id', placeholder: '아이디', type: 'text' },
  {
    id: 102,
    name: 'password',
    placeholder: '비밀번호 (영문 소문자, 숫자, 특수문자 조합 8-16자)',
    type: 'password',
  },
  {
    id: 103,
    name: 'passwordCheck',
    placeholder: '비밀번호 확인',
    type: 'password',
  },
];

export default UserInputForm;
