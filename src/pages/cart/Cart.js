import { useContext } from 'react';
import CartItemList from './components/CartItemList';
import OrderButton from './components/OrderButton';
import SideBar from './components/SideBar';
import FreeGift from './components/FreeGift';
import ErrorModal from './components/ErrorModal';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';
import CartContext from '../../Context/cartContext';
import './Cart.scss';

const Cart = () => {
  const cartContext = useContext(CartContext);

  return (
    <>
      {cartContext.error && <ErrorModal />}
      <Nav />
      <section className="cart">
        <div className="cartPageTitle">
          <div className="cartTitleWrapper">
            <h2>장바구니</h2>
          </div>
        </div>
        <div className="cartPageContent">
          <section className="orderedItem">
            <CartItemList />
            {cartContext.totalPrice >= 30000 && <FreeGift />}
            <div className="buttonWrapper">
              <OrderButton category="orderSelected" />
              <OrderButton category="orderAll" />
            </div>
          </section>
          <SideBar />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cart;
