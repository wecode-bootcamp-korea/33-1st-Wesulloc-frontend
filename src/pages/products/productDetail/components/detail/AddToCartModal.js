import './AddToCartModal.scss';

const AddToCart = ({ setCartModal, amount }) => {
  const addToCart = () => {
    let token = localStorage.getItem('token') || '';
    fetch('url주소', {
      headers: {
        Authorization: token,
      },
      method: 'POST',
      body: JSON.stringify({
        productId: 0,
        amount: amount,
      }),
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(() => {
        setCartModal(false);
      });
  };
  return (
    <div className="addToCartModal">
      <div className="cartModalContainer">
        <p className="cartTitle">장바구니에 담기</p>
        <div className="buttonArea">
          <button
            className="cancel"
            onClick={() => {
              setCartModal(false);
            }}
          >
            취소
          </button>
          <button className="confirm" onClick={addToCart}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
