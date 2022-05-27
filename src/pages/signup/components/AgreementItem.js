import './AgreementItem.scss';

const AgreementItem = ({ item }) => {
  const { id, text, isRequired, hasMoreInfo } = item;

  const linkClickHandler = event => {
    event.preventDefault();
  };

  return (
    <div className="agreementItem">
      <input id={id} type="checkbox" />
      <label htmlFor={id}>
        <i className="fa-solid fa-check" />
        {`[${isRequired ? '필수' : '선택'}] ${text}`}
      </label>
      {hasMoreInfo && (
        <a href="/" onClick={linkClickHandler}>
          보기
        </a>
      )}
    </div>
  );
};

export default AgreementItem;
