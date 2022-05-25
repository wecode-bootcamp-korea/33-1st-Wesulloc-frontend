import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cart from '../src/pages/cart/Cart';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
