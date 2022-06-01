import React from 'react';

const Pagination = ({ getButtonIndex }) => {
  return (
    <div className="paginationButtons">
      <button
        onClick={e => {
          getButtonIndex(e.target.innerHTML - 1);
        }}
      >
        1
      </button>
      <button
        onClick={e => {
          getButtonIndex(e.target.innerHTML - 1);
        }}
      >
        2
      </button>
    </div>
  );
};

export default Pagination;
