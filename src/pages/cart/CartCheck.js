import './CartCheck.scss';

const CartCheck = () => {
  return (
    <div className="cartCheck">
      <div className="checkBoxWrapper">
        <label htmlFor="test" />
        <input id="test" type="checkbox" />
        <label htmlFor="test">전체선택</label>
      </div>
      <button>전체삭제</button>
    </div>
  );
};

export default CartCheck;
