import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddToCartModal.scss';

const AddToCartModal = ({ setCartModal, amount, productId }) => {
  const navigate = useNavigate();
  const addToCart = () => {
    let token = localStorage.getItem('token') || '';
    fetch('http://10.58.2.25:8000/carts', {
      headers: {
        Authorization: token,
      },
      method: 'POST',
      body: JSON.stringify({
        product_id: productId,
        quantity: amount,
      }),
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => {
        if (data) {
          setCartModal(false);
          navigate('/cart');
        }
      });
  };

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      
      overflow: hidden;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

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

export default AddToCartModal;
