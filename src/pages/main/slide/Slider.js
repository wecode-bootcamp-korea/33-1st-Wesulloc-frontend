import React, { useState } from 'react';
import '../slide/Slider.css';
import BtnSlider from './BtnSlider';

function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== DATA_SLIDER.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === DATA_SLIDER.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(DATA_SLIDER.length);
    }
  };

  const moveDot = index => {
    setSlideIndex(index);
  };

  return (
    <div className="containerSlider">
      {DATA_SLIDER.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}
          >
            {/* <img src={obj.img} /> 상수에서 가져오는 방식*/}
            <img
              src={
                process.env.PUBLIC_URL +
                `/images/mainSlide/mainSlide${index + 1}.png`
              }
            />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction="next" />
      <BtnSlider moveSlide={prevSlide} direction="prev" />

      <div className="containerDots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? 'dot active' : 'dot'}
          />
        ))}
      </div>
    </div>
  );
}

const DATA_SLIDER = [
  {
    id: 1,
    title: 'Lorem ipsum',
    subTitle: 'Lorem',
    img: 'https://www.osulloc.com/upload/kr/ko/adminImage/IY/EO/20220518024732122VD.png?quality=80',
  },
  {
    id: 2,
    title: 'Lorem ipsum',
    subTitle: 'Lorem',
    img: 'https://www.osulloc.com/upload/kr/ko/adminImage/WW/EX/20220523170104376QO.png?quality=80',
  },
  {
    id: 3,
    title: 'Lorem ipsum',
    subTitle: 'Lorem',
    img: 'https://www.osulloc.com/upload/kr/ko/adminImage/EZ/OO/20220518024936770TI.png?quality=80',
  },
  {
    id: 4,
    title: 'Lorem ipsum',
    subTitle: 'Lorem',
    img: 'https://www.osulloc.com/upload/kr/ko/adminImage/IY/VF/20220518024839658QM.png?quality=80',
  },
  {
    id: 5,
    title: 'Lorem ipsum',
    subTitle: 'Lorem',
    img: 'https://www.osulloc.com/upload/kr/ko/adminImage/CW/AR/20220519100627460KR.jpg?quality=80',
  },
];

export default Slider;
