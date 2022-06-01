import { useState, useEffect } from 'react';
import ReviewedStar from './ReviewedStar';
import './Review.scss';

const Review = ({ review, deleteReviewUpdate, setDeleteReviewUpdate }) => {
  let { account, date, rating, content, productId, reviewId } = review;
  let reviewedStarArr = [0, 1, 2, 3, 4];
  let [reviewedStarState, setReviewedStarState] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleReviewedStar = e => {
    let copy = [...reviewedStarState];
    copy.fill(true, 0, rating);
    copy.fill(false, rating, 5);
    setReviewedStarState(copy);
  };

  const deleteReview = () => {
    const token = localStorage.getItem('access_token') || '';
    fetch(`http://10.58.0.93:8000/products/${productId}/reviews/${reviewId}`, {
      headers: {
        Authorization: token,
      },
      method: 'DELETE',
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => {
        if (data.message === 'DELETE_SUCCESS') {
          setDeleteReviewUpdate(!deleteReviewUpdate);
        }
        // setDeleteReviewUpdate(!deleteReviewUpdate);
      });
  };

  useEffect(() => {
    handleReviewedStar();
  }, []);

  return (
    <div className="review">
      <div className="eachReview">
        <div className="eachReviewLeftRight">
          <div className="eachReviewLeft">
            <div className="date">{date}</div>
            <div className="setScore">
              {reviewedStarArr.map((el, i) => {
                return (
                  <ReviewedStar
                    key={i}
                    id={el}
                    reviewedStarState={reviewedStarState}
                  />
                );
              })}
            </div>
          </div>
          <div className="eachReviewRight">
            <div>
              <span className="buyer">구매자</span>
              <span className="nickname">{account}</span>
            </div>
            <div className="comment">{content}</div>
          </div>
        </div>
        <button className="deleteReviewBtn" onClick={deleteReview}>
          삭제
        </button>
      </div>
    </div>
  );
};

export default Review;
