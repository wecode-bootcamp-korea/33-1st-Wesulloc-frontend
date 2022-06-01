import { useState, useEffect } from 'react';
import './InputPersonalInfo.scss';

let regExpForName = /[ㄱ-힣]/;
let regExpForPhonenumber = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
let regExpForBirth =
  /^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;

const InputPersonalInfo = ({ onChange, onChangeValidation }) => {
  const [InputPhoneNumber, setInputPhoneNumber] = useState('');

  const [isValidInputName, setIsValidInputName] = useState(false);
  const [isValidInputBirth, setIsValidInputBirth] = useState(false);
  const [isValidInputGender, setIsValidInputGender] = useState(false);
  const [isValidInputPhoneNumber, setIsValidInputPhoneNumber] = useState(false);

  const inputHandler = event => {
    const { name, value } = event.target;

    if (name === 'username') {
      if (!regExpForName.test(value)) {
        alert('성함을 다시 확인해주세요. (한글)');
        setIsValidInputName(false);
        onChange(name, '');
      } else {
        setIsValidInputName(true);
        onChange(name, value);
      }
    }

    if (name === 'gender') {
      if (+value !== 1 && +value !== 2 && +value !== 3 && +value !== 4) {
        alert('주민번호 앞자리를 다시 확인해주세요.(1-4)');
        setIsValidInputGender(false);
        onChange(name, '');
      } else {
        setIsValidInputGender(true);
        onChange(name, value);
      }
    }

    if (name === 'birthday') {
      // if (('' + value).length >= 7) {
      if (!regExpForBirth.test(value)) {
        alert('생년월일을 다시 확인해주세요. (6자리)');
        setIsValidInputBirth(false);
        onChange(name, '');
      } else {
        setIsValidInputBirth(true);
        onChange(name, value);
      }
    }

    if (name === 'phonenumber') {
      setInputPhoneNumber(value);
    }
  };

  const blurHandler = event => {
    const { name } = event.target;

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
      isValidInputName &&
        isValidInputBirth &&
        isValidInputGender &&
        isValidInputPhoneNumber
    );
  }, [
    onChangeValidation,
    isValidInputName,
    isValidInputBirth,
    isValidInputGender,
    isValidInputPhoneNumber,
  ]);

  return (
    <>
      <input {...PERSONAL_INFO[0]} onChange={inputHandler} />
      <div className="registrationNum">
        <input {...PERSONAL_INFO[1]} onChange={inputHandler} />
        <span>-</span>
        <input name="gender" type="number" onChange={inputHandler} />
        <p>&bull;&bull;&bull;&bull;&bull;&bull;</p>
      </div>
      <input
        {...PERSONAL_INFO[2]}
        onChange={inputHandler}
        onBlur={blurHandler}
      />
    </>
  );
};

const PERSONAL_INFO = [
  { id: 1, name: 'username', placeholder: '이름', type: 'text' },
  { id: 2, name: 'birthday', placeholder: '생년월일/성별', type: 'text' },
  {
    id: 3,
    name: 'phonenumber',
    placeholder: '휴대폰 번호 (- 포함 입력)',
    type: 'text',
  },
];

export default InputPersonalInfo;
