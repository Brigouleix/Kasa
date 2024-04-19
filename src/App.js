// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home.jsx';

import ErrorPage from './pages/error.jsx';
import AboutPage from './pages/about.jsx';
import ProprietyPage from './pages/propriety.jsx';
import LogementPage from "./pages/logement.jsx";

import "./style/style.css"


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/propriety" element={<ProprietyPage />} />
      <Route path="/logement/:id" element={<LogementPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
