import React, { useState, useEffect } from 'react';
import SlideButton from './SlideButton';

const Slides = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    let slideInterval = setInterval(() => {
      setCurrentIndex(currentIndex => {
        return (currentIndex += currentIndex === 3 ? 0 : 1);
      });
      if (currentIndex === 3) {
        clearInterval(slideInterval);
      }
    }, 5000);
  }, [currentIndex]);

  const moveSlide = id => {
    const activedButton = document.getElementsByClassName('slideButton');

    if (id === 1) {
      setCurrentIndex(0);
      activedButton[0].style.fontWeight = '700';
      activedButton[0].style.color = '#ffffff';

      activedButton[1].style.fontWeight = '400';
      activedButton[1].style.color = '#999999';
      activedButton[2].style.fontWeight = '400';
      activedButton[2].style.color = '#999999';
      activedButton[3].style.fontWeight = '400';
      activedButton[3].style.color = '#999999';
    } else if (id === 2) {
      setCurrentIndex(1);
      activedButton[1].style.fontWeight = '700';
      activedButton[1].style.color = '#ffffff';

      activedButton[0].style.fontWeight = '400';
      activedButton[0].style.color = '#999999';
      activedButton[2].style.fontWeight = '400';
      activedButton[2].style.color = '#999999';
      activedButton[3].style.fontWeight = '400';
      activedButton[3].style.color = '#999999';
    } else if (id === 3) {
      setCurrentIndex(2);
      activedButton[2].style.fontWeight = '700';
      activedButton[2].style.color = '#ffffff';

      activedButton[0].style.fontWeight = '400';
      activedButton[0].style.color = '#999999';
      activedButton[1].style.fontWeight = '400';
      activedButton[1].style.color = '#999999';
      activedButton[3].style.fontWeight = '400';
      activedButton[3].style.color = '#999999';
    } else if (id === 4) {
      setCurrentIndex(3);
      activedButton[3].style.fontWeight = '700';
      activedButton[3].style.color = '#ffffff';

      activedButton[0].style.fontWeight = '400';
      activedButton[0].style.color = '#999999';
      activedButton[1].style.fontWeight = '400';
      activedButton[1].style.color = '#999999';
      activedButton[2].style.fontWeight = '400';
      activedButton[2].style.color = '#999999';
    }
  };

  return (
    <header className="productHeader">
      <div className="headerCarousel">
        <ul
          className="slidesWrapper"
          style={{
            transform: `translateX(${-(55 * currentIndex)}rem)`,
          }}
        >
          {SLIDE_LIST.map(data => (
            <li className="slideItem" key={data.id}>
              <div className="slideTextBox">
                <span className="slideName">{data.name}</span>
                <span className="slideContent">{data.content1}</span>
                <span className="slideContent">{data.content2}</span>
              </div>
              <img
                className="slideCoverImage"
                src={data.img_url}
                alt={data.name}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="slideButtonsWrapper">
        {SLIDE_LIST.map(data => (
          <SlideButton key={data.id} buttonData={data} moveSlide={moveSlide} />
        ))}
      </div>
    </header>
  );
};

const SLIDE_LIST = [
  {
    id: 1,
    name: '??????',
    content1: '???????????? ?????? ?????? ??? ???????????? ??????',
    content2: '???????????? ?????? ???????????????.',
    img_url:
      'https://images.unsplash.com/photo-1546852199-2d8e8c4aaada?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
  },

  {
    id: 2,
    name: '??????/?????????/??????',
    content1: '????????? ?????? ???????????? ??????',
    content2: '?????? ?????? ????????? ???????????????.',
    img_url:
      'https://images.unsplash.com/photo-1582793988951-9aed5509eb97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
  },
  {
    id: 3,
    name: '?????????',
    content1: '??????, ???????????? ?????????',
    content2: '????????? ???????????? ???????????????.',
    img_url:
      'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2678&q=80',
  },
  {
    id: 4,
    name: '???????????????',
    content1: '????????? ????????? ?????????',
    content2: '???????????? ???????????????.',
    img_url:
      'https://images.unsplash.com/38/QoR8Bv1S2SEqH6UcSJCA_Tea.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
  },
];

export default Slides;
