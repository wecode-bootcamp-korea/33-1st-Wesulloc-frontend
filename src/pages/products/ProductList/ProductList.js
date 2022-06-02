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
  const [category, setCategory] = useState('전체상품');
  const [filterColor, setFilterColor] = useState(1);
  const [sortStyle, setSortStyle] = useState(1);
  const [filterValue, setFilterValue] = useState({
    categoryValue: '',
    sortValue: '',
    offsetValue: '',
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch(`http://10.58.2.25:8000/products${location.search}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.results);
      });
  }, [location.search]);

  useEffect(() => {
    const queryString = `?${
      filterValue.categoryValue
        ? `${
            filterValue.categoryValue === 1
              ? `main_categories=${filterValue.categoryValue}`
              : `category=${filterValue.categoryValue}`
          }`
        : ''
    }${filterValue.sortValue ? `&sort=${filterValue.sortValue}` : ''}${
      filterValue.offsetValue ? `${filterValue.offsetValue}` : ''
    }`;
    navigate(queryString);
  }, [
    filterValue.categoryValue,
    filterValue.sortValue,
    filterValue.offsetValue,
  ]);

  const getButtonIndex = buttonIndex => {
    const limit = 12;
    const offset = buttonIndex * limit;
    const queryString = `&offset=${offset}&limit=${limit}`;
    setFilterValue(prev => {
      return { ...prev, offsetValue: queryString };
    });
  };

  const checkFilter = (value, name) => {
    if (value < 2) {
      setFilterValue(prev => {
        return { ...prev, categoryValue: Number(value) };
      });
    } else {
      const pageButtons = document.querySelector('.paginationButtons');

      setFilterValue(prev => {
        return { ...prev, categoryValue: Number(value) + 1 };
      });
      pageButtons.style.display = 'none';
    }
    setCategory(name);
    setFilterColor('');
  };

  const checkSort = value => {
    setFilterValue(prev => {
      return { ...prev, sortValue: value };
    });
  };

  const filterColorChange = value => {
    setFilterColor(value);
  };

  const sortStyleChange = value => {
    setSortStyle(value);
  };

  return (
    <>
      <Slides />
      <section className="productContentsWrapper">
        <div className="productCategoryOption">
          <span>티 제품</span>
          <ul>
            <CategoryFilterTab
              checkFilter={checkFilter}
              filterColor={filterColor}
              filterColorChange={filterColorChange}
            />
          </ul>
        </div>
        <article className="contentWrapper">
          <div className="sortTabs">
            <span>{category}</span>
            <ProductSortTab
              checkSort={checkSort}
              sortStyle={sortStyle}
              sortStyleChange={sortStyleChange}
            />
          </div>
          <span className="productNumberText">
            총 {products.length}개의 상품이 있습니다.
          </span>
          <ul className="productList">
            {products[0] &&
              products.map(productsData => (
                <ProductItems key={productsData.id} data={productsData} />
              ))}
          </ul>
          <Pagination getButtonIndex={getButtonIndex} />
        </article>
      </section>
    </>
  );
};

export default ProductList;
