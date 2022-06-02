import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AddToCartModal from './AddToCartModal';
import './Detail.scss';

const Detail = ({ product }) => {
  const [amount, setAmount] = useState(1);
  const [cartModal, setCartModal] = useState(false);

  const navigate = useNavigate();
  const goToMainCategory = () => {
    navigate('/ProductList');
  };
  const goToSubCategory = () => {
    let categoryNum = 2;
    if (product.subCategory === '티세트') {
      categoryNum = 3;
    } else if (product.subCategory === '명차') {
      categoryNum = 4;
    } else if (product.subCategory === '녹차/말차') {
      categoryNum = 5;
    } else if (product.subCategory === '발효차/홍차') {
      categoryNum = 6;
    } else if (product.subCategory === '블렌디드티') {
      categoryNum = 7;
    } else if (product.subCategory === '허브티') {
      categoryNum = 8;
    } else if (product.subCategory === '밀크티/아이스티') {
      categoryNum = 9;
    }
    const queryString = `?category=${categoryNum}`;
    navigate(`/ProductList${queryString}`);
  };

  return (
    <div className="detail">
      {cartModal && (
        <AddToCartModal
          setCartModal={setCartModal}
          amount={amount}
          productId={product.id}
        />
      )}
      <div className="detailContainer">
        <div className="detailFlex">
          <div className="detailLeft">
            <div className="itemWrapper">
              {product.novel && <div className="newPro">신제품</div>}
              <div className="itemImg">
                <img src={product.img} alt="img" />
              </div>
              <ul className="customerBenefit">
                <li>
                  <i className="fa-solid fa-coins" />
                  <span>뷰티포인트 적립</span>
                </li>
                <li>
                  <i className="fa-solid fa-leaf" />
                  <span>찻잎 {product.price * 0.01}P 적립</span>
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
          </div>
          <div className="detailRight">
            <ul className="detailCategory">
              <li onClick={goToMainCategory}>{product.mainCategory}</li>
              <i className="fa-solid fa-angle-right" />
              <li onClick={goToSubCategory}>{product.subCategory}</li>
            </ul>
            <p className="detailRightTitle">{product.name}</p>
            <p className="detailRightDescription">{product.description}</p>

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
              {product.sale ? (
                <div className="priceBox">
                  <div className="originalPrice">{product.price}원</div>
                  <div className="salePriceBox">
                    <span className="salePrice">
                      {Math.round(
                        product.price -
                          product.price * (product.salePercent * 0.01)
                      )}
                      <span className="wonColor">원</span>
                    </span>
                    <span className="saleRate">{product.salePercent}%↓</span>
                  </div>
                </div>
              ) : (
                <div className="priceBox">
                  {product.price}
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
                      setAmount(prev => prev - 1);
                    }}
                  >
                    -
                  </button>
                  <span>{amount}</span>
                  <button
                    className="addBtn"
                    onClick={() => {
                      setAmount(prev => prev + 1);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="totalPrice">
              <span className="totalPriceTitle">상품금액 합계</span>
              <span className="totalPriceNum">
                <strong>
                  {product.sale
                    ? (product.price -
                        product.price * (product.salePercent * 0.01)) *
                      amount
                    : product.price * amount}
                </strong>
                원
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
