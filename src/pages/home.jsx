import React from 'react'


import "../style/Home.css"

import Header from "../components/header"
import Footer from "../components/footer";
import Body from '../components/body';



const HomePage = () => {


  return (

    <section>
      
      <div>
      <Header />
      </div>
      
        

      <Body />
      

      
      
      <div>
      <Footer />
      </div>
      
       
    </section>
  );
};

export default HomePage;
