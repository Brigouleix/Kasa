import React from 'react';
import banniereAbout from "../assets/about-header.png"
import "../style/Banner.css"


function BannerAbout() {
    return (
       
        <div >
            <img className= "img-banner" src={banniereAbout} alt="Bannière de la page d'accueil" />
        </div>
    );
}

export default BannerAbout;