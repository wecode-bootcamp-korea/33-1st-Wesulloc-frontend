import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import ProductList from './pages/products/ProductList/ProductList';
import BestProductList from './pages/products/BestProducts/BestProductList';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/Product" element={<BestProductList />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
