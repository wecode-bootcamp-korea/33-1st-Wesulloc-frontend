import '../mainProductLists/MainProductList.scss';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
// import BtnSlider from '../slide/BtnSlider';
import { FaAngleRight } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';

function MainProductList() {
  const [cardSlide, setCardSlide] = useState(1);

  const nextCard = () => {
    if (cardSlide !== MAINPRODUCT_LIST.length) {
      setCardSlide(cardSlide + 1);
    } else if (cardSlide === MAINPRODUCT_LIST.length) {
      setCardSlide(1);
    }
  };

  const prevCard = () => {
    if (cardSlide !== 1) {
      setCardSlide(cardSlide - 1);
    } else if (cardSlide === 1) {
      setCardSlide(MAINPRODUCT_LIST);
    }
  };

  return (
    <div className="productListBox">
      <div className="productSlide">
        {MAINPRODUCT_LIST.map(
          ({ id, img, title, price, sale, salePercent }) => (
            <div
              key={id}
              className={
                cardSlide === id + 1 ? 'cardActiveAnim' : 'slideWrapper'
              }
            >
              <div className="swiperSlide">
                <div className="productThumb">
                  <img
                    className="productThumb default"
                    src={img}
                    alt="상품페이지"
                  />
                </div>
                <div className="productText">
                  <div className="productInfo">
                    <p className="productName">{title}</p>
                    <div className="productPrice">
                      <p className="priceOrigin">{price}원</p>
                      <div className="saleBox">
                        <p className="priceResult">{sale}</p>
                        <p className="salePercent">{salePercent}</p>
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
        <FaAngleLeft className="movePrev" direction="next" />
        <FaAngleRight className="moveNext" direction="prev" />
      </div>
    </div>
  );
}

const MAINPRODUCT_LIST = [
  {
    id: 1,
    img: 'https://www.osulloc.com/upload/kr/ko/adminImage/DN/ZV/20200626142032785KL.png?quality=80&shrink=240:268',
    title: '영귤섬 아이스티',
    price: 13000,
    new: false,
    sale: true,
    salePercent: '',
  },
  {
    id: 2,
    img: [
      'https://www.osulloc.com/upload/kr/ko/adminImage/WJ/PG/20200722154640154WB.png?quality=80&shrink=240:268',
    ],
    title: '그린티 아이스크림 4입 세트',
    price: 23500,
    new: false,
    sale: true,
    salePercent: 15,
  },
  {
    id: 3,
    img: 'https://www.osulloc.com/upload/kr/ko/item_overImg/6187.png?quality=80&shrink=240:268',
    title: '산호섬 아이스티',
    price: 13500,
    new: false,
    sale: true,
    salePercent: '',
  },
  {
    id: 4,
    img: 'https://www.osulloc.com/upload/kr/ko/adminImage/AP/VR/20201007114946593AU.png?quality=80&shrink=240:268',
    title: '제주 동백꽃 티',
    price: 9500,
    new: false,
    sale: true,
    salePercent: 10,
  },
  {
    id: 5,
    img: 'https://www.osulloc.com/upload/kr/ko/adminImage/AC/ON/20211202165502690ZK.png?quality=80&shrink=240:268',
    title: '웨딩 그린티 10개입',
    price: 15000,
    new: false,
    sale: true,
    salePercent: 15,
  },
  {
    id: 6,
    img: 'https://www.osulloc.com/upload/kr/ko/adminImage/AC/ON/20211202165502690ZK.png?quality=80&shrink=240:268',
    title: '웨딩 그린티 10개입',
    price: 15000,
    new: false,
    sale: true,
    salePercent: 15,
  },
  {
    id: 7,
    img: 'https://www.osulloc.com/upload/kr/ko/adminImage/AC/ON/20211202165502690ZK.png?quality=80&shrink=240:268',
    title: '웨딩 그린티 10개입',
    price: 15000,
    new: false,
    sale: true,
    salePercent: 15,
  },
  {
    id: 8,
    img: 'https://www.osulloc.com/upload/kr/ko/adminImage/AC/ON/20211202165502690ZK.png?quality=80&shrink=240:268',
    title: '웨딩 그린티 10개입',
    price: 15000,
    new: false,
    sale: true,
    salePercent: 15,
  },
  {
    id: 9,
    img: 'https://www.osulloc.com/upload/kr/ko/adminImage/AC/ON/20211202165502690ZK.png?quality=80&shrink=240:268',
    title: '웨딩 그린티 10개입',
    price: 15000,
    new: false,
    sale: true,
    salePercent: 15,
  },
];

export default MainProductList;
