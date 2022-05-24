import React from 'react';

const ProductList = ({ data }) => {
  return (
    <li className="product" key={data.id}>
      <div className="productImageBox">
        <span>{data.id}</span>
      </div>
      <div className="productTextBox">
        <p>{data.name}</p>
        <p>{data.price}</p>
      </div>
    </li>
  );
};

export default ProductList;
