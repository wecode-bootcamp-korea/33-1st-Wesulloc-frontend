import React from 'react';

const ProductSortTab = ({ checkSort, sortStyle, sortStyleChange }) => {
  return (
    <>
      <span>{SORTING_LIST.name}</span>
      <ul>
        {SORTING_LIST.map(data => (
          <li key={data.id}>
            <button
              type="button"
              className={
                sortStyle === data.id ? `styleChangedSortButton` : `sortButton`
              }
              value={data.value}
              onClick={e => {
                checkSort(e.target.value);
                sortStyleChange(data.id);
              }}
            >
              {data.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

const SORTING_LIST = [
  {
    id: 1,
    name: '리뷰많은순',
    value: 'reviews',
  },
  {
    id: 2,
    name: '판매순',
    value: 'sales',
  },
  {
    id: 3,
    name: '신상품순',
    value: 'new',
  },
  {
    id: 4,
    name: '높은 가격순',
    value: 'price_desc',
  },
  {
    id: 5,
    name: '낮은 가격순',
    value: 'price_asc',
  },
];

export default ProductSortTab;
