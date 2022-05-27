import React, { useState, useEffect } from 'react';

const Slides = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    setInterval(() => {
      setCurrentIndex(currentIndex => {
        return (currentIndex += currentIndex === 3 ? 0 : 1);
      });
    }, 2000);
  }, [currentIndex]);

  return (
    <header className="productHeader">
      <div className="headerCarousel">
        <ul
          className="slidesWrapper"
          style={{
            transform: `translate3d(${-(55 * currentIndex)}rem, 0, 0)`,
          }}
        >
          {SLIDE_LIST.map(data => (
            <li className="slideItem" key={data.id}>
              <div className="slideTextBox">
                <p className="slideName">{data.name}</p>
                <p className="slideContent">{data.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="slideButtonsWrapper">
        {SLIDE_LIST.map((data, index) => (
          <button className="slideButton" key={data.id}>
            {data.name}
          </button>
        ))}
      </div>
    </header>
  );
};

const SLIDE_LIST = [
  {
    id: 1,
    name: '명차',
    content: '고귀하고 품격 있는 티 라이프를 위한 오설록의 명차 라인입니다.',
  },

  {
    id: 2,
    name: '녹차/발효차/홍차',
    content: '유기농 제주 차밭에서 자란 우리 녹차 발효차 라인입니다.',
  },
  {
    id: 3,
    name: '허브티',
    content: '꽃잎, 과일향이 가득한 풍미가 돋보이는 라인입니다.',
  },
  {
    id: 4,
    name: '블렌디드티',
    content: '제주의 다양한 품경과 꽃내음을 담았습니다.',
  },
];

export default Slides;
