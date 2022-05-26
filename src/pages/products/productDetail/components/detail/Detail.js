import './Detail.scss';
const Detail = () => {
  return (
    <div className="detail">
      <div className="detailContainer">
        <div className="detailFlex">
          <div className="detailLeft">
            <div className="itemWrapper">
              <div className="itemImg">
                <img src="/images/drink.jpg" alt="img" />
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
                  <i className="fa-brands fa-instagram" />
                </li>
                <li>
                  <i className="fa-regular fa-heart" />
                </li>
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
    </div>
  );
};

export default Detail;
