import { useState, useEffect } from 'react';
import './InputPersonalInfo.scss';

let regExpForPhonenumber = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
let regExpForBirth =
  /^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;

const InputPersonalInfo = ({ onChange, onChangeValidation }) => {
  const [InputPhoneNumber, setInputPhoneNumber] = useState('');
  const [InputBirth, setInputBirth] = useState('');

  const [isValidInputName, setIsValidInputName] = useState(false);
  const [isValidInputBirth, setIsValidInputBirth] = useState(false);
  const [isValidInputPhoneNumber, setIsValidInputPhoneNumber] = useState(false);

  const inputHandler = event => {
    const { name, value } = event.target;

    if (name === 'username') {
      if (value.length === 0) {
        alert('성함을 입력해주세요.');
        setIsValidInputName(false);
        onChange(name, '');
      } else {
        setIsValidInputName(true);
        onChange(name, value);
      }
    }

    if (name === 'birthday') {
      setInputBirth(value);
    }

    if (name === 'phonenumber') {
      setInputPhoneNumber(value);
    }

    if (name === 'email') {
      onChange(name, value);
    }
  };

  const blurHandler = event => {
    const { name } = event.target;

    if (name === 'birthday') {
      if (!regExpForBirth.test(InputBirth)) {
        alert('생년월일을 다시 확인해주세요. (1900-00-00 형식)');
        setIsValidInputBirth(false);
        onChange(name, '');
      } else {
        setIsValidInputBirth(true);
        onChange(name, InputBirth);
      }
    }

    if (name === 'phonenumber') {
      if (!regExpForPhonenumber.test(InputPhoneNumber)) {
        alert('휴대폰 번호를 다시 확인해주세요. (- 포함 입력)');
        setIsValidInputPhoneNumber(false);
        onChange(name, '');
      } else {
        setIsValidInputPhoneNumber(true);
        onChange(name, InputPhoneNumber);
      }
    }
  };

  useEffect(() => {
    onChangeValidation(
      'personalInfo',
      isValidInputName && isValidInputBirth && isValidInputPhoneNumber
    );
  }, [
    onChangeValidation,
    isValidInputName,
    isValidInputBirth,
    isValidInputPhoneNumber,
  ]);

  return (
    <>
      <input {...PERSONAL_INFO[0]} onChange={inputHandler} />
      <input
        {...PERSONAL_INFO[1]}
        onChange={inputHandler}
        onBlur={blurHandler}
      />
      <input
        {...PERSONAL_INFO[2]}
        onChange={inputHandler}
        onBlur={blurHandler}
      />
      <input {...PERSONAL_INFO[3]} onChange={inputHandler} />
    </>
  );
};

const PERSONAL_INFO = [
  { id: 1, name: 'username', placeholder: '이름', type: 'text' },
  {
    id: 2,
    name: 'birthday',
    placeholder: '생년월일 (1990-00-00 형식)',
    type: 'text',
  },
  {
    id: 3,
    name: 'phonenumber',
    placeholder: '휴대폰 번호 (- 포함 입력)',
    type: 'text',
  },
  {
    id: 4,
    name: 'email',
    placeholder: '이메일 (선택사항)',
    type: 'text',
  },
];

export default InputPersonalInfo;
