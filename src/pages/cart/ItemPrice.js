import './ItemPrice.scss';

const ItemPrice = props => {
  const { title, price } = props;

  const deliveryCost = price >= 30000 ? <p>0원</p> : <p>3000원</p>;

  return (
    <li className="itemPrice">
      <p>{title}</p>
      {title === '배송비' ? deliveryCost : <p>{`${price}원`}</p>}
    </li>
  );
};

export default ItemPrice;
