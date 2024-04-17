import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import "../style/BodyAbout.css";

const cardsData = [
  {
    title: "Fiabilité",
    description: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    title: "Respect",
    description: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    description: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Sécurité",
    description: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

const BodyAbout = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleContent = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bodyAbout">
      <div className="volet-container">
        {cardsData.map((card, index) => (
          <div className="volets" key={index} onClick={() => toggleContent(index)}>
            <div className="title">
              {card.title}
              <span className={`scroll-down${activeIndex === index ? ' rotated' : ''}`} onClick={(e) => {e.stopPropagation(); toggleContent(index)}}>
                <FontAwesomeIcon icon={faAngleUp} />
              </span>
            </div>
            <div className={`description${activeIndex === index ? ' visible' : ''}`}>
              {card.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyAbout;
