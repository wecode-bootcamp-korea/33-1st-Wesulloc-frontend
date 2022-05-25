import React from 'react';

const ProductItems = ({ data }) => {
  const { id, name, price } = data;

  return (
    <li className="product" key={id}>
      <div className="productImageBox">
        <span>{id}</span>
      </div>
      <div className="productTextBox">
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </li>
  );
};

export default ProductItems;
