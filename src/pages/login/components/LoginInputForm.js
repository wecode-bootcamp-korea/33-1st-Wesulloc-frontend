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
    login(input);
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
      const response = await fetch(
        // 아래는 테스트를 위한 주소로 추후 변경 할 것
        'http://10.58.0.93:8000/user/login',
        {
          method: 'POST',
          body: JSON.stringify({
            user_account: input.id,
            user_password: input.password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(`${input.id}님 환영합니다.`);
        // 아래 토큰 형식은 백엔드 키 값에 따라 바뀔 수 있으므로 추후 조정 할 것
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
