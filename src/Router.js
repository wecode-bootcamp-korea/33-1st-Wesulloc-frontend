import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import ProductList from './pages/products/ProductList/ProductList';
import WeeklyBest from './pages/products/BestProducts/WeeklyBest';
import SummerGift from './pages/products/BestProducts/SummerGift';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/WeeklyBest" element={<WeeklyBest />} />
        <Route path="/SummerGift" element={<SummerGift />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
