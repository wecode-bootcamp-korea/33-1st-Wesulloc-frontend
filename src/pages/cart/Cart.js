import { useState } from 'react';
import CartItemList from './CartItemList';
import ItemPrice from './ItemPrice';
import OrderButton from './OrderButton';
import './Cart.scss';

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  // 배송비 state 추가 필요

  const totalPriceHandler = price => {
    setTotalPrice(price);
  };

  return (
    <section className="cart">
      <div className="cartPageTitle">
        <h2>장바구니</h2>
      </div>
      <form>
        <section className="orderedItem">
          <CartItemList onChecked={totalPriceHandler} />
          <div className="buttonWrapper">
            <OrderButton category="orderSelected" />
            <OrderButton category="orderAll" />
          </div>
        </section>
        <section className="sidebar">
          <div className="orderedPrice">
            <ul>
              <ItemPrice title="상품 금액" price={totalPrice} />
              <ItemPrice title="상품 할인" price="-0" />
              <ItemPrice title="포장비" price="0" />
              <ItemPrice title="부가 쇼핑백" price="0" />
              <ItemPrice title="배송비" price={totalPrice} />
            </ul>
            <div className="totalExpectedPrice">
              <p>결제 예상 금액</p>
              <p>
                <span>{totalPrice}</span>
                <span>원</span>
              </p>
            </div>
            <button>주문하기</button>
          </div>
        </section>
      </form>
    </section>
  );
};

export default Cart;
