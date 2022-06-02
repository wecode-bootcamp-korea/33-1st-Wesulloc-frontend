import { useState, useEffect } from 'react';
import './InputUserInfo.scss';

let regExpForId = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,12}$/;
let regExpForPassword =
  /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

const InputUserInfo = ({ onChange, onChangeValidation }) => {
  const [inputId, setInputId] = useState({
    isValid: null,
  });
  const [inputPwd, setInputPwd] = useState({
    value: '',
    isValid: null,
  });
  const [inputPwdChk, setInputPwdChk] = useState({
    isValid: null,
  });

  const InputHandler = event => {
    const { name, value } = event.target;

    if (name === 'id') {
      setInputId(prevState => {
        return { ...prevState, isValid: regExpForId.test(value) };
      });
      onChange(name, value);
    }

    if (name === 'password') {
      setInputPwd(prevState => {
        return {
          ...prevState,
          value: value,
          isValid: regExpForPassword.test(value),
        };
      });
      onChange(name, value);
    }

    if (name === 'passwordCheck') {
      setInputPwdChk(prevState => {
        return {
          ...prevState,
          isValid: inputPwd.isValid && inputPwd.value === value,
        };
      });
    }
  };

  useEffect(() => {
    onChangeValidation(
      'userInfo',
      inputId.isValid && inputPwd.isValid && inputPwdChk.isValid
    );
  }, [onChangeValidation, inputId, inputPwd, inputPwdChk]);

  const idInputClasses = inputId.isValid
    ? 'valid'
    : inputId.isValid === null
    ? ''
    : 'invalid';

  const pwdInputClasses = inputPwd.isValid
    ? 'valid'
    : inputPwd.isValid === null
    ? ''
    : 'invalid';

  const pwdChkInputClasses = inputPwdChk.isValid
    ? 'valid'
    : inputPwdChk.isValid === null
    ? ''
    : 'invalid';

  return (
    <>
      <input
        className={`${idInputClasses}`}
        {...USER_INFO[0]}
        onChange={InputHandler}
      />
      {inputId.isValid && <p className="valid">사용가능한 아이디입니다.</p>}
      {inputId.isValid !== null && !inputId.isValid && (
        <p className="invalid">
          아이디는 4~12자 영문과 숫자를 사용하여 입력해주세요.
        </p>
      )}
      <input
        className={`${pwdInputClasses}`}
        {...USER_INFO[1]}
        onChange={InputHandler}
      />
      {inputPwd.isValid && <p className="valid">사용가능한 비밀번호 입니다.</p>}
      {inputPwd.isValid !== null && !inputPwd.isValid && (
        <p className="invalid">
          비밀번호는 영문(소문자), 숫자, 특수문자를 최소 한 번이상 사용하여
          8~16자로 입력해주세요.
        </p>
      )}
      <input
        className={`${pwdChkInputClasses}`}
        {...USER_INFO[2]}
        onChange={InputHandler}
      />
      {inputPwdChk.isValid && (
        <p className="valid">비밀번호와 비밀번호 확인이 일치합니다.</p>
      )}
      {inputPwdChk.isValid !== null && !inputPwdChk.isValid && (
        <p className="invalid">비밀번호를 한번 더 입력해주세요.</p>
      )}
    </>
  );
};

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

export default InputUserInfo;
