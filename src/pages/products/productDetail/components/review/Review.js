import { useState, useEffect } from 'react';
import ReviewedStar from './ReviewedStar';
import './Review.scss';

const Review = ({ review }) => {
  let { name, date, rating, content } = review;
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

  useEffect(() => {
    handleReviewedStar();
  }, []);

  return (
    <div className="review">
      <div className="eachReview">
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
            <span className="nickname">{name}</span>
          </div>
          <div className="comment">{content}</div>
          {/* <div className="reviewPicCollect">
            <div className="reviewPic">
              <img src="/images/drink.jpg" alt="img" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Review;
