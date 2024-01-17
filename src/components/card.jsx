
import React from 'react';
import "../style/Card.css"; 

const Card = ({ title, description, imageSrc }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      
    </div>
  );
};

export default Card;
