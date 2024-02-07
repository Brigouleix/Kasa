import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './carroussel';
import Header from './header';
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
      <div>
        
        <Carousel pictures={card.pictures} />
        <RatingStars card={card} />
        <InfoLogement InfoLogement={card} />
      </div>
    );
  };
  

export default BodyLogement;

