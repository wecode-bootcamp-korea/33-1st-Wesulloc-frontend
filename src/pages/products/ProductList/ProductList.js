import React, { useState, useEffect } from 'react';
import Slides from './components/Slides';
import ProductItems from './components/ProductItem';
import './ProductList.scss';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data/products/products.json')
      .then(res => res.json())
      .then(productsData => setProducts(productsData));
  }, []);

  return (
    <>
      <Slides />
      <section className="productContentsWrapper">
        <div className="productCategoryOption">
          <span>티 제품</span>
          <ul>
            {CATEGORY_LIST.map(data => (
              <li key={data.id}>{data.categoryName}</li>
            ))}
          </ul>
        </div>
        <article className="contentWrapper">
          <div className="tabs">
            <span>티세트</span>
            <ul>
              {SORTING_LIST.map(data => (
                <li key={data.id}>{data.sortingItem}</li>
              ))}
            </ul>
          </div>
          <span className="productNumberText">
            총 <strong>{}</strong>개의 상품이 있습니다.
          </span>
          <ul className="productList">
            {products.map(productsData => (
              <ProductItems key={productsData.id} data={productsData} />
            ))}
          </ul>
        </article>
      </section>
    </>
  );
};

const CATEGORY_LIST = [
  {
    id: 1,
    categoryName: '전체상품',
  },
  {
    id: 2,
    categoryName: '티세트',
  },
  {
    id: 3,
    categoryName: '명차',
  },
  {
    id: 4,
    categoryName: '녹차/말차',
  },
  {
    id: 5,
    categoryName: '발효차/홍차',
  },
  {
    id: 6,
    categoryName: '블렌디드티',
  },
  {
    id: 7,
    categoryName: '허브티',
  },
  {
    id: 8,
    categoryName: '티밀크티/아이스티',
  },
];

const SORTING_LIST = [
  {
    id: 1,
    sortingItem: '리뷰많은순',
  },
  {
    id: 2,
    sortingItem: '판매순',
  },
  {
    id: 3,
    sortingItem: '신상품순',
  },
  {
    id: 4,
    sortingItem: '높은 가격순',
  },
  {
    id: 5,
    sortingItem: '낮은 가격순',
  },
];

export default ProductList;
