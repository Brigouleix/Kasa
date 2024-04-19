import React from 'react';
import banniereAbout from "../assets/about-header.png"



function BannerAbout() {
    return (
       
        <div className= "banner" >
            <img className= "img-banner" src={banniereAbout} alt="Bannière de la page d'accueil" />
        </div>
    );
}

export default BannerAbout;