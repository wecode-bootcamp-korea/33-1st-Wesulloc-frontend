import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import WeeklyBest from './pages/products/BestProducts/WeeklyBest';
import SummerGift from './pages/products/BestProducts/SummerGift';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/WeeklyBest" element={<WeeklyBest />} />
        <Route path="/SummerGift" element={<SummerGift />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
