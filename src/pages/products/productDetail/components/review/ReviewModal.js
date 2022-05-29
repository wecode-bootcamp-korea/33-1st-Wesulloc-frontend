import { useEffect, useState } from 'react';
import Star from './Star';
import './ReviewModal.scss';

const ReviewModal = ({ setModal }) => {
  const [star, setStar] = useState([false, false, false, false, false]);
  const [input, setInput] = useState('');
  const [starNum, setStarNum] = useState(0);

  const reviewBtnIsValid = starNum > 0 && input.length > 0;

  const closeBtn = () => {
    setModal(false);
  };

  let starArr = [0, 1, 2, 3, 4];

  const handleStarClicked = e => {
    let id = parseInt(e.target.id);
    let clicked = [...star];
    clicked.fill(true, 0, id + 1);
    clicked.fill(false, id + 1, 5);
    setStar(clicked);
    setStarNum(id + 1);
  };

  // 리뷰 등록 버튼을 눌렀을 때 리뷰정보 보내주고, star의 state, starNum state 초기화
  const postReview = () => {
    let token = localStorage.getItem('token') || '';
    fetch('url주소', {
      headers: {
        Authorization: token,
      },
      method: 'POST',
      body: JSON.stringify({
        productId: 0,
        rating: starNum,
        comment: input,
      }),
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(res => {
        setStar([false, false, false, false, false]);
        setStarNum(0);
        setModal(false);
        console.log('하하하');
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
    <div className="reviewModal">
      <div className="modalContainer">
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
        <textarea
          placeholder="상품후기를 입력해 주세요"
          className="textArea"
          onChange={e => {
            setInput(e.target.value);
          }}
        />
        <button
          className="postBtn"
          onClick={() => {
            postReview();
          }}
          disabled={!reviewBtnIsValid}
        >
          등록
        </button>
      </div>
    </div>
  );
};

export default ReviewModal;
