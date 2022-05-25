import './OrderButton.scss';

const OrderButton = ({ category }) => {
  return (
    <>
      {category === 'orderSelected' && (
        <button className={`${category}Btn`}>선택상품 주문</button>
      )}
      {category === 'orderAll' && (
        <button className={`${category}Btn`}>전체상품 주문</button>
      )}
    </>
  );
};

export default OrderButton;
