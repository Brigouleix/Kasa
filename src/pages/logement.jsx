import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Header from "../components/header";
import Bodylogement from "../components/bodyLogement";
import Footer from "../components/footer";



const LogementPage = () => {


    return (
  
      <section>
        
        <div>
        <Header />
        </div>
        
          
  
        <Bodylogement />
        
  
        
        
        <footer>
        <Footer />
        </footer>
        
         
      </section>
    );
  };
  
  export default LogementPage;