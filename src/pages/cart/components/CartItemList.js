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

  const getFetchItems = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch('http://10.58.2.25:8000/carts', {
        headers: {
          Authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ODN9.pgdnKZESQ3f1OdGWYZ4KHpmNjb0vwYJDhxYHTEbkONY',
        },
      });
      if (!response.ok) {
        throw new Error('상품을 불러오는 과정에서 문제가 발생했습니다.');
      }

      const data = await response.json();
      const list = data.results.map(obj => {
        return {
          cartId: obj.cart_id,
          id: obj.product_id,
          name: obj.product_name,
          price: +obj.price,
          amount: +obj.quantity,
          src: obj.product_img,
          isChecked: true,
        };
      });

      setItemList(list);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  async function patchAmount(cartId, amount) {
    const response = await fetch(`http://10.58.2.25:8000/carts/${cartId}`, {
      method: 'PATCH',
      body: JSON.stringify({ quantity: amount }),
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ODN9.pgdnKZESQ3f1OdGWYZ4KHpmNjb0vwYJDhxYHTEbkONY',
      },
    });

    const data = await response.json();

    if (data.message === 'SUCCESS') {
      const response = await fetch(`http://10.58.2.25:8000/carts`, {
        headers: {
          Authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ODN9.pgdnKZESQ3f1OdGWYZ4KHpmNjb0vwYJDhxYHTEbkONY',
        },
      });

      const data = await response.json();
      const patcheditem = data.results
        .map(obj => {
          return {
            cartId: obj.cart_id,
            id: obj.product_id,
            name: obj.product_name,
            price: +obj.price,
            amount: +obj.quantity,
            src: obj.product_img,
            isChecked: true,
          };
        })
        .filter(obj => {
          return obj.cartId === cartId;
        });

      setItemList(prevState => {
        return prevState.map(obj => {
          if (obj.cartId === cartId) {
            return patcheditem[0];
          } else {
            return obj;
          }
        });
      });
    }
  }

  async function deleteFetchItem(list) {
    const queryDeleteCartId = list.map(ele => {
      return ele.cartId;
    });
    const response = await fetch(
      `http://10.58.2.25:8000/carts?cart_id=${queryDeleteCartId.join(
        '&cart_id='
      )}`,
      {
        method: 'DELETE',
        headers: {
          Authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ODN9.pgdnKZESQ3f1OdGWYZ4KHpmNjb0vwYJDhxYHTEbkONY',
        },
      }
    );

    const data = await response.json();

    if (data.message === 'SUCCESS') {
      const response = await fetch('http://10.58.2.25:8000/carts', {
        headers: {
          Authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ODN9.pgdnKZESQ3f1OdGWYZ4KHpmNjb0vwYJDhxYHTEbkONY',
        },
      });

      const data = await response.json();
      const filteredlist = data.results
        .filter(ele => {
          return !queryDeleteCartId.includes(ele.cart_id);
        })
        .map(obj => {
          return {
            cartId: obj.cart_id,
            id: obj.product_id,
            name: obj.product_name,
            price: +obj.price,
            amount: +obj.quantity,
            src: obj.product_img,
            isChecked: true,
          };
        });

      setItemList(filteredlist);
    }
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
    const deleteItemList = itemList.filter(obj => {
      return obj.isChecked;
    });

    deleteFetchItem(deleteItemList);
  };

  const onChangecheck = (id, key, value) => {
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
    getFetchItems();
  }, [getFetchItems]);

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
              onChangecheck={onChangecheck}
              onChangeAmount={patchAmount}
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
