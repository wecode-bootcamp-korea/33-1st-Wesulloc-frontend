import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/products/productDetail/ProductDetail';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
