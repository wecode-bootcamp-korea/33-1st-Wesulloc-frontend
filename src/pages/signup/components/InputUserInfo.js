import { useReducer } from 'react';

import './InputUserInfo.scss';

let regExpForId = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,12}$/;
let regExpForPassword =
  /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

const inputReducer = (state, action) => {
  if (action.type === 'ID_INPUT') {
    return {
      ...state,
      valueId: action.val,
      isValidId: regExpForId.test(action.val),
    };
  } else if (action.type === 'PASSWORD_INPUT') {
    return {
      ...state,
      valuePwd: action.val,
      isValidPwd: regExpForPassword.test(action.val),
    };
  } else if (action.type === 'PASSWORDCHECK_INPUT') {
    return {
      ...state,
      valuePwdChk: action.val,
      isValidPwdChk:
        regExpForPassword.test(state.valuePwd) && state.valuePwd === action.val,
    };
  }
  return {
    valueId: '',
    isValidId: false,
    valuePwd: '',
    isValidPwd: false,
    valuePwdChk: '',
    isValidPwdChk: false,
  };
};

const InputUserInfo = ({ obj }) => {
  const { name } = obj;

  const [inputState, dispatchInputAction] = useReducer(inputReducer, {
    valueId: '',
    isValidId: null,
    valuePwd: '',
    isValidPwd: null,
    valuePwdChk: '',
    isValidPwdChk: null,
  });

  const idInputHandler = event => {
    dispatchInputAction({ type: 'ID_INPUT', val: event.target.value });
  };

  const passwordInputHandler = event => {
    dispatchInputAction({ type: 'PASSWORD_INPUT', val: event.target.value });
  };

  const passwordCheckInputHandler = event => {
    dispatchInputAction({
      type: 'PASSWORDCHECK_INPUT',
      val: event.target.value,
    });
  };

  return (
    <>
      {name === 'id' && (
        <>
          <input
            className={`${
              inputState.isValidId
                ? 'valid'
                : inputState.isValidId === null
                ? ''
                : 'invalid'
            }`}
            {...obj}
            onChange={idInputHandler}
          />
          {inputState.isValidId && (
            <p className="valid">사용가능한 아이디입니다.</p>
          )}
          {inputState.isValidId !== null && !inputState.isValidId && (
            <p className="invalid">
              아이디는 4~12자 영문과 숫자를 사용하여 입력해주세요.
            </p>
          )}
        </>
      )}
      {name === 'password' && (
        <>
          <input
            className={`${
              inputState.isValidPwd
                ? 'valid'
                : inputState.isValidPwd === null
                ? ''
                : 'invalid'
            }`}
            {...obj}
            onChange={passwordInputHandler}
          />
          {inputState.isValidPwd && (
            <p className="valid">사용가능한 비밀번호 입니다.</p>
          )}
          {inputState.isValidPwd !== null && !inputState.isValidPwd && (
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
            className={`${
              inputState.isValidPwdChk
                ? 'valid'
                : inputState.isValidPwdChk === null
                ? ''
                : 'invalid'
            }`}
            {...obj}
            onChange={passwordCheckInputHandler}
          />
          {inputState.isValidPwdChk && (
            <p className="valid">비밀번호와 비밀번호 확인이 일치합니다.</p>
          )}
          {inputState.isValidPwdChk !== null && !inputState.isValidPwdChk && (
            <p className="invalid">비밀번호를 한번 더 입력해주세요.</p>
          )}
        </>
      )}
    </>
  );
};

export default InputUserInfo;
