import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import "../style/InfoLogement.css";





  

const InfoLogement = ({ card }) => {
    const cardsData = [
        {
            title: "Description",
            description: card.description,
        },
        {
            title: "Equipements",
            description: card.equipments.map((equipment, index) => <span key={index}>{equipment}<br /></span>), 
        },
    ];
    const [activeDescriptions, setActiveDescriptions] = useState(Array(cardsData.length).fill(false));
    
    const toggleContent = (index) => {
        const newActiveDescriptions = [...activeDescriptions];
        newActiveDescriptions[index] = !newActiveDescriptions[index];
        setActiveDescriptions(newActiveDescriptions);
    };
    
    return (
        <div className="bodyAbout">
            <div className="volet-container-logement">
                {cardsData.map((card, index) => (
                    <div className="volets-logement" key={index} onClick={() => toggleContent(index)}>
                        <div className="title">
                        {card.title}
                            <span className={`scroll-down${activeDescriptions[index] ? ' rotated' : ''}`} onClick={(e) => {e.stopPropagation(); toggleContent(index)}}>
                                <FontAwesomeIcon icon={faAngleUp} />
                            </span>
                            </div>
                            {activeDescriptions[index] && <span className="description-logement">{card.description}</span>}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default InfoLogement ;