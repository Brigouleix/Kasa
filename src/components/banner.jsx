import React from 'react';
import banniere from "../assets/header.png"
import "../style/Banner.css"


function Banner() {
    return (
       
        <div >
            <img className= "img-banner" src={banniere} alt="Bannière de la page d'accueil" />
        </div>
    );
}

export default Banner;