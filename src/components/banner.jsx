import React from 'react';
import banniere from "../assets/header.png"



function Banner() {
    return (
       
        <div>
            <img src={banniere} alt="Bannière de la page d'accueil" />
        </div>
    );
}

export default Banner;