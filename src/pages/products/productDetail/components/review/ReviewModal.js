import { useEffect, useState } from 'react';
import Star from './Star';
import './ReviewModal.scss';

const ReviewModal = ({ setModal }) => {
  const closeBtn = () => {
    setModal(false);
  };

  const [star, setStar] = useState([false, false, false, false, false]);

  let starArr = [0, 1, 2, 3, 4];

  const handleStarClicked = e => {
    let id = parseInt(e.target.id);
    let clicked = [...star];
    clicked.fill(true, 0, id + 1);
    clicked.fill(false, id + 1, 5);
    setStar(clicked);
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
    <div className="reviewModal">
      <div className="container">
        <div className="closeBtn" onClick={closeBtn}>
          <i className="fa-solid fa-xmark" />
        </div>
        <p className="title">후기작성</p>
        <div className="imageTitle">
          <p>레드파파야 블랙티</p>
          <div className="imgBox">
            <img src="/images/drink.jpg" alt="img" />
          </div>
        </div>
        <div className="starScoreArea">
          {starArr.map((el, i) => {
            return (
              <Star
                key={i}
                id={el}
                handleStarClicked={handleStarClicked}
                star={star}
              />
            );
          })}
        </div>
        <p className="scoreWriting">평점을 입력해 주세요</p>
        <textarea placeholder="상품후기를 입력해 주세요" className="textArea" />
        <button className="postBtn">등록</button>
      </div>
    </div>
  );
};

export default ReviewModal;
