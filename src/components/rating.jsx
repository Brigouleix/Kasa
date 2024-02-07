import React from "react";
import "../style/Rating.css";
import data from "../assets/data";

const RatingStars = ({ card }) => {
  const maxStars = 5;

  return (
    <div className="rating-container">
      <div className="tags-container">
        
          <div key={card.id} className="tag">
            {card.tags.map((tag, index) => (
              <span key={index} className="tag-item">
                {tag}
              </span>
            ))}
          </div>
        
      </div>
      
      <div className="rating-stars">
        {[...Array(maxStars)].map((_, index) => (
          <span
            key={index}
            className={index < card.rating ? "star-filled" : "star-empty"}
          >
            &#9733;
          </span>
        ))}
      </div>
      
    </div>
  );
};

export default RatingStars;
