import './InputPersonalInfo.scss';

let regExpForName = /[ㄱ-힣]/;
let regExpForPhonenumber = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;

const InputPersonalInfo = ({ obj, personalInfo, onChange }) => {
  const { name } = obj;
  const { username, birthday, gender, phonenumber } = personalInfo;

  const inputHandler = event => {
    const { name, value } = event.target;

    if (name === 'username' && !regExpForName.test(value)) {
      alert('성함을 다시 확인해주세요. (한글)');
      onChange(name, '');
      return;
    }

    if (name === 'birthday' && value.length > 6) {
      alert('생년월일을 다시 확인해주세요. (6자리)');
      onChange(name, value.substring(0, 6));
      return;
    }

    if (name === 'gender') {
      if (+value !== 1 && +value !== 2 && +value !== 3 && +value !== 4) {
        alert('주민번호 앞자리를 다시 확인해주세요.(1-4)');
        onChange(name, '');
        return;
      }
    }
    onChange(name, value);
  };

  const inputBlurHandler = event => {
    if (
      name === 'phonenumber' &&
      !regExpForPhonenumber.test(event.target.value)
    ) {
      alert('휴대폰 번호를 다시 확인해주세요. (- 포함 입력)');
      return;
    }
  };

  return (
    <>
      {name === 'username' && (
        <input {...obj} value={username} onChange={inputHandler} />
      )}
      {name === 'phonenumber' && (
        <input
          {...obj}
          value={phonenumber}
          onChange={inputHandler}
          onBlur={inputBlurHandler}
        />
      )}
      {name === 'birthday' && (
        <div className="registrationNum">
          <input {...obj} value={birthday} onChange={inputHandler} />
          <span>-</span>
          <input
            name="gender"
            type="number"
            value={gender}
            onChange={inputHandler}
          />
          <p>&bull;&bull;&bull;&bull;&bull;&bull;</p>
        </div>
      )}
    </>
  );
};

export default InputPersonalInfo;
