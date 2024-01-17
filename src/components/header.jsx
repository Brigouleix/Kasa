
import React from 'react';
import { Link } from 'react-router-dom';

import AboutPage from '../pages/about';
import logo from "../assets/logo.png"
import "../style/Header.css"
const Header = () => {
  return (
    <header>
      
      <div className="logo-nav">
        <div>
          <img src={logo} alt="Logo Kasa" />
        </div>
        <nav className= "nav-link">
          
          <Link to="/">Accueil</Link>
          <Link to="/about">À propos</Link>
           
         
        </nav>
      </div>

    </header>
  );
};

export default Header;
