import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { TokenProvider } from './context/TokenContext';
import { HandlerProvider } from './context/HandlerContext';
import { AdminProvider } from './context/adminContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AdminProvider>
      <HandlerProvider>
        <TokenProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </TokenProvider>
      </HandlerProvider>
    </AdminProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
