import React, { useState, useEffect } from 'react';
import Slides from './components/Slides';
import ProductItems from './components/ProductItems';
import './Products.scss';

const Products = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('/data/products/products.json')
      .then(res => res.json())
      .then(productsData => setProductList(productsData));
  }, []);

  return (
    <>
      <Slides />
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

export default Products;
