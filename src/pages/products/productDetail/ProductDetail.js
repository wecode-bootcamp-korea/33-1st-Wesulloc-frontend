import { useEffect, useState, useRef } from 'react';
import Reviews from './components/review/Reviews';
import Recommends from './components/recommend/Recommends';
import Detail from './components/detail/Detail';
import Inform from './components/detail/Inform';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('/data/productDetail/product.json')
      .then(res => res.json())
      .then(data => {
        setProduct(data);
      });
  }, []);

  const reviewTarget = useRef('');
  const informTarget = useRef('');

  return (
    <div className="productDetail">
      <Detail />

      <div className="sortMenu">
        <ul>
          <li>상품추천</li>
          <li
            onClick={() => {
              reviewTarget.current.scrollIntoView({
                block: 'center',
                behavior: 'smooth',
              });
            }}
          >
            고객리뷰
          </li>
          <li
            onClick={() => {
              informTarget.current.scrollIntoView({
                block: 'center',
                behavior: 'smooth',
              });
            }}
          >
            상품고시정보
          </li>
        </ul>
      </div>

      <div className="recommendContainer">
        <Recommends />
      </div>
      <Reviews reviewTarget={reviewTarget} />
      <Inform informTarget={informTarget} />
    </div>
  );
};

export default ProductDetail;
