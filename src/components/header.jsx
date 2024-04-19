
import React from 'react';
import { Link } from 'react-router-dom';


import logo from "../assets/logo.png"



const Header = () => {
  return (
    <header>
      
      <div className="logo-nav">
        <div>
          <Link to="/">
            <img className='logo' src={logo} alt="Logo Kasa" />
          </Link>
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
