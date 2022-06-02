import React from 'react';

const Pagination = ({ getButtonIndex }) => {
  return (
    <div className="paginationButtons">
      {PAGINATION_LIST.map(data => (
        <button
          className="pageButton"
          key={data.id}
          onClick={e => {
            getButtonIndex(e.target.innerHTML - 1);
          }}
        >
          {data.id}
        </button>
      ))}
    </div>
  );
};

const PAGINATION_LIST = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

export default Pagination;
