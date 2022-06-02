import { useEffect, useState } from 'react';
import Star from './Star';
import './ReviewModal.scss';

const ReviewModal = ({ setModal, product }) => {
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

  const postReview = () => {
    let token = localStorage.getItem('token') || '';
    fetch(`http://10.58.2.25:8000/products/${product.id}/reviews`, {
      headers: {
        Authorization: token,
      },
      method: 'POST',
      body: JSON.stringify({
        rating: starNum,
        content: input,
      }),
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(res => {
        if (res) {
          setStar([false, false, false, false, false]);
          setStarNum(0);
          setInput('');
          setModal(false);
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
    <div className="reviewModal">
      <div className="modalContainer">
        <div className="closeBtn" onClick={closeBtn}>
          <i className="fa-solid fa-xmark" />
        </div>
        <p className="title">후기작성</p>
        <div className="imageTitle">
          <p>{product.name}</p>
          <div className="imgBox">
            <img src={product.img} alt="img" />
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
          value={input}
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
