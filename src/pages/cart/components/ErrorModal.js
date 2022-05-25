import Card from '../../../components/UI/Card';

import './ErrorModal.scss';

const ErrorModal = ({ message, errorHandler }) => {
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
