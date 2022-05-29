import { useState } from 'react';
import AddToCart from './AddToCartModal';
import './Detail.scss';

const Detail = ({ product }) => {
  const [amount, setAmount] = useState(1);
  const [cartModal, setCartModal] = useState(false);

  let novel = true;
  let sale = false;

  return (
    <div className="detail">
      {cartModal && <AddToCart setCartModal={setCartModal} amount={amount} />}
      <div className="detailContainer">
        <div className="detailFlex">
          <div className="detailLeft">
            <div className="itemWrapper">
              {novel && <div className="newPro">신제품</div>}
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
              <span className="goToReview">
                REVIEW
                <span className="reviewNum">20</span>
                <i className="fa-solid fa-angle-right" />
              </span>
            </div>
          </div>
          <div className="detailRight">
            <ul className="detailCategory">
              <li>티제품</li>
              <i className="fa-solid fa-angle-right" />
              <li>브렌디드티</li>
            </ul>
            <p className="detailRightTitle">아이스티</p>
            <p className="detailRightDescription">시원한 아이스티</p>

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
              {sale ? (
                <div className="priceBox">
                  <div className="originalPrice">23000원</div>
                  <div className="salePriceBox">
                    <span className="salePrice">
                      23000원
                      <span className="wonColor">원</span>
                    </span>
                    <span className="saleRate">0%↓</span>
                  </div>
                </div>
              ) : (
                <div className="priceBox">
                  23000
                  <span className="wonColor">원</span>
                </div>
              )}
            </div>
            <div className="selectItem">
              <div className="itemQuantityContainer">
                <p>구매수량</p>
                <div className="quantityBox">
                  <button
                    disabled={amount === 1}
                    className="subtractBtn"
                    onClick={() => {
                      setAmount(amount - 1);
                    }}
                  >
                    -
                  </button>
                  <span>{amount}</span>
                  <button
                    className="addBtn"
                    onClick={() => {
                      setAmount(amount + 1);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              {/* <div className="itemPackage">포장불가</div> */}
            </div>
            <div className="totalPrice">
              <span className="totalPriceTitle">상품금액 합계</span>
              <span className="totalPriceNum">
                <strong>{23000 * amount}</strong>원
              </span>
            </div>
            <div className="paymentBtnArea">
              <div className="paymentBtnContainer">
                <button className="presentBtn">선물하기</button>
                <button
                  className="cartBtn"
                  onClick={() => {
                    setCartModal(true);
                  }}
                >
                  장바구니
                </button>
                <button className="buyNowBtn">바로구매</button>
              </div>
            </div>
            {/* <div className="subscribeBox">
              <span className="subscribeTitle">다다일상 정기배송이란?</span>
              <div className="subscribeCheckArea">
                <input type="checkbox" />
                <span>다다일상정기배송</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
