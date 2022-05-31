import { useState } from 'react';

import './InputUserInfo.scss';

let regExpForId = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,12}$/;
let regExpForPassword =
  /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

const InputUserInfo = ({ obj }) => {
  const { name } = obj;

  const [inputId, setInputId] = useState('');
  const [inputPwd, setInputPwd] = useState('');
  const [inputPwdChk, setInputPwdChk] = useState('');
  const [isValidId, setIsValidId] = useState(null);
  const [isValidPwd, setIsValidPwd] = useState(null);
  const [isValidChk, setIsValidPwdChk] = useState(null);

  const idInputHandler = event => {
    const { value } = event.target;
    setInputId(value);
    setIsValidId(regExpForId.test(value));
  };

  const pwdInputHandler = event => {
    const { value } = event.target;
    setInputPwd(value);
    setIsValidPwd(regExpForPassword.test(value));
  };

  const pwdChkInputHandler = event => {
    const { value } = event.target;
    setInputPwdChk(value);
    setIsValidPwdChk(inputPwd === value);
  };

  const idInputClasses = isValidId
    ? 'valid'
    : isValidId === null
    ? ''
    : 'invalid';

  const pwdInputClasses = isValidPwd
    ? 'valid'
    : isValidPwd === null
    ? ''
    : 'invalid';

  const pwdChkInputClasses = isValidChk
    ? 'valid'
    : isValidChk === null
    ? ''
    : 'invalid';

  return (
    <>
      {name === 'id' && (
        <>
          <input
            className={`${idInputClasses}`}
            {...obj}
            onChange={idInputHandler}
          />
          {isValidId && <p className="valid">사용가능한 아이디입니다.</p>}
          {isValidId !== null && !isValidId && (
            <p className="invalid">
              아이디는 4~12자 영문과 숫자를 사용하여 입력해주세요.
            </p>
          )}
        </>
      )}
      {name === 'password' && (
        <>
          <input
            className={`${pwdInputClasses}`}
            {...obj}
            onChange={pwdInputHandler}
          />
          {isValidPwd && <p className="valid">사용가능한 비밀번호 입니다.</p>}
          {isValidPwd !== null && !isValidPwd && (
            <p className="invalid">
              비밀번호는 영문(소문자), 숫자, 특수문자를 최소 한 번이상 사용하여
              8~16자로 입력해주세요.
            </p>
          )}
        </>
      )}
      {name === 'passwordCheck' && (
        <>
          <input
            className={`${pwdChkInputClasses}`}
            {...obj}
            onChange={pwdChkInputHandler}
          />
          {isValidChk && (
            <p className="valid">비밀번호와 비밀번호 확인이 일치합니다.</p>
          )}
          {isValidChk !== null && !isValidChk && (
            <p className="invalid">비밀번호를 한번 더 입력해주세요.</p>
          )}
        </>
      )}
    </>
  );
};

export default InputUserInfo;
