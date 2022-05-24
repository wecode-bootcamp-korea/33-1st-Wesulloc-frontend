import './ProductDetail.scss';

const ProductDetail = () => {
  return (
    <div className="productDetail">
      <div className="detailContainer">
        <div className="detailFlex">
          <div className="detailLeft">
            <div className="itemWrapper">
              <div className="itemImg">
                <img src="https://www.osulloc.com/upload/kr/ko/adminImage/CV/PI/20191213161646687QE.png?quality=80" />
              </div>
              <ul className="customerBenefit">
                <li>
                  <i className="fa-solid fa-coins" />
                  <span>뷰티포인트 적립</span>
                </li>
                <li>
                  <i className="fa-solid fa-leaf" />
                  <span>찻잎 230P 적립</span>
                </li>
                <li>
                  <i className="fa-solid fa-truck" />
                  <span>3만원 이상 무료배송</span>
                </li>
                <li>
                  <i className="fa-solid fa-gift" />
                  <span>포장불가</span>
                </li>
              </ul>
            </div>
            <div className="reviewScoreContainer">
              <div className="scoreBoard">
                <span className="scoreBoardTitle">리뷰 평점</span>
                <span className="scoreNum">4.8</span>
                <span className="score">💚💚💚💚💚</span>
              </div>
              <span className="goToReview">REVIEW 10</span>
            </div>
          </div>
          <div className="detailRight">
            <ul className="detailCategory">
              <li>티제품</li>
              <i className="fa-solid fa-angle-right" />
              <li>블렌드티</li>
            </ul>
            <p className="detailRightTitle">레드파파야 블랙티 20입</p>
            <p className="detailRightDescription">
              붉은 장미와 달콤한 파파야가 곁들여진 화려한 풍미의 홍차를 피라미드
              티백으로간편하게, 합리적인 가격으로 즐겨보세요
            </p>
            <div className="detailRightUrlPrice">
              <ul className="urlBox">
                <li className="url"> URL</li>
                <li>
                  <i className="fa-brands fa-facebook-f" />
                </li>
                <li>
                  <i class="fa-brands fa-instagram"></i>
                </li>
                <li>
                  <i className="fa-regular fa-heart" />
                </li>

                {/* <i className="fa-solid fa-heart" /> */}
              </ul>
              <div className="priceBox">
                23,000<span>원</span>
              </div>
            </div>
            <div className="selectItem">
              <div className="itemQuantityContainer">
                <p>구매수량</p>
                <div className="quantityBox">
                  <button className="subtractBtn">-</button>
                  <span>1</span>
                  <button className="addBtn">+</button>
                </div>
              </div>
              <div className="itemPackage">포장불가</div>
            </div>
            <div className="totalPrice">
              <span className="totalPriceTitle">상품금액 합계</span>
              <span className="totalPriceNum">
                <strong>23,000</strong>원
              </span>
            </div>
            <div className="paymentBtnArea">
              <div className="paymentBtnContainer">
                {/* <button className="subscribeBtn"></button> */}
                <button className="presentBtn">선물하기</button>
                <button className="cartBtn">장바구니</button>
                <button className="buyNowBtn">바로구매</button>
              </div>
            </div>
            <div className="subscribeBox">
              <span className="subscribeTitle">다다일상 정기배송이란?</span>
              <div className="subscribeCheckArea">
                <input type="checkbox" />
                <span>다다일상정기배송</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sortMenu">
        <ul>
          <li>상품추천</li>
          <li>고객리뷰</li>
          <li>상품고시정보</li>
        </ul>
      </div>

      <div className="recommendContainer">
        <div className="recommendBox">
          <p className="title">이런 상품은 어떠세요?</p>
          <p className="subTitle">카테고리 BEST</p>
          <div className="sliderArea">
            <button className="recommendLeftBtn">
              <i className="fa-solid fa-angle-left" />
            </button>
            <button className="recommendRightBtn">
              <i className="fa-solid fa-angle-right" />
            </button>
            <div className="sliderContainer">
              <div className="sliderItem">
                <div className="sliderImgBox">
                  <img src="https://www.osulloc.com/upload/kr/ko/adminImage/BM/BK/304_20201007123353062WR.png?quality=80" />
                </div>
                <div className="sliderTxt">
                  <p>트로피컬 블랙티</p>
                  <p className="sliderPrice">9500원</p>
                </div>
              </div>
              <div className="sliderItem">
                <div className="sliderImgBox">
                  <img src="https://www.osulloc.com/upload/kr/ko/adminImage/BM/BK/304_20201007123353062WR.png?quality=80" />
                </div>
                <div className="sliderTxt">
                  <p>트로피컬 블랙티</p>
                  <p className="sliderPrice">9500원</p>
                </div>
              </div>
              <div className="sliderItem">
                <div className="sliderImgBox">
                  <img src="https://www.osulloc.com/upload/kr/ko/adminImage/BM/BK/304_20201007123353062WR.png?quality=80" />
                </div>
                <div className="sliderTxt">
                  <p>트로피컬 블랙티</p>
                  <p className="sliderPrice">9500원</p>
                </div>
              </div>
              <div className="sliderItem">
                <div className="sliderImgBox">
                  <img src="https://www.osulloc.com/upload/kr/ko/adminImage/BM/BK/304_20201007123353062WR.png?quality=80" />
                </div>
                <div className="sliderTxt">
                  <p>트로피컬 블랙티</p>
                  <p className="sliderPrice">9500원</p>
                </div>
              </div>
              <div className="sliderItem">
                <div className="sliderImgBox">
                  <img src="https://www.osulloc.com/upload/kr/ko/adminImage/BM/BK/304_20201007123353062WR.png?quality=80" />
                </div>
                <div className="sliderTxt">
                  <p>트로피컬 블랙티</p>
                  <p className="sliderPrice">9500원</p>
                </div>
              </div>
              <div className="sliderItem">
                <div className="sliderImgBox">
                  <img src="https://www.osulloc.com/upload/kr/ko/adminImage/BM/BK/304_20201007123353062WR.png?quality=80" />
                </div>
                <div className="sliderTxt">
                  <p>트로피컬 블랙티</p>
                  <p className="sliderPrice">9500원</p>
                </div>
              </div>
              <div className="sliderItem">
                <div className="sliderImgBox">
                  <img src="https://www.osulloc.com/upload/kr/ko/adminImage/BM/BK/304_20201007123353062WR.png?quality=80" />
                </div>
                <div className="sliderTxt">
                  <p>트로피컬 블랙티</p>
                  <p className="sliderPrice">9500원</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                역시 위설록..... 차갑게 먹어도 맛있고 뜨겁게 먹어도
                굳굳ddddddddddd
              </div>
              <div className="reviewPicCollect">
                <div className="reviewPic">
                  <img src="https://www.osulloc.com/upload/kr/ko/adminImage/CV/PI/20191213161646687QE.png?quality=80" />
                </div>
              </div>
            </div>
          </div>

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
                역시 위설록..... 차갑게 먹어도 맛있고 뜨겁게 먹어도 굳굳
              </div>
            </div>
          </div>
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
                역시 위설록..... 차갑게 먹어도 맛있고 뜨겁게 먹어도 굳굳
              </div>
            </div>
          </div>
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
                역시 위설록..... 차갑게 먹어도 맛있고 뜨겁게 먹어도 굳굳
              </div>
            </div>
          </div>
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
                역시 위설록..... 차갑게 먹어도 맛있고 뜨겁게 먹어도 굳굳
              </div>
            </div>
          </div>
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
                역시 위설록..... 차갑게 먹어도 맛있고 뜨겁게 먹어도 굳굳
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
