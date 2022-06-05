import { useState } from 'react';
import CartItemList from './components/CartItemList';
import OrderButton from './components/OrderButton';
import SideBar from './components/SideBar';
import FreeGift from './components/FreeGift';
import ErrorModal from './components/ErrorModal';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';
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

  const onClickBtn = (id, value) => {
    let orderedItemList = [];

    if (id) {
      orderedItemList = itemList.filter(item => {
        return item.id === id;
      });
      alert(`${orderedItemList[0].name} 제품을 주문합니다.`);
      orderHandler(orderedItemList);
      return;
    }

    const checkedItemList = itemList.filter(item => item.isChecked);

    if (itemList.length === 0) {
      setIsError('nothingSelected');
      return;
    }

    ORDER.forEach(obj => {
      if (value === obj.button) {
        if (obj.button === 'orderSelectedBtn' && checkedItemList.length === 0) {
          setIsError('nothingSelected');
        } else {
          orderedItemList = obj.isOrderAll
            ? [...itemList]
            : [...checkedItemList];

          alert(obj.message);
          orderHandler(orderedItemList);
        }
      }
    });
  };

  async function orderHandler(list) {
    const modifiedList = list.map(ele => {
      return { product_id: ele.id, quantity: ele.amount };
    });
    await fetch('http://10.58.2.25:8000/carts', {
      method: 'POST',
      body: JSON.stringify(modifiedList),
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
  }

  return (
    <>
      {isError && (
        <ErrorModal message={ERROR[isError]} errorHandler={errorHandler} />
      )}
      <Nav />
      <section className="cart">
        <div className="cartPageTitle">
          <div className="cartTitleWrapper">
            <h2>장바구니</h2>
          </div>
        </div>
        <div className="cartPageContent">
          <section className="orderedItem">
            <CartItemList
              onChangeCost={costHandler}
              onErrorInput={errorHandler}
              onChangeList={listHandler}
              onClickBtn={onClickBtn}
            />
            {totalPrice >= 30000 && <FreeGift />}
            <div className="buttonWrapper">
              <OrderButton category="orderSelected" onClickBtn={onClickBtn} />
              <OrderButton category="orderAll" onClickBtn={onClickBtn} />
            </div>
          </section>
          <SideBar totalPrice={totalPrice} onClickBtn={onClickBtn} />
        </div>
      </section>
      <Footer />
    </>
  );
};

const ERROR = {
  inputValueExceeded: '더이상 숫자를 늘릴 수 없습니다.',
  nothingSelected: '선택한 상품이 없습니다.',
};

const ORDER = [
  {
    button: 'orderSelectedBtn',
    message: '선택한 상품을 주문합니다.',
    isOrderAll: false,
  },
  {
    button: 'orderAllBtn',
    message: '전체 상품을 주문합니다.',
    isOrderAll: true,
  },
];

export default Cart;
