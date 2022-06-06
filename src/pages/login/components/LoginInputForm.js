import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../../Context/authContext';
import './LoginInputForm.scss';

let regExpForId = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,12}$/;
let regExpForPassword =
  /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

const LoginInputForm = () => {
  const [input, setInput] = useState({
    id: '',
    password: '',
  });

  const [isValidate, setIsValidate] = useState(false);

  const navigate = useNavigate();

  const authContext = useContext(AuthContext);

  const inputHandler = event => {
    const { name, value } = event.target;
    setInput(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const loginHandler = event => {
    event.preventDefault();
    // login(input);
    // 프론트 검증을 위한 코드 부분 (확인 후 삭제)
    authContext.login('token');
    alert(`${input.id}님 환영합니다.`);
    navigate('/');
    // **
  };

  const checkValidate = (id, pwd) => {
    const validation = regExpForId.test(id) && regExpForPassword.test(pwd);
    setIsValidate(validation);
  };

  useEffect(() => {
    const timeid = setTimeout(() => {
      checkValidate(input.id, input.password);
    }, 300);
    return () => {
      clearTimeout(timeid);
    };
  }, [input.id, input.password]);

  async function login(input) {
    try {
      const response = await fetch('http://10.58.2.25:8000/user/login', {
        method: 'POST',
        body: JSON.stringify({
          user_account: input.id,
          user_password: input.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(`${input.id}님 환영합니다.`);
        authContext.login(data.access_token);
        navigate('/');
      } else {
        throw new Error('인증에 실패하였습니다.');
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <form className="loginSubmitForm" onSubmit={loginHandler}>
      <input placeholder="아이디" name="id" onChange={inputHandler} />
      <input
        placeholder="비밀번호"
        name="password"
        type="password"
        onChange={inputHandler}
      />
      <button disabled={!isValidate}>로그인</button>
    </form>
  );
};

export default LoginInputForm;
