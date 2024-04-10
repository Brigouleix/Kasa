import React from 'react';

import Carousel from './carroussel';

import data from "../assets/data";
import InfoLogement from './infosLogement';
import RatingStars from './rating';
import { useParams } from "react-router-dom";








const BodyLogement = () => {
    const { id } = useParams();
    const card = data.find(
      (card) => card.id === id
    );
    
    return (
      <div className="logementBody">
        
        <Carousel pictures={card.pictures} />
        <RatingStars card={card} />
        <InfoLogement card={card} />
      </div>
    );
  };
  

export default BodyLogement;

