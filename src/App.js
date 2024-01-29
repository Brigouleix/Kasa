// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home.jsx';

import ErrorPage from './pages/error.jsx';
import AboutPage from './pages/about.jsx';
import ProprietyPage from './pages/propriety.jsx';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/propriety" element={<ProprietyPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
