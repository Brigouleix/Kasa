import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './carroussel';
import Header from './header';
import data from "../assets/data";
import InfoLogement from './infosLogement';
import RatingStars from './rating';









const BodyLogement = () => {
    const firstDataItem = data[0]; // Prenez la première entrée de vos données (vous pouvez adapter cela selon votre structure de rendu).

    return (
      <div>
        {/* Autres éléments de rendu de vos données ici */}
        <Carousel pictures={firstDataItem.pictures} />
        <RatingStars rating={parseInt(data.rating)}/>
        <InfoLogement />
      </div>
    );
  };
  

export default BodyLogement;