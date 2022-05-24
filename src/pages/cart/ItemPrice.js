import './ItemPrice.scss';

const ItemPrice = props => {
  const { title, price } = props;

  return (
    <li className="itemPrice">
      <p>{title}</p>
      <p>{`${price}원`}</p>
    </li>
  );
};

export default ItemPrice;
