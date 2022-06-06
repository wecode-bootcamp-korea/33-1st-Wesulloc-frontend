import { useEffect, useContext } from 'react';
import Card from '../../../components/UI/Card';
import CartContext from '../../../Context/cartContext';

import './ErrorModal.scss';

const ErrorModal = () => {
  const cartContext = useContext(CartContext);

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      `;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <div className="backdrop">
      <Card className="errorModal">
        <div>
          <p>{ERROR[cartContext.error]}</p>
          <button
            onClick={() => {
              cartContext.changeError(null);
            }}
          >
            확인
          </button>
        </div>
      </Card>
    </div>
  );
};

export default ErrorModal;

const ERROR = {
  inputValueExceeded: '더이상 숫자를 늘릴 수 없습니다.',
  nothingSelected: '선택한 상품이 없습니다.',
};
