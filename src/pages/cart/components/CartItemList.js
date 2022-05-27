import { useState, useEffect } from 'react';
import CartItem from './CartItem';
import CartControlBar from './CartControlBar';
import './CartItemList.scss';

const CartItemList = ({
  onChangeCost,
  onErrorInput,
  onChangeList,
  onClickBtn,
}) => {
  const [itemList, setItemList] = useState(
    DUMMY_ITEM_LIST.map(obj => {
      return { ...obj, isChecked: true };
    })
  );
  const [totalCheckboxisChecked, setTotalCheckboxisChecked] = useState(true);

  const totalCheckboxHandler = value => {
    setItemList(prevState => {
      return prevState.map(obj => {
        return { ...obj, isChecked: value };
      });
    });
    setTotalCheckboxisChecked(value);
  };

  const deleteItems = () => {
    setItemList(prevState => {
      return prevState.filter(obj => {
        return !obj.isChecked;
      });
    });
  };

  const onChangeProps = (id, key, value) => {
    setItemList(prevState => {
      return prevState.map(obj => {
        if (obj.id === id) {
          return { ...obj, [key]: value };
        } else {
          return { ...obj };
        }
      });
    });
  };

  useEffect(() => {
    const totalPrice = itemList.reduce((acc, obj) => {
      return (acc += obj.isChecked ? obj.amount * obj.price : 0);
    }, 0);
    onChangeCost(totalPrice);
    onChangeList(itemList);
  }, [itemList, onChangeCost, onChangeList]);

  return (
    <div className="cartItemList">
      <CartControlBar
        onChecked={totalCheckboxHandler}
        onClicked={deleteItems}
        checked={totalCheckboxisChecked}
      />
      <ul>
        {!itemList.length && (
          <p className="emptyCartMessage">장바구니에 담긴 상품이 없습니다.</p>
        )}
        {itemList.map(item => {
          return (
            <CartItem
              key={item.id}
              item={item}
              onChangeProps={onChangeProps}
              onErrorInput={onErrorInput}
              onClickBtn={onClickBtn}
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
    amount: 1,
  },
  {
    id: 2,
    name: '러블리 티 박스',
    packingState: '포장가능',
    price: 20000,
    amount: 1,
  },
  {
    id: 3,
    name: '그린티 랑드샤 세트',
    packingState: '포장불가',
    price: 36000,
    amount: 1,
  },
];

export default CartItemList;
