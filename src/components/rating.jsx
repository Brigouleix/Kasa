import React from "react";
import "../style/Rating.css";

const RatingStars = ({ card }) => {
  const maxStars = 5;

  return (
    <div className="container">
      <div className="tags-info-container">
        <div className="info-loc">
          <div className="titre" >
            <h3 className="title-item">{card.title}</h3>
          </div>
          <div className="location" >
            <p className="title-location">{card.location}</p>
          </div>
        </div>
        <div className="tags-container">
          <div className="tag">
            {card.tags.map((tag, index) => (
              <span key={index} className="tag-item">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="host-rating-container">
        <div className="host" >
          <p className="host-name">{card.host.name}</p>
          <img
            className="host-profile"
            src={card.host.picture}
            alt={`${card.id + 1}`}
          />
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
