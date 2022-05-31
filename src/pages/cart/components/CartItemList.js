import { useState, useEffect, useCallback } from 'react';
import CartItem from './CartItem';
import CartControlBar from './CartControlBar';
import './CartItemList.scss';

const CartItemList = ({
  onChangeCost,
  onErrorInput,
  onChangeList,
  onClickBtn,
}) => {
  const [itemList, setItemList] = useState([]);
  const [error, setError] = useState(null);
  const [totalCheckboxisChecked, setTotalCheckboxisChecked] = useState(true);

  const fetchItemsHandler = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch(
        'https://fir-40252-default-rtdb.firebaseio.com/cart.json'
      );
      if (!response.ok) {
        throw new Error('상품을 불러오는 과정에서 문제가 발생했습니다.');
      }

      const data = await response.json();
      setItemList(data);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  async function deleteItemHandler(list) {
    await fetch('https://fir-40252-default-rtdb.firebaseio.com/cart.json', {
      method: 'PUT',
      body: JSON.stringify(list),
    });
  }

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
    deleteItemHandler(
      itemList.filter(obj => {
        return !obj.isChecked;
      })
    );
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

  useEffect(() => {
    fetchItemsHandler();
  }, [fetchItemsHandler]);

  return (
    <div className="cartItemList">
      <CartControlBar
        onChecked={totalCheckboxHandler}
        onClicked={deleteItems}
        checked={totalCheckboxisChecked}
      />
      <ul>
        {error && <p className="errorCartMessage">{error}</p>}
        {!error && !itemList.length && (
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

export default CartItemList;
