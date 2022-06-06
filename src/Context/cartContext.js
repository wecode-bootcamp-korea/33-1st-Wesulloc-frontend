import React, { useState, useCallback, useEffect } from 'react';

const CartContext = React.createContext({
  itemList: [],
  error: null,
  totalCheckboxisChecked: true,
  totalPrice: 0,
  changeItems: (id, key, value) => {},
  deleteItems: () => {},
  changeError: value => {},
  totalCheckboxCheck: () => {},
  orderItems: (id, value) => {},
});

export const CartContextProvider = props => {
  const { children } = props;

  const [itemList, setItemList] = useState([]);
  const [error, setError] = useState(null);
  const [totalCheckboxisChecked, setTotalCheckboxisChecked] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);

  const changeItems = (id, key, value) => {
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

  const deleteItems = () => {
    setItemList(prevState => {
      return prevState.filter(obj => {
        return !obj.isChecked;
      });
    });
  };

  const changeError = value => {
    setError(value);
  };

  const totalCheckboxCheck = value => {
    setItemList(prevState => {
      return prevState.map(obj => {
        return { ...obj, isChecked: value };
      });
    });
    setTotalCheckboxisChecked(value);
  };

  const getFetchItems = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch('data/cartItemList/cart.json', {});
      if (!response.ok) {
        throw new Error('상품을 불러오는 과정에서 문제가 발생했습니다.');
      }

      const data = await response.json();
      const list = data.map(obj => {
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

  const orderItems = (id, value) => {
    let orderedItemList = [];

    if (id) {
      orderedItemList = itemList.filter(item => {
        return item.id === id;
      });
      alert(`${orderedItemList[0].name} 제품을 주문합니다.`);
      return;
    }

    const checkedItemList = itemList.filter(item => item.isChecked);

    if (itemList.length === 0) {
      setError('nothingSelected');
      return;
    }

    ORDER.forEach(obj => {
      if (value === obj.button) {
        if (obj.button === 'orderSelectedBtn' && checkedItemList.length === 0) {
          setError('nothingSelected');
        } else {
          orderedItemList = obj.isOrderAll
            ? [...itemList]
            : [...checkedItemList];

          alert(obj.message);
        }
      }
    });
  };

  useEffect(() => {
    getFetchItems();
  }, [getFetchItems]);

  useEffect(() => {
    const totalPrice = itemList.reduce((acc, obj) => {
      return (acc += obj.isChecked ? obj.amount * obj.price : 0);
    }, 0);
    setTotalPrice(totalPrice);
  }, [itemList]);

  const cartContext = {
    itemList: itemList,
    error: error,
    totalCheckboxisChecked: totalCheckboxisChecked,
    totalPrice: totalPrice,
    changeItems: changeItems,
    deleteItems: deleteItems,
    changeError: changeError,
    totalCheckboxCheck: totalCheckboxCheck,
    orderItems: orderItems,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContext;

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
