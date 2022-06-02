import { useState, useEffect } from 'react';
import './CartItem.scss';

const CartItem = ({
  item,
  onChangeAmount,
  onChangecheck,
  onErrorInput,
  onClickBtn,
}) => {
  const [isBtnValid, setIsBtnValid] = useState(false);

  const { cartId, id, name, price, amount, isChecked, src } = item;

  const amountInputHandler = event => {
    if (event.target.value.length >= 3) {
      onChangeAmount(cartId, 99);
      onErrorInput('inputValueExceeded');
    } else {
      +event.target.value === 0
        ? onChangeAmount(cartId, 1)
        : onChangeAmount(cartId, +event.target.value);
    }
  };

  const amountIncreaseHandler = event => {
    event.preventDefault();
    if (amount === 99) {
      onErrorInput('inputValueExceeded');
    } else {
      onChangeAmount(cartId, amount + 1);
      onChangeAmount();
    }
  };

  const amountDecreaseHandler = event => {
    event.preventDefault();
    onChangeAmount(cartId, amount - 1);
    onChangeAmount();
  };

  useEffect(() => {
    setIsBtnValid(amount > 1);
  }, [amount]);

  const checkboxHandler = () => {
    onChangecheck(id, 'isChecked', !isChecked);
  };

  const orderHandler = event => {
    event.preventDefault();
    onClickBtn(id, null);
  };

  return (
    <li className="cartItem">
      <div className="checkBoxWrapper">
        <input
          id={id}
          type="checkbox"
          checked={isChecked}
          onChange={checkboxHandler}
        />
        <label htmlFor={id}>
          <div>
            <img src="/images/iconCheckWhite.png" alt="iconCheck" />
          </div>
        </label>
      </div>
      <div className="itemInfo">
        <img src={src} alt="product" />
        <div className="itemInfoText">
          <a href="$">{name}</a>
        </div>
      </div>
      <div className="countPrice">
        <div className="countButtonWrapper">
          <button disabled={!isBtnValid} onClick={amountDecreaseHandler}>
            <i className="fa-solid fa-minus" />
          </button>
          <input value={amount} type="number" onChange={amountInputHandler} />
          <button onClick={amountIncreaseHandler}>
            <i className="fa-solid fa-plus" />
          </button>
        </div>
        <p>{`${(price * amount).toLocaleString('en')}원`}</p>
      </div>
      <div className="purchaseButtonWrapper">
        <button onClick={orderHandler}>바로구매</button>
      </div>
    </li>
  );
};

export default CartItem;
