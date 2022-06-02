import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './pages/main/Main';
import Login from './pages/login/Login';
import Signup from './pages/signup/SignUp';
import ProductList from './pages/products/ProductList/ProductList';
import WeeklyBest from './pages/products/BestProducts/WeeklyBest';
import SummerGift from './pages/products/BestProducts/SummerGift';
import ProductDetail from './pages/products/productDetail/ProductDetail';
import Cart from './pages/cart/Cart';
import AuthContext from './Context/authContext';

const Router = () => {
  const authContext = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {!authContext.isLoggedIn && <Route path="/login" element={<Login />} />}
        {!authContext.isLoggedIn && (
          <Route path="/signup" element={<Signup />} />
        )}
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/WeeklyBest" element={<WeeklyBest />} />
        <Route path="/SummerGift" element={<SummerGift />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        {authContext.isLoggedIn && <Route path="/cart" element={<Cart />} />}
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
