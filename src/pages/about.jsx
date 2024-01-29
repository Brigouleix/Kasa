import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Header from "../components/header"
import Footer from "../components/footer";
import BannerAbout from '../components/bannerAbout';
import BodyAbout from '../components/bodyAbout';

const AboutPage = () => {


  return (
    <div>
      <Header />
      
      <div>

        <BannerAbout />

      </div>
      <div>
        <BodyAbout />
      </div>

      <div>

        <Footer />
        
      </div>
    </div>

  );
};

export default AboutPage;
