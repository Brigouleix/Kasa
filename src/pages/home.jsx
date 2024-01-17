import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Header from "../components/header"
import Footer from "../components/footer";
import Body from '../components/body';



const HomePage = () => {


  return (

    <section>
      
      <header>
      <Header />
      </header>
      
        

      <Body />
      

      
      
      <footer>
      <Footer />
      </footer>
      
       
    </section>
  );
};

export default HomePage;
