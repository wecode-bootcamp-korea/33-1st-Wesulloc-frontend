import Reviews from './components/review/Reviews';
import Recommends from './components/recommend/Recommends';
import Detail from './components/detail/Detail';
import './ProductDetail.scss';

const ProductDetail = () => {
  return (
    <div className="productDetail">
      <Detail />

      <div className="sortMenu">
        <ul>
          <li>상품추천</li>
          <li>고객리뷰</li>
          <li>상품고시정보</li>
        </ul>
      </div>

      <div className="recommendContainer">
        <Recommends />
      </div>
      <Reviews />
    </div>
  );
};

export default ProductDetail;
