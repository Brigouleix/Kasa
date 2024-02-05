// Carousel.jsx
import React, { useState } from "react";
import "../style/Carousel.css"; // Assurez-vous d'ajuster le chemin du fichier CSS selon votre structure de projet.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  return (
    <div className="carousel-container">
      <img className="carousel-image" src={pictures[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      {pictures.length > 1 && (
        <>
          <div className="arrow left" onClick={goToPrevious}><FontAwesomeIcon icon={faAngleLeft} /></div>
          <div className="arrow right" onClick={goToNext}><FontAwesomeIcon icon={faAngleRight} /></div>
        </>
      )}
      {pictures.length > 1 && (
        <div className="slide-number">
          {currentIndex + 1} / {pictures.length}
        </div>
      )}
    </div>
  );
};

export default Carousel;
