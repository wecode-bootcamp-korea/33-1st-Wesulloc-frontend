import './ItemPrice.scss';

const ItemPrice = ({ title, totalPrice }) => {
  const deliveryCost = totalPrice < 30000 ? (totalPrice ? 2500 : 0) : 0;

  return (
    <li className="itemPrice">
      <p>{title}</p>
      {title === '상품 금액' && (
        <p>{`+${totalPrice.toLocaleString('en')}원`}</p>
      )}
      {title === '상품 할인' && <p>-0원</p>}
      {title === '포장비' && <p>+0원</p>}
      {title === '부가 쇼핑백' && <p>+0원</p>}
      {title === '배송비' && <p>{`+${deliveryCost.toLocaleString('en')}원`}</p>}
    </li>
  );
};

export default ItemPrice;
