import React from 'react';
import './Slider.scss';
import rightArrow from './icons/right-arrow.svg';
import leftArrow from './icons/left-arrow.svg';

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === 'next' ? 'btnSlide next' : 'btnSlide prev'}
    >
      <img src={direction === 'next' ? rightArrow : leftArrow} />
    </button>
  );
}
