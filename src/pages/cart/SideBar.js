import { useState, useEffect } from 'react';
import ItemPrice from './ItemPrice';
import './SideBar.scss';

const SideBar = props => {
  const { totalPrice } = props;

  const [deliveryCost, setDeliveryCost] = useState(0);

  useEffect(() => {
    setDeliveryCost(totalPrice < 30000 ? (totalPrice ? 3000 : 0) : 0);
  }, [totalPrice]);

  const PRICE_CATEGORY_LIST = [
    {
      id: 1,
      title: '상품 금액',
      price: `+${totalPrice.toLocaleString('en')}`,
    },
    {
      id: 2,
      title: '상품 할인',
      price: '-0',
    },
    {
      id: 3,
      title: '포장비',
      price: '+0',
    },
    {
      id: 4,
      title: '부가 쇼핑백',
      price: '+0',
    },
    {
      id: 5,
      title: '배송비',
      price: `+${deliveryCost.toLocaleString('en')}`,
    },
  ];

  return (
    <section className="sidebar">
      <div className="totalAmountOfPrice">
        <ul>
          {PRICE_CATEGORY_LIST.map(ele => (
            <ItemPrice key={ele.id} title={ele.title} price={ele.price} />
          ))}
        </ul>
        <div className="expectedPrice">
          <p>결제 예상 금액</p>
          <p>
            <span>{(totalPrice + deliveryCost).toLocaleString('en')}</span>
            <span>원</span>
          </p>
        </div>
        <button>{`${(totalPrice + deliveryCost).toLocaleString(
          'en'
        )}원 주문하기`}</button>
      </div>
    </section>
  );
};

export default SideBar;
