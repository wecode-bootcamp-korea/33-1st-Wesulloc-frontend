import './OrderButton.scss';

const OrderButton = ({ category, onClickBtn }) => {
  const orderHandler = event => {
    event.preventDefault();
    onClickBtn(null, event.target.className);
  };

  return (
    <>
      {category === 'orderSelected' && (
        <button className={`${category}Btn`} onClick={orderHandler}>
          선택상품 주문
        </button>
      )}
      {category === 'orderAll' && (
        <button className={`${category}Btn`} onClick={orderHandler}>
          전체상품 주문
        </button>
      )}
    </>
  );
};

export default OrderButton;
