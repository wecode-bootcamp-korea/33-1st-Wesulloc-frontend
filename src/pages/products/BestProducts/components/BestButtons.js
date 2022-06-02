import React from 'react';

const BestButtons = ({ checkBestValue, buttonColor, buttonColorChange }) => {
  return (
    <>
      <div className="header">
        <div className="imageWrapper">
          <img src={IMG_SRC[`${buttonColor}`]} alt="back" />
        </div>
        <p>베스트</p>
      </div>
      <div className="topButtonWrapper">
        <form className="topButtons">
          {BEST_LIST.map(data => (
            <button
              type="button"
              key={data.id}
              value={data.id}
              className={buttonColor === data.id ? `actived` : `notActived`}
              onClick={e => {
                checkBestValue(e.target.value);
                buttonColorChange(data.id);
              }}
            >
              {data.name}
            </button>
          ))}
        </form>
      </div>
      <div className="productListText">
        <span>{CATEGORY_SUB_TEXT[`${buttonColor}`]}</span>
      </div>
    </>
  );
};

const BEST_LIST = [
  {
    id: 1,
    name: '위클리 베스트',
  },
  {
    id: 2,
    name: '여름맞이 선물',
  },
];

const IMG_SRC = {
  1: 'https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  2: 'https://images.unsplash.com/photo-1484980859177-5ac1249fda6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1829&q=80',
};

const CATEGORY_SUB_TEXT = {
  1: '2022년 5월 4째주',
  2: '더운 날 마음까지 시원해지는 아이스티 하나 건네보세요.',
};

export default BestButtons;
