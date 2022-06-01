import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Slides from './components/Slides';
import CategoryFilterTab from './components/CategoryFilterTab';
import ProductSortTab from './components/ProductSortTab';
import ProductItems from './components/ProductItem';
import Pagination from './components/Pagination';
import './ProductList.scss';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch(`http://10.58.0.93:8000/products`)
      .then(res => res.json())
      .then(productsData => setProducts(productsData.results));
  }, []);

  useEffect(() => {
    fetch(`http://10.58.0.93:8000/products${location.search}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.results);
        setCategory(data.results);
        setSort(data.results);
      });
  }, [location.search]);

  const goToDetail = id => {
    navigate(`/ProductList/${id}`);
  };

  const getButtonIndex = buttonIndex => {
    const limit = 12;
    const offset = buttonIndex * limit;
    const paginationQueryString = `?offset=${offset}&limit=${limit}`;
    navigate(`${paginationQueryString}`);
  };

  const getCategoryIndex = categoryIndex => {
    const category = Number(categoryIndex) + 1;

    if (Number(categoryIndex) === 1) {
      const categoryQueryString = `?main_categories=${category}`;
      navigate(`${categoryQueryString}`);
    } else if (Number(categoryIndex) !== 1) {
      const categoryQueryString = `?category=${category}`;
      navigate(`${categoryQueryString}`);
    }
  };

  const getSortIndex = sortIndex => {};

  return (
    <>
      <Slides />
      <section className="productContentsWrapper">
        <div className="productCategoryOption">
          <span>티 제품</span>
          <ul>
            <CategoryFilterTab getCategoryIndex={getCategoryIndex} />
          </ul>
        </div>
        <article className="contentWrapper">
          <div className="sortTabs">
            <span>티세트</span>
            <ProductSortTab getSortIndex={getSortIndex} />
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

export default ProductList;
