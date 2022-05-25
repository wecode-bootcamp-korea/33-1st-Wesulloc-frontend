import { useState } from 'react';
import CartItemList from './CartItemList';
import OrderButton from './OrderButton';
import SideBar from './SideBar';
import FreeGift from './FreeGift';
import ErrorModal from './components/ErrorModal';
import './Cart.scss';

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [isError, setIsError] = useState(null);
  const [itemList, setItemList] = useState([]);

  const costHandler = value => {
    setTotalPrice(value);
  };

  const errorHandler = value => {
    setIsError(value);
  };

  const listHandler = list => {
    setItemList(list);
  };

  const onClickBtn = value => {
    const orderedList = itemList.filter(ele => ele.isChecked);

    if (value === 'orderSelectedBtn') {
      if (itemList.length === 0 || orderedList.length === 0) {
        setIsError('nothingSelected');
      } else {
        alert('선택한 상품을 주문합니다.');
      }
    } else if (value === 'orderAllBtn') {
      if (itemList.length === 0) {
        setIsError('nothingSelected');
      } else {
        alert('전체 상품을 주문합니다.');
      }
    }
  };

  return (
    <>
      {isError === 'inputValueExceeded' && (
        <ErrorModal
          message="더이상 숫자를 늘릴 수 없습니다."
          errorHandler={errorHandler}
        />
      )}
      {isError === 'nothingSelected' && (
        <ErrorModal
          message="선택한 상품이 없습니다."
          errorHandler={errorHandler}
        />
      )}
      <section className="cart">
        <div className="cartPageTitle">
          <h2>장바구니</h2>
        </div>
        <form>
          <section className="orderedItem">
            <CartItemList
              onChangeCost={costHandler}
              onErrorInput={errorHandler}
              onChangeList={listHandler}
            />
            {totalPrice >= 30000 && <FreeGift />}
            <div className="buttonWrapper">
              <OrderButton category="orderSelected" onClickBtn={onClickBtn} />
              <OrderButton category="orderAll" onClickBtn={onClickBtn} />
            </div>
          </section>
          <SideBar totalPrice={totalPrice} onClickBtn={onClickBtn} />
        </form>
      </section>
    </>
  );
};

export default Cart;
