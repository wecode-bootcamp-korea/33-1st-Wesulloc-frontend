import './InputPersonalInfo.scss';

const InputPersonalInfo = ({ obj, onChange }) => {
  const { name, type } = obj;

  const inputHandler = event => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  return (
    <>
      {(name === 'username' || name === 'phonenumber') && (
        <input {...obj} onChange={inputHandler} />
      )}
      {name === 'birthday' && (
        <div className="registrationNum">
          <input {...obj} onChange={inputHandler} />
          <span>-</span>
          <input name="gender" type={type} onChange={inputHandler} />
          <p>&bull;&bull;&bull;&bull;&bull;&bull;</p>
        </div>
      )}
    </>
  );
};

export default InputPersonalInfo;
