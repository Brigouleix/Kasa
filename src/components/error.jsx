import React from 'react';
import { Link } from 'react-router-dom';
import "../style/Error.css"
import "../style/Header.css"



const ErrorBody = () => {
    return(
        <div className='errorPage'>

            <h1>404</h1>
            <p>Oups! La page que vous avez demandez n'existe pas.</p>
            <p><Link to="/">Retourner sur la page d'accueil</Link></p>

        </div>

    );



};

export default ErrorBody ;