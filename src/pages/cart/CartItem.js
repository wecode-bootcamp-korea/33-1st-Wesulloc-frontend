import { useState, useEffect } from 'react';
import './CartItem.scss';

const CartItem = ({ item, onChangeProps, onErrorInput, onClickBtn }) => {
  const [isBtnValid, setIsBtnValid] = useState(false);

  const amountInputHandler = event => {
    if (event.target.value.length >= 3) {
      onChangeProps(item.id, 'amount', 99);
      onErrorInput('inputValueExceeded');
    } else {
      +event.target.value === 0
        ? onChangeProps(item.id, 'amount', 1)
        : onChangeProps(item.id, 'amount', +event.target.value);
    }
  };

  const amountIncreaseHandler = event => {
    event.preventDefault();
    if (item.amount === 99) {
      onChangeProps(item.id, 'amount', 99);
      onErrorInput('inputValueExceeded');
    } else {
      onChangeProps(item.id, 'amount', item.amount + 1);
    }
  };

  const amountDecreaseHandler = event => {
    event.preventDefault();
    onChangeProps(item.id, 'amount', item.amount - 1);
  };

  useEffect(() => {
    setIsBtnValid(item.amount > 1);
  }, [item.amount]);

  const checkboxHandler = () => {
    onChangeProps(item.id, 'isChecked', !item.isChecked);
  };

  const orderHandler = event => {
    event.preventDefault();
    onClickBtn(item.id, null);
  };

  return (
    <li className="cartItem">
      <div className="checkBoxWrapper">
        <input
          id={item.id}
          type="checkbox"
          checked={item.isChecked}
          onChange={checkboxHandler}
        />
        <label htmlFor={item.id}>
          <div />
        </label>
      </div>
      <div className="itemInfo">
        <img
          src="https://www.osulloc.com/upload/kr/ko/adminImage/HB/XA/304_20211026141423508CU.png?quality=80"
          alt="product"
        />
        <div className="itemInfoText">
          <a href="$">{item.name}</a>
          <p>{item.packingState}</p>
        </div>
      </div>
      <div className="countPrice">
        <div className="countButtonWrapper">
          <button disabled={!isBtnValid} onClick={amountDecreaseHandler}>
            <i className="fa-solid fa-minus" />
          </button>
          <input
            value={item.amount}
            type="number"
            onChange={amountInputHandler}
          />
          <button onClick={amountIncreaseHandler}>
            <i className="fa-solid fa-plus" />
          </button>
        </div>
        <p>{`${(item.price * item.amount).toLocaleString('en')}원`}</p>
      </div>
      <div className="purchaseButtonWrapper">
        <button onClick={orderHandler}>바로구매</button>
      </div>
    </li>
  );
};

export default CartItem;
