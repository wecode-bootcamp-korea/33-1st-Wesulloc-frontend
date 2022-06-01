import React from 'react';

const CategoryFilterTab = ({ getCategoryIndex }) => {
  return (
    <form>
      {CATEGORY_LIST.map(data => (
        <li key={data.id}>
          <button
            type="button"
            className="categoryButton"
            value={data.id}
            onClick={e => {
              getCategoryIndex(e.target.value);
            }}
          >
            {data.categoryName}
          </button>
        </li>
      ))}
    </form>
  );
};

const CATEGORY_LIST = [
  {
    id: 1,
    categoryName: '전체상품',
  },
  {
    id: 2,
    categoryName: '티세트',
  },
  {
    id: 3,
    categoryName: '명차',
  },
  {
    id: 4,
    categoryName: '녹차/말차',
  },
  {
    id: 5,
    categoryName: '발효차/홍차',
  },
  {
    id: 6,
    categoryName: '블렌디드티',
  },
  {
    id: 7,
    categoryName: '허브티',
  },
  {
    id: 8,
    categoryName: '티밀크티/아이스티',
  },
];

export default CategoryFilterTab;
