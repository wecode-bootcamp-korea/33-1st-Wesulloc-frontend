import './WriteReviewArea.scss';
import ReviewModal from './ReviewModal';
import { useState } from 'react';

const WriteReviewArea = () => {
  let [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };
  return (
    <div className="writeReviewArea">
      {modal ? <ReviewModal setModal={setModal} /> : null}
      <div className="container">
        <p className="productName">
          <span>레드파파야 블랙티</span> 어떠셨나요?
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
