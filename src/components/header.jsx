
import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './banner'; 

import logo from "../assets/logo.png"

const Header = () => {
  return (
    <header>
      {}
      <div className="logo-nav">
        <div>
          <img src={logo} alt="Logo Kasa" />
        </div>
        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            {/* <li><Link to="/about">À propos</Link></li> */}
            {}
          </ul>
        </nav>
      </div>

      {}
      <div className="banner">
        <Banner />
      </div>
    </header>
  );
};

export default Header;
