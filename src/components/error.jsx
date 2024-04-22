import React from 'react';
import { Link } from 'react-router-dom';


const ErrorBody = () => {
    return(
        <div className='errorPage'>

            <h1>404</h1>
            <p className='errorText'>Oups! La page que vous avez demandez n'existe pas.</p>
            <p className='backHome'><Link to="/">Retourner sur la page d'accueil</Link></p>

        </div>

    );



};

export default ErrorBody ;