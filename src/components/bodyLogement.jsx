import React from 'react';

import Carousel from './carroussel';

import data from "../assets/data";
import InfoLogement from './Collapse';
import RatingStars from './rating';
import { useParams } from "react-router-dom";
import ErrorBody from '../components/error';
import Collapse from './Collapse';





function listefy(equipments) {
  let listEquiepements = "";
  equipments.map((equipments) => (listEquiepements += ` ${equipments} \n`));

  return listEquiepements;
}


const BodyLogement = () => {
    const { id } = useParams();
    const card = data.find(
      (card) => card.id === id
    );
    if (!card){
      return < ErrorBody /> 
  }
    
    return (
      <div className="logementBody">
        
        <Carousel pictures={card.pictures} />
        <RatingStars card={card} />
        <div className='fiche-collapses'>
          <div className="collapse">
          <Collapse title="Description" infos={card.description} page="fiche" />
          </div>
          <div className="collapse">
          <Collapse title="Equipements" infos={listefy(card.equipments)} page="fiche"/>
          </div> 
        </div>
        
      </div>
    );
  };
  

export default BodyLogement;

