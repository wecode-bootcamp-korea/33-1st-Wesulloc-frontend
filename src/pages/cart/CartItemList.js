import CartItem from './CartItem';
import CartCheck from './CartCheck';

const CartItemList = props => {
  const { onChecked } = props;

  return (
    <div className="cartItemList">
      <CartCheck />
      <ul>
        {DUMMY_ITEM_LIST.map(item => {
          return (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              packingState={item.packingState}
              price={item.price}
              onChecked={onChecked}
            />
          );
        })}
      </ul>
    </div>
  );
};

const DUMMY_ITEM_LIST = [
  {
    id: 1,
    name: '영귤섬 아이스티',
    packingState: '포장불가',
    price: 13000,
  },
  {
    id: 2,
    name: '러블리 티 박스',
    packingState: '포장가능',
    price: 20000,
  },
  {
    id: 3,
    name: '그린티 랑드샤 세트',
    packingState: '포장불가',
    price: 36000,
  },
];

export default CartItemList;
