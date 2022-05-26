import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BestProductItems from './components/BestProductItems';
import './BestProducts.scss';

const Products = () => {
  const [productList, setProductList] = useState([]);
  const [isSelected, setIsSeleted] = useState(true);

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
              className="tabBest"
              isSelected={true}
              //삼항연산자를 사용했지만 각각의 페이지에 적용하여 정상적으로 작동되는 것처럼 보인다.
              //두 페이지를 연동하는 방식으로 다시 코드를 수정해야한다.
              style={
                isSelected
                  ? {
                      color: '#ffffff',
                      backgroundColor: '#6c801a',
                      fontWeight: '700',
                    }
                  : { color: '#333333' }
              }
            >
              위클리 베스트
            </Link>
            <Link to="/SummerGift" className="tabSummer">
              여름맞이 선물
            </Link>
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
              <BestProductItems key={productsData.id} data={productsData} />
            ))}
          </ul>
        </div>
      </article>
    </>
  );
};

export default Products;
