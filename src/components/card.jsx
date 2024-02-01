
import React from 'react';
import "../style/Card.css"; 
import data from '../assets/data';



const Card = ({ title, description, cover }) => {
  return (
    <div className="card">
      <img src={cover} alt={title} />
      <h3>{title}</h3>
      
    </div>
  );
};

export default Card;
