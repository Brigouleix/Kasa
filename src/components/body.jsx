import React from "react";

import Banner from "../components/banner"; 


import Card from "../components/card";

import "../style/Body.css"; 


import data from "../assets/data"



    

const Body = () => {
  return (
    <div className="body">
      <Banner />
      <div className="cards-container">
        {data.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Body;
