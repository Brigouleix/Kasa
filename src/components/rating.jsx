import React from "react";
import "../style/Rating.css";
import data from "../assets/data";

const RatingStars = ({ card }) => {
  const maxStars = 5;
  

  return (


    
    

      <div className="tags-container">
        <div className="info">
          <div className="info-loc">
            <div className="titre" key={card.id}>
              <h3 className="title-item">{card.title}</h3>
            </div>
            <div className="location" key={card.id}>
              <p className="title-location">{card.location}</p>
            </div>
          </div>

          <div className="host" key={card.id}>
            <p className="host-name">{card.host.name}</p>
            <img className="host-profile" src={card.host.picture}/>
          </div>
        </div>
        
        <div className="rating-container">
            <div key={card.id} className="tag">
              {card.tags.map((tag, index) => (
                <span key={index} className="tag-item">
                  {tag}
                </span>
              ))}
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
    </div>
  );
};

export default RatingStars;




