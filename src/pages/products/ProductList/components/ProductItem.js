import React from 'react';

const ProductItem = ({ data }) => {
  const { id, name, price, img_url } = data;

  return (
    <li className="product" key={id}>
      <div className="productImageBox">
        <img className="productImage" src={img_url} alt={name} />
      </div>
      <div className="productTextBox">
        <p>{name}</p>
        <p>{price}원</p>
      </div>
    </li>
  );
};

export default ProductItem;
