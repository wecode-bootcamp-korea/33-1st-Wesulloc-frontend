import React, { useEffect, useState } from 'react';
import ProductItems from './components/ProductItems';
import './Products.scss';

const Products = () => {
  const [productList, setProductList] = useState([]);

  /*
  const [tabState, setTabState] = useState({
    tabBest: true,
    tabSummer: false,
  });

  const handleTabChange = () => {
    setTabState(tabState);
  };
  */

  useEffect(() => {
    fetch('/data/products/products.json')
      .then(res => res.json())
      .then(productsData => setProductList(productsData));
  }, []);

  return (
    <>
      <header className="pageHeader">
        <div className="headImage">
          <p>베스트</p>
        </div>
      </header>
      <article className="recommendContents">
        <div className="topButtonWrapper">
          <div className="topButtons">
            <button name="tabBest">위클리 베스트</button>
            <button name="tabSummer">여름맞이 선물</button>
          </div>
        </div>
        <div className="productListWrapper">
          <div className="productListOption">
            <span>2022년 5월 4째주</span>
            <select name="listFilter">
              <option>판매순</option>
              <option>리뷰순</option>
            </select>
          </div>
          <ul className="productList">
            {productList.map(productsData => (
              <ProductItems key={productsData.id} data={productsData} />
            ))}
          </ul>
        </div>
      </article>
    </>
  );
};

export default Products;
