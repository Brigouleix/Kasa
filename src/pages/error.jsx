import React from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './home';
import logo from "../assets/logo.png"
import Header from "../components/header"
import Footer from "../components/footer";
import AboutPage from '../pages/about';

const ErrorPage = () => {


  return (
    <header>
        <div className="container">
            <div className="logo-nav">
            <div>
                <img src={logo} alt="Logo Kasa" />
            </div>
            <nav>
                <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/about">À propos</Link></li>
                
                </ul>
            </nav>
            </div>
            <div>

                <h1>404</h1>
                <p>Oups! La page que vous avez demandez n'existe pas.</p>
                <p><Link to="/">Retourner sur la page d'accueil</Link></p>

            </div>
            <div>

                <Footer />
                
            </div>
        </div>
    </header>
  );
};
export default ErrorPage