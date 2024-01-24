import React from 'react';
import banniere from "../assets/header.png"
import "../style/Banner.css"


function Banner() {
    return (
       
        <div className='banner' >
            <img className= "img-banner" src={banniere} alt="Bannière de la page d'accueil" />
            <div class="texte">Chez vous, partout et ailleurs</div>
        
        </div>
    );
}

export default Banner;