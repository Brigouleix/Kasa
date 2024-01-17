import React from "react";

import Banner from "../components/banner"; 

// Body.jsx

import Card from "../components/card";

import "../style/Body.css"; // Assurez-vous d'avoir le bon chemin vers votre fichier de style SCSS

const cardsData = [
    {
        title: 'Card 1',
        description: 'Description de la carte 1',
        imageSrc: 'chemin-vers-image-1.jpg',
      },
      {
        title: 'Card 2',
        description: 'Description de la carte 2',
        imageSrc: 'chemin-vers-image-2.jpg',
      },
      {
        title: 'Card 3',
        description: 'Description de la carte 3',
        imageSrc: 'chemin-vers-image-3.jpg',
      },
      {
        title: 'Card 4',
        description: 'Description de la carte 4',
        imageSrc: 'chemin-vers-image-4.jpg',
      },
      {
        title: 'Card 5',
        description: 'Description de la carte 5',
        imageSrc: 'chemin-vers-image-5.jpg',
      },
      {
        title: 'Card 6',
        description: 'Description de la carte 6',
        imageSrc: 'chemin-vers-image-6.jpg',
      },
    ];
    

const Body = () => {
  return (
    <div className="body">
      <Banner />
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Body;
