import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios';

// axios.defaults.baseURL = 'https://portfolio-server-zqia.onrender.com';
axios.defaults.baseURL = 'http://localhost:3030';
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
