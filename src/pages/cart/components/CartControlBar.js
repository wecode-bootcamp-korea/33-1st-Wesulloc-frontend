import './CartControlBar.scss';

const CartControlBar = ({ onChecked, onClicked, checked }) => {
  const checkboxHandler = event => {
    onChecked(event.target.checked);
  };

  const deleteItem = event => {
    event.preventDefault();
    onClicked();
  };

  return (
    <div className="cartCheck">
      <div className="checkBoxWrapper">
        <input
          id="checkAll"
          type="checkbox"
          checked={checked}
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
