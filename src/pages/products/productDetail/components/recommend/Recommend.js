import './Recommend.scss';

const Recommend = () => {
  return (
    <div className="recommend">
      <div className="sliderItem">
        <div className="sliderImgBox">
          <img src="/images/drink.jpg" alt="img" />
        </div>
        <div className="sliderTxt">
          <p>트로피컬 블랙티</p>
          <p className="sliderPrice">9500원</p>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
