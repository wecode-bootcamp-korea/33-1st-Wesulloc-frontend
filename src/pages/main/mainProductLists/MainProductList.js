import '../mainProductLists/MainProductList.scss';
import React, { useEffect, useRef, useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';
import MainProductImg from './MainProductImg';

function MainProductList() {
  const [mainProductList, setMainProductList] = useState([]);

  useEffect(() => {
    fetch('/data/mainProductList.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setMainProductList(data);
        // setMainProductList(data.results);
      });
  }, []);

  //상품 슬라이더
  const [cardSlide, setCardSlide] = useState(0);
  const nextCard = e => {
    if (cardSlide !== 5) {
      setCardSlide(cardSlide => cardSlide + 1);
    } else if (cardSlide === 5) {
      setCardSlide(0);
    }
  };

  const prevCard = e => {
    if (cardSlide !== 0) {
      setCardSlide(cardSlide - 1);
    } else if (cardSlide === 0) {
      setCardSlide(5);
    }
  };

  const cardRef = useRef('');
  useEffect(() => {
    cardRef.current.style.transition = `transform 300ms ease-in-out`;
    cardRef.current.style.transform = `translateX(-${cardSlide * 20}%)`;
  }, [cardSlide]);

  return (
    <div className="productListBox">
      <div className="productSlide" ref={cardRef}>
        {mainProductList.map(
          ({ id, img_url, name, price, sale_or_not, discount_rate }) => (
            <div
              key={id}
              className={
                cardSlide === id + 1 ? 'cardActiveAnim' : 'slideWrapper'
              }
            >
              <div className="swiperSlide">
                <div className="productThumb">
                  <MainProductImg img={img_url} />
                </div>
                <div className="productText">
                  <div className="productInfo">
                    <p className="productName">{name}</p>
                    <div className="productPrice">
                      <p className="priceOrigin">{price}원</p>
                      <div className="saleBox">
                        <p className="priceResult">{sale_or_not}</p>
                        <div className="priceBox">
                          <p className="resultPrice">
                            {{ sale_or_not } === true
                              ? (price * (100 - discount_rate)) / 100
                              : ''}
                          </p>
                          <p className="salePercent">{discount_rate}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="prdTag" />
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className="move">
        <FaAngleLeft onClick={prevCard} className="movePrev" direction="next" />

        <FaAngleRight
          onClick={nextCard}
          className="moveNext"
          direction="prev"
        />
      </div>
    </div>
  );
}

//
export default MainProductList;
