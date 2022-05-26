import Review from './Review';
import WriteReviewArea from './WriteReviewArea';
import './Reviews.scss';

const Reviews = () => {
  let token = true;

  return (
    <div className="reviews">
      <div className="reviewContainer">
        <div className="reviewHeader">
          <p className="headerTitle">고객리뷰</p>
          <p className="headerDescription">
            상품을 직접 구매하여 경험하신 솔직담백한 후기들을 확인해보세요
          </p>
          <div className="scoreAverage">
            <div className="scoreAverageFlex">
              <div className="flexLeft">
                <p className="flexLeftTitle">레드파파야 블랙티 20입</p>
                <p className="flexLefSubTitle">
                  <span>총 20개</span>의 고객후기가 있습니다.
                </p>
              </div>
              <div className="flexRight">
                <p className="flexRightTitle">리뷰평점</p>
                <div>
                  <span className="flexRightScore">💚💚💚💚💚</span>
                  <span className="flexRightNum">4.8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {token ? <WriteReviewArea /> : null}
        <div className="reviewBar">
          <ul className="reviewBarFlex">
            <li className="reviewAll">
              전체리뷰<span>20</span>
            </li>
            <li className="reviewPhoto">
              사진리뷰<span>3</span>
            </li>
          </ul>
        </div>
        <div className="reviewBox">
          <Review />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
