import { useState, useEffect } from 'react';
import './CartItem.scss';

const CartItem = props => {
  const { id, name, packingState, price, onChecked } = props;
  const [eachItemPrice, setEachItemPrice] = useState(price);
  const [qtyOfItems, setQtyOfItems] = useState(1);
  const [isNotValid, setIsNotValid] = useState(true);
  const [isCheckedItem, setIsCheckedItem] = useState(true);

  // 체크 박스 체크 시 isCheckedItem state 값을 변화 시킴
  const checkboxHandler = event => {
    setIsCheckedItem(event.target.checked);
  };

  // +, - 버튼 클릭시 제품 수량 및 가격을 변동시킴
  const qtyIncrease = event => {
    event.preventDefault();
    setQtyOfItems(prevState => prevState + 1);
    setEachItemPrice(prevState => prevState + price);
  };

  const qtyDecrease = event => {
    event.preventDefault();
    setQtyOfItems(prevState => prevState - 1);
    setEachItemPrice(prevState => prevState - price);
  };

  // 직접 제품 개수를 입력 시 개수를 변동시킴
  const qtyInputHandler = event => {
    setQtyOfItems(+event.target.value);
    setEachItemPrice(price * event.target.value);
  };

  // 아이템 체크 여부와 금액이 바뀔 때 총 상품 금액을 변동시키는 함수를 호출
  useEffect(() => {
    if (isCheckedItem) {
      onChecked(eachItemPrice);
    }
  }, [onChecked, isCheckedItem, eachItemPrice]);

  useEffect(() => {
    setIsNotValid(qtyOfItems <= 1);
  }, [qtyOfItems]);

  return (
    <li className="cartItem">
      <div className="checkBoxWrapper">
        <label htmlFor={id} />
        <input
          id={id}
          type="checkbox"
          checked={isCheckedItem}
          onChange={checkboxHandler}
        />
      </div>
      <div className="itemInfo">
        <img
          src="https://www.osulloc.com/upload/kr/ko/adminImage/HB/XA/304_20211026141423508CU.png?quality=80"
          alt="product"
        />
        <div className="itemInfoText">
          <a href="$">{name}</a>
          <p>{packingState}</p>
        </div>
      </div>
      <div className="countPrice">
        <div className="countButtonWrapper">
          <button disabled={isNotValid} onClick={qtyDecrease}>
            <i className="fa-solid fa-minus" />
          </button>
          <input value={qtyOfItems} type="number" onChange={qtyInputHandler} />
          <button onClick={qtyIncrease}>
            <i className="fa-solid fa-plus" />
          </button>
        </div>
        <p>{`${eachItemPrice}원`}</p>
      </div>
      <div className="purchaseButtonWrapper">
        <button>바로구매</button>
      </div>
    </li>
  );
};

export default CartItem;
