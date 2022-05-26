import './SideBar.scss';

const SideBar = ({ totalPrice, onClickBtn }) => {
  const deliveryCost = totalPrice < 30000 ? (totalPrice ? 2500 : 0) : 0;

  const orderHandler = event => {
    event.preventDefault();
    onClickBtn(event.target.className);
  };

  const priceHandler = title => {
    switch (title) {
      case '상품 금액':
        return `+${totalPrice.toLocaleString('en')}원`;
      case '상품 할인':
        return '-0원';
      case '포장비':
        return '+0원';
      case '부가 쇼핑백':
        return '+0원';
      case '배송비':
        return `+${deliveryCost.toLocaleString('en')}원`;
      default:
        return;
    }
  };

  return (
    <section className="sidebar">
      <div className="totalAmountOfPrice">
        <ul>
          {PRICE_CATEGORY_LIST.map(ele => {
            return (
              <li key={ele.id} className="itemPrice">
                <p>{ele.title}</p>
                <p>{priceHandler(ele.title)}</p>
              </li>
            );
          })}
        </ul>
        <div className="expectedPrice">
          <p>결제 예상 금액</p>
          <p>
            <span>{(totalPrice + deliveryCost).toLocaleString('en')}</span>
            <span>원</span>
          </p>
        </div>
        <button className="orderSelectedBtn" onClick={orderHandler}>{`${(
          totalPrice + deliveryCost
        ).toLocaleString('en')}원 주문하기`}</button>
      </div>
    </section>
  );
};

const PRICE_CATEGORY_LIST = [
  {
    id: 1,
    title: '상품 금액',
  },
  {
    id: 2,
    title: '상품 할인',
  },
  {
    id: 3,
    title: '포장비',
  },
  {
    id: 4,
    title: '부가 쇼핑백',
  },
  {
    id: 5,
    title: '배송비',
  },
];

export default SideBar;
