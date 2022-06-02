import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Review from './Review';
import WriteReviewArea from './WriteReviewArea';
import ReviewedStar from './ReviewedStar';
import Pagination from './Pagination';
import './Reviews.scss';

const Reviews = ({ reviewTarget, product }) => {
  const [modal, setModal] = useState(false);
  const [deleteReviewUpdate, setDeleteReviewUpdate] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [totalReviews, setTotalReviews] = useState(0);
  const [averageRate, setAverageRate] = useState(5);
  const [averageStar, setAverageStar] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const [postsPerPage] = useState(5);

  const starNumArray = [0, 1, 2, 3, 4];
  const token = localStorage.getItem('token') || '';
  const navigate = useNavigate();

  useEffect(() => {
    const handleAverageStar = e => {
      const copy = [...averageStar];
      copy.fill(true, 0, Math.round(averageRate));
      copy.fill(false, Math.round(averageRate), 5);
      setAverageStar(copy);
    };
    handleAverageStar();
  }, [averageRate]);

  const location = useLocation();

  useEffect(() => {
    fetch(
      `http://10.58.2.25:8000/products/${product.id}/reviews${
        location.search || `?limit=${postsPerPage}&offset=0`
      }`
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(res => {
        setReviews(res.reviews);
        setTotalReviews(res.totalReviews);
        setAverageRate(res.averageRating);
      });
  }, [modal, deleteReviewUpdate, location.search]);

  const updateOffset = buttonIndex => {
    const limit = postsPerPage;
    const offset = buttonIndex;
    const queryString = `?limit=${limit}&offset=${offset}`;
    navigate(queryString);
  };

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
                <p className="flexLeftTitle">{product.name}</p>
                <p className="flexLefSubTitle">
                  <span>총 {totalReviews}개</span>의 고객후기가 있습니다.
                </p>
              </div>
              <div className="flexRight">
                <p className="flexRightTitle">리뷰평점</p>
                <div>
                  <span className="flexRightScore">
                    {starNumArray.map((el, i) => {
                      return (
                        <ReviewedStar
                          key={i}
                          id={el}
                          reviewedStarState={averageStar}
                        />
                      );
                    })}
                  </span>
                  <span className="flexRightNum">{averageRate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {token && (
          <WriteReviewArea
            modal={modal}
            setModal={setModal}
            product={product}
          />
        )}
        <div className="reviewBar">
          <ul className="reviewBarFlex">
            <li className="reviewAll">
              전체리뷰<span>{totalReviews}</span>
            </li>
            <li className="reviewPhoto">
              사진리뷰<span>0</span>
            </li>
          </ul>
        </div>
        <div className="reviewBox">
          {reviews[0] &&
            reviews.map((review, i) => {
              return (
                <Review
                  key={i}
                  review={review}
                  deleteReviewUpdate={deleteReviewUpdate}
                  setDeleteReviewUpdate={setDeleteReviewUpdate}
                />
              );
            })}
        </div>
        <Pagination
          totalPosts={totalReviews}
          postsPerPage={postsPerPage}
          updateOffset={updateOffset}
        />
      </div>
    </div>
  );
};

export default Reviews;
