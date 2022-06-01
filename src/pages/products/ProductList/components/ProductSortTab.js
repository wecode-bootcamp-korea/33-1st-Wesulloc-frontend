import React from 'react';

const ProductSortTab = () => {
  return (
    <ul>
      {SORTING_LIST.map(data => (
        <li key={data.id}>{data.sortingItem}</li>
      ))}
    </ul>
  );
};

const SORTING_LIST = [
  {
    id: 1,
    sortingItem: '리뷰많은순',
  },
  {
    id: 2,
    sortingItem: '판매순',
  },
  {
    id: 3,
    sortingItem: '신상품순',
  },
  {
    id: 4,
    sortingItem: '높은 가격순',
  },
  {
    id: 5,
    sortingItem: '낮은 가격순',
  },
];

export default ProductSortTab;
