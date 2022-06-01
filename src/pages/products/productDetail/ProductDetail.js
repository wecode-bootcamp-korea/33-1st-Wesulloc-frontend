import { useEffect, useState, useRef } from 'react';
import Reviews from './components/review/Reviews';
import Detail from './components/detail/Detail';
import Inform from './components/detail/Inform';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [product, setProduct] = useState([]);

  const reviewTarget = useRef('');
  const informTarget = useRef('');

  const scrollTargetView = targetPoint => {
    targetPoint.current.scrollIntoView({
      block: 'center',
      behavior: 'smooth',
    });
  };

  // const {id} = useParams();

  useEffect(() => {
    // 동적라우팅
    // fetch(`http://0.4.50/products/${id}`)
    fetch('http://10.58.0.93:8000/products/1')
      // fetch('/data/productDetail/product.json')
      .then(res => {
        if (res.ok) {
          return res.json();
        } else console.log('no');
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
              scrollTargetView(reviewTarget);
            }}
          >
            고객리뷰
          </li>
          <li
            onClick={() => {
              scrollTargetView(informTarget);
            }}
          >
            상품고시정보
          </li>
        </ul>
      </div>

      {product.id && <Reviews reviewTarget={reviewTarget} product={product} />}
      <Inform informTarget={informTarget} />
    </div>
  );
};

export default ProductDetail;
