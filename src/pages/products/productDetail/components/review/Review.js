import './Review.scss';

const Review = () => {
  return (
    <div className="review">
      <div className="eachReview">
        <div className="eachReviewLeft">
          <div className="date">2022.05.03</div>
          <div className="setScore">★★★★★</div>
        </div>
        <div className="eachReviewRight">
          <div>
            <span className="buyer">구매자</span>
            <span className="nickname">Chasarang</span>
          </div>
          <div className="comment">
            역시 위설록..... 차갑게 먹어도 맛있고 뜨겁게 먹어도 굳굳ddddddddddd
          </div>
          <div className="reviewPicCollect">
            <div className="reviewPic">
              <img src="https://www.osulloc.com/upload/kr/ko/adminImage/CV/PI/20191213161646687QE.png?quality=80" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
