import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Slides from './components/Slides';
import ProductSortTab from './components/ProductSortTab';
import ProductItems from './components/ProductItem';
import Pagination from './components/Pagination';
import './ProductList.scss';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch(`http://10.58.0.93:8000/products${location.search}`)
      .then(res => res.json())
      .then(productsData => setProducts(productsData.results));
  }, [location.search]);

  useEffect(() => {
    fetch(`http://10.58.0.93:8000/products`)
      .then(res => res.json())
      .then(productsData => setProducts(productsData.results));
  }, []);

  // 리뷰많은순
  // const sortReview = () => {
  //   let newProducts = [...products];
  //   newProducts.sort((a, b) => b.reviewCount - a.reviewCount);
  //   setProducts(newProducts);
  // };

  // 판매순
  // const sortNumberOfSales = () => {
  //   let newProducts = [...products];
  //   newProducts.sort((a, b) => b.numberOfSales - a.numberOfSales);
  //   setProducts(newProducts);
  // };

  // 신상품순
  // const sortNew = () => {
  //   let newProducts = [...products];
  //   if ("new key's value" === true) {
  //     setProducts(newProducts);
  //   }
  // };

  // 높은 가격순
  // const sortHighPrice = () => {
  //   let newProducts = [...products];
  //   newProducts.sort((a, b) => b.price - a.price);
  //   setProducts(newProducts);
  // };

  // 낮은 가격순
  // const sortLowPrice = () => {
  //   let newProducts = [...products];
  //   newProducts.sort((a, b) => a.price - b.price);
  //   setProducts(newProducts);
  // };

  const goToDetail = id => {
    navigate(`/ProductList/${id}`);
  };

  const getButtonIndex = buttonIndex => {
    const limit = 12;
    const offset = buttonIndex * limit;
    const queryString = `?offset=${offset}&limit=${limit}`;
    navigate(`${queryString}`);
  };

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
            <ProductSortTab
            // sortReview={sortReview}
            />
          </div>
          <span className="productNumberText">
            총 {products.length}개의 상품이 있습니다.
          </span>
          <ul className="productList">
            {products[0] &&
              products.map(productsData => (
                <ProductItems
                  key={productsData.id}
                  data={productsData}
                  onClick={goToDetail}
                />
              ))}
          </ul>
          <Pagination getButtonIndex={getButtonIndex} />
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

export default ProductList;
