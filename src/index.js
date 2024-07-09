import React from 'react';
import ReactDOM from 'react-dom/client';
// router wrapper from react router dom
import { BrowserRouter as Router } from 'react-router-dom';
// react toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// importing required components
import { CartProvider, FilterProvider } from './context';
import { ScrollToTop } from './components';
import App from './App';
// base css file
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <FilterProvider>
          <Router>
            <ToastContainer position={"bottom-right"} closeButton={false} autoClose={3000} />
            <ScrollToTop />
            <App />
          </Router>
      </FilterProvider>
    </CartProvider>
  </React.StrictMode>
);
