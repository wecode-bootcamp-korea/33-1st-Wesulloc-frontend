import { useEffect, useState, useRef } from 'react';
import Reviews from './components/review/Reviews';
import Detail from './components/detail/Detail';
import Inform from './components/detail/Inform';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [product, setProduct] = useState([]);

  const reviewTarget = useRef('');
  const informTarget = useRef('');

  const goToReviewTarget = () => {
    reviewTarget.current.scrollIntoView({
      block: 'center',
      behavior: 'smooth',
    });
  };

  const goToShipInfo = () => {
    informTarget.current.scrollIntoView({
      block: 'center',
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    fetch('/data/productDetail/product.json')
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => {
        setProduct(data.results);
      });
  }, []);

  return (
    <div className="productDetail">
      {product.id && <Detail product={product} />}

      <div className="sortMenu">
        <ul>
          <li>상품추천</li>
          <li
            onClick={() => {
              goToReviewTarget();
            }}
          >
            고객리뷰
          </li>
          <li
            onClick={() => {
              goToShipInfo();
            }}
          >
            상품고시정보
          </li>
        </ul>
      </div>

      <Reviews reviewTarget={reviewTarget} product={product} />
      <Inform informTarget={informTarget} />
    </div>
  );
};

export default ProductDetail;
