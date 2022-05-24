import { useState } from 'react';
import CartItemList from './CartItemList';
import OrderButton from './OrderButton';
import SideBar from './SideBar';
import './Cart.scss';

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const costHandler = value => {
    setTotalPrice(value);
  };

  return (
    <section className="cart">
      <div className="cartPageTitle">
        <h2>장바구니</h2>
      </div>
      <form>
        <section className="orderedItem">
          <CartItemList onChangeCost={costHandler} />
          <div className="buttonWrapper">
            <OrderButton category="orderSelected" />
            <OrderButton category="orderAll" />
          </div>
        </section>
        <SideBar totalPrice={totalPrice} />
      </form>
    </section>
  );
};

export default Cart;
