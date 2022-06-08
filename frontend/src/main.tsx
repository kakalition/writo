import axios from 'axios';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './features/homepage/HomePage';
import './index.css';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000';

function Logout() {
  useEffect(() => { axios.post('/logout'); }, []);
  return <div />;
}

function Test() {
  return (<div className="w-screen h-screen bg-gray-900" />);
}

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<Test />} />
        {/*         <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/app" element={<NoteListPage />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
