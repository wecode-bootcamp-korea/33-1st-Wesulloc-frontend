import { useState, useEffect } from 'react';
import './CartItem.scss';

const CartItem = ({ item, onChangeProps, onErrorInput, onClickBtn }) => {
  const [isBtnValid, setIsBtnValid] = useState(false);

  const { id, name, packingState, price, amount, isChecked } = item;

  const amountInputHandler = event => {
    if (event.target.value.length >= 3) {
      onChangeProps(id, 'amount', 99);
      onErrorInput('inputValueExceeded');
    } else {
      +event.target.value === 0
        ? onChangeProps(id, 'amount', 1)
        : onChangeProps(id, 'amount', +event.target.value);
    }
  };

  const amountIncreaseHandler = event => {
    event.preventDefault();
    if (amount === 99) {
      onChangeProps(id, 'amount', 99);
      onErrorInput('inputValueExceeded');
    } else {
      onChangeProps(id, 'amount', amount + 1);
    }
  };

  const amountDecreaseHandler = event => {
    event.preventDefault();
    onChangeProps(id, 'amount', amount - 1);
  };

  useEffect(() => {
    setIsBtnValid(amount > 1);
  }, [amount]);

  const checkboxHandler = () => {
    onChangeProps(id, 'isChecked', !isChecked);
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
        <img src="" alt="product" />
        <div className="itemInfoText">
          <a href="$">{name}</a>
          <p>{packingState}</p>
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
