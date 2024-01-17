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
      
        <div>

          <h1>Bienvenue sur notre site de logements</h1>

        </div>

      <Body />
      

      
      
      <footer>
      <Footer />
      </footer>
      
       
    </section>
  );
};

export default HomePage;
