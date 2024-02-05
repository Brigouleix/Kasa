import React, { useState } from "react";

import data from "../assets/data";
import "../style/Rating.css"



const RatingStars = ({ rating }) => {
    const maxStars = 5;
  
    return (
      <div className="rating-stars">
        {[...Array(maxStars)].map((_, index) => (
          <span
            key={index}
            className={index < rating ? "star-filled" : "star-empty"}
          >
            &#9733; {/* Utilisez le code HTML du caractère d'étoile Unicode */}
          </span>
        ))}
      </div>
    );
  };
  
  
  export default RatingStars;