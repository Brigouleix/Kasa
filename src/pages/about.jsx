import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Header from "../components/header"
import Footer from "../components/footer";


const AboutPage = () => {


  return (
    <div>
      <Header />
      
      <div>

        <h1>A PROPOS</h1>

      </div>
      <div>

        <Footer />
        
      </div>
    </div>

  );
};

export default AboutPage;
