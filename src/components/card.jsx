import React from 'react';
import { Link } from 'react-router-dom';
import "../style/Card.css"; 


const Card = ({ id, title, cover }) => {
  return (
    <div className="card">
      <Link to={`/logement/${id}`} className="card-link">
   
        <img src={cover} alt={title} />
        <h3>{title}</h3>
      </Link>  
  </div>
 
  );
};

export default Card;
