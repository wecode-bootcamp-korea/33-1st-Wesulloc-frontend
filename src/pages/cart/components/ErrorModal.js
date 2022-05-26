import { useEffect } from 'react';
import Card from '../../../components/UI/Card';

import './ErrorModal.scss';

const ErrorModal = ({ message, errorHandler }) => {
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
          <p>{message}</p>
          <button
            onClick={() => {
              errorHandler(null);
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
