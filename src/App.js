// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home.jsx';

import ErrorPage from './pages/error.jsx';
import AboutPage from './pages/about.jsx';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

export default App;
