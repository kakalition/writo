import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/custom.css';
import './css/utility.css';
import HomePage from './features/homepage/HomePage';
import LoginPage from './features/login/LoginPage';
import RegisterPage from './features/register/RegisterPage';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000';
ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
