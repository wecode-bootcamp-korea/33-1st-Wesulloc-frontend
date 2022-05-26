import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Products from './pages/products/Products';
import WeeklyBest from './pages/products/BestProducts/WeeklyBest';
import SummerGift from './pages/products/BestProducts/SummerGift';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Products" element={<Products />} />
        <Route path="/WeeklyBest" element={<WeeklyBest />} />
        <Route path="/SummerGift" element={<SummerGift />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
