import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Reviews from './components/review/Reviews';
import Detail from './components/detail/Detail';
import Inform from './components/detail/Inform';
import Nav from '../../../components/nav/Nav';
import Footer from '../../../components/footer/Footer';
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

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://10.58.2.25:8000/products/${id}`)
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
      <Nav />
      {product.id && <Detail product={product} />}

      <div className="sortMenu">
        <ul>
          <li>옵션상품</li>
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
      <Footer />
    </div>
  );
};

export default ProductDetail;
