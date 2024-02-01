import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Header from "../components/header"
import Logement from "../components/header"
import Footer from "../components/footer";



const LogementPage = () => {


    return (
  
      <section>
        
        <header>
        <Header />
        </header>
        
          
  
        <BodyLogements />
        
  
        
        
        <footer>
        <Footer />
        </footer>
        
         
      </section>
    );
  };
  
  export default HomePage;