import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Header from "../components/header"
import Footer from "../components/footer";


const HomePage = () => {


  return (
    <div>
      <Header />
      
      <div>
        
        <h1>Bienvenue sur notre site de logements</h1>
       
      </div>
      <div>
        
        <Footer />
      </div>
    </div>

  );
};

export default HomePage;
