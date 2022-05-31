import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BestProductItems from './components/BestProductItems';
import './BestProductsList.scss';

const Products = () => {
  const [productList, setProductList] = useState([]);
  const [actived, setActived] = useState(true);

  const handleTabChange = () => {
    setActived(actived);
  };

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
            <Link
              to="/WeeklyBest"
              className={!actived ? 'actived' : 'notActived'}
              onChange={handleTabChange}
            >
              위클리 베스트
            </Link>
            <Link
              to="/SummerGift"
              className={actived ? 'actived' : 'notActived'}
              onChange={handleTabChange}
            >
              여름맞이 선물
            </Link>
          </div>
        </div>
        <div className="productListWrapper">
          <div className="productListOption">
            <span>더운 날 마음까지 시원해지는 아이스티 하나 건네보세요.</span>
          </div>
          <ul className="productList">
            {productList.map(productsData => (
              <BestProductItems key={productsData.id} data={productsData} />
            ))}
          </ul>
        </div>
      </article>
    </>
  );
};

export default Products;
