import Recommend from './Recommend';
import './Recommends.scss';

const Recommends = () => {
  return (
    <div className="recommends">
      <div className="recommendBox">
        <p className="title">이런 상품은 어떠세요?</p>
        <p className="subTitle">카테고리 BEST</p>
        <div className="sliderArea">
          <button className="recommendLeftBtn">
            <i className="fa-solid fa-angle-left" />
          </button>
          <button className="recommendRightBtn">
            <i className="fa-solid fa-angle-right" />
          </button>
          <div className="sliderContainer">
            <Recommend />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommends;
