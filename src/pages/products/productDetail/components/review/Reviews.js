import { useEffect, useState } from 'react';
import Review from './Review';
import WriteReviewArea from './WriteReviewArea';
import './Reviews.scss';

const Reviews = ({ reviewTarget }) => {
  let [modal, setModal] = useState(false);
  let [reviews, setReviews] = useState([]);
  let token = true; // localStorage.getItem('token')

  useEffect(() => {
    fetch('/data/productDetail/review.json')
      .then(res => res.json())
      .then(res => {
        setReviews(res);
      });
  }, [modal]);

  return (
    <div className="reviews">
      <div className="reviewContainer">
        <div className="reviewHeader" ref={reviewTarget}>
          <p className="headerTitle">고객리뷰</p>
          <p className="headerDescription">
            상품을 직접 구매하여 경험하신 솔직담백한 후기들을 확인해보세요
          </p>
          <div className="scoreAverage">
            <div className="scoreAverageFlex">
              <div className="flexLeft">
                <p className="flexLeftTitle">아이스티</p>
                <p className="flexLefSubTitle">
                  <span>총 {reviews.length}개</span>의 고객후기가 있습니다.
                </p>
              </div>
              {/* <div className="flexRight">
                <p className="flexRightTitle">리뷰평점</p>
                <div>
                  <span className="flexRightScore">💚💚💚💚💚</span>
                  <span className="flexRightNum">4.8</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {token && <WriteReviewArea modal={modal} setModal={setModal} />}
        <div className="reviewBar">
          <ul className="reviewBarFlex">
            <li className="reviewAll">
              전체리뷰<span>{reviews.length}</span>
            </li>
            <li className="reviewPhoto">
              사진리뷰<span>0</span>
            </li>
          </ul>
        </div>
        <div className="reviewBox">
          {reviews.map((review, i) => {
            return <Review key={i} review={review} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
