import React, { useState, useEffect } from 'react';
import SlideItems from './components/SlideItems';
import ProductItems from './components/ProductItems';
import './Products.scss';

const Products = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('/data/products/products.json')
      .then(res => res.json())
      .then(productsData => setProductList(productsData));
  }, []);

  const moveLeft = () => {
    document.querySelector('.slideItem').style.transform = 'translate(-55rem)';
  };

  return (
    <>
      <header className="productHeader">
        <div className="slideWrapper">
          <ul className="videoSlider">
            {SLIDE_LIST.map(slideData => (
              <SlideItems key={slideData.id} data={slideData} />
            ))}
          </ul>
        </div>
        <div className="slideButtonsWrapper">
          <button className="slideButton" onClick={moveLeft}>
            명차
          </button>
          <button className="slideButton" onClick={moveLeft}>
            녹차/발효차/홍차
          </button>
          <button className="slideButton" onClick={moveLeft}>
            허브티
          </button>
          <button className="slideButton" onClick={moveLeft}>
            블렌디드티
          </button>
        </div>
      </header>
      <section className="productContentsWrapper">
        <div className="productCategoryOption">
          <span>티 제품</span>
          <ul>
            <li>티세트</li>
            <li>명차</li>
            <li>녹차/말차</li>
            <li>발효차/홍차</li>
            <li>블렌디드티</li>
            <li>허브티</li>
            <li>티밀크티/아이스티</li>
          </ul>
        </div>
        <article className="contentWrapper">
          <div className="tabs">
            <span>티세트</span>
            <ul>
              <li>리뷰많은순</li>
              <li>판매순</li>
              <li>신상품순</li>
              <li>높은 가격순</li>
              <li>낮은 가격순</li>
            </ul>
          </div>
          <div className="contentTop">
            <span>총 123개의 상품이 있습니다.</span>
            <ul>
              <li>전체</li>
              <li>잎차</li>
              <li>피라미드</li>
              <li>티백</li>
              <li>파우더</li>
            </ul>
          </div>
          <ul className="productList">
            {productList.map(productsData => (
              <ProductItems key={productsData.id} data={productsData} />
            ))}
          </ul>
        </article>
      </section>
    </>
  );
};

const SLIDE_LIST = [
  {
    id: 1,
    name: '명차',
    content: '고귀하고 품격 있는 티 라이프를 위한 오설록의 명차 라인입니다.',
  },

  {
    id: 2,
    name: '녹차/발효차/홍차',
    content: '유기농 제주 차밭에서 자란 우리 녹차 발효차 라인입니다.',
  },
  {
    id: 3,
    name: '허브티',
    content: '꽃잎, 과일향이 가득한 풍미가 돋보이는 라인입니다.',
  },
  {
    id: 4,
    name: '블렌디드티',
    content: '제주의 다양한 품경과 꽃내음을 담았습니다.',
  },
];

export default Products;
