import React from 'react'



import Header from "../components/header"
import Footer from "../components/footer";
import BannerAbout from '../components/bannerAbout';
import BodyAbout from '../components/bodyAbout';


const AboutPage = () => {


  return (
    <section>
      <div>
      <Header />
      </div>
      
      <div>

        <BannerAbout />

      
      
        <BodyAbout />
      </div>

      <div>

        <Footer />
        
      </div>
    </section>

  );
};

export default AboutPage;
