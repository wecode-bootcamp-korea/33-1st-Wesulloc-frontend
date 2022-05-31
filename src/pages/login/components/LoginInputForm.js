import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const response = await fetch(
      'https://fir-40252-default-rtdb.firebaseio.com/login.json',
      {
        method: 'POST',
        body: JSON.stringify(input),
      }
    );

    if (response.ok) {
      alert(`${input.id}님 환영합니다.`);
      navigate('/main');
    }
  }

  return (
    <form className="loginSubmitForm" onSubmit={loginHandler}>
      <input placeholder="아이디" name="id" onChange={inputHandler} />
      <input placeholder="비밀번호" name="password" onChange={inputHandler} />
      <button disabled={!isValidate}>로그인</button>
    </form>
  );
};

export default LoginInputForm;
