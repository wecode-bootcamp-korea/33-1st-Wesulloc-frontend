import ReviewModal from './ReviewModal';
import './WriteReviewArea.scss';

const WriteReviewArea = ({ modal, setModal, product }) => {
  const showModal = () => {
    setModal(true);
  };
  return (
    <div className="writeReviewArea">
      {modal && <ReviewModal setModal={setModal} product={product} />}
      <div className="container">
        <p className="productName">
          <span>{product.name}</span> 어떠셨나요?
        </p>
        <button className="reviewBtn" onClick={showModal}>
          <i className="fa-solid fa-pen-to-square" />
          <span>상품리뷰 작성하기</span>
        </button>
      </div>
    </div>
  );
};

export default WriteReviewArea;
