import React from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './home';
import logo from "../assets/logo.png"
import Header from "../components/header"
import Footer from "../components/footer";
import AboutPage from '../pages/about';
import ErrorBody from '../components/error';






const ErrorPage = () => {


    return (
  
      <section>
        
        <header>
        <Header />
        </header>
        
          
  
        <ErrorBody />
        
  
        
        
        <footer>
        <Footer />
        </footer>
        
         
      </section>
    );
  };
  
  export default ErrorPage;
  