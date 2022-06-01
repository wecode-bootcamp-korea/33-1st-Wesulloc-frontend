import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import { AuthContextProvider } from './Context/authContext';
import './styles/common.scss';
import './styles/reset.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </AuthContextProvider>
);
