import { useContext } from 'react';
import CartContext from '../../../Context/cartContext';
import './CartControlBar.scss';

const CartControlBar = () => {
  const cartContext = useContext(CartContext);

  const checkboxHandler = event => {
    cartContext.totalCheckboxCheck(event.target.checked);
  };

  const deleteItem = event => {
    event.preventDefault();
    cartContext.deleteItems();
  };

  return (
    <div className="cartCheck">
      <div className="checkBoxWrapper">
        <input
          id="checkAll"
          type="checkbox"
          checked={cartContext.totalCheckboxisChecked}
          onChange={checkboxHandler}
        />
        <label htmlFor="checkAll">
          <div>
            <img src="/images/iconCheckWhite.png" alt="iconCheck" />
          </div>
          전체선택
        </label>
      </div>
      <button className="selectedItemDeleteBtn" onClick={deleteItem}>
        선택 삭제
      </button>
    </div>
  );
};

export default CartControlBar;
