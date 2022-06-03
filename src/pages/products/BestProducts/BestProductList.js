import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Nav from '../../../components/nav/Nav';
import BestButtons from './components/BestButtons';
import BestProductItems from './components/BestProductItems';
import Footer from '../../../components/footer/Footer';
import './BestProductsList.scss';

const WeeklyBest = () => {
  const [productList, setProductList] = useState([]);
  const [buttonColor, setButtonColor] = useState(1);
  const [bestValue, setBestValue] = useState(1);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch(`http://10.58.2.25:8000/products${location.search}`)
      .then(res => res.json())
      .then(data => {
        setProductList(data.results);
      });
  }, [location.search]);

  useEffect(() => {
    const queryString = `?category=${bestValue}`;
    navigate(queryString);
  }, [bestValue]);

  const checkBestValue = value => {
    setBestValue(prev => {
      return value;
    });
  };

  const buttonColorChange = value => {
    setButtonColor(value);
  };

  return (
    <>
      <Nav />
      <article className="recommendContents">
        <BestButtons
          checkBestValue={checkBestValue}
          buttonColor={buttonColor}
          buttonColorChange={buttonColorChange}
        />
        <div className="productListWrapper">
          <ul className="productList">
            {productList.map(productsData => (
              <BestProductItems key={productsData.id} data={productsData} />
            ))}
          </ul>
        </div>
      </article>
      <Footer />
    </>
  );
};

export default WeeklyBest;
