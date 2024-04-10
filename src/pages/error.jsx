import React from 'react'



import Header from "../components/header"
import Footer from "../components/footer";

import ErrorBody from '../components/error';






const ErrorPage = () => {


    return (
  
      <section>
        
        <header>
        <Header />
        </header>
        
          
  
        <ErrorBody />
        
  
        
        
        <footer>
        <Footer />
        </footer>
        
         
      </section>
    );
  };
  
  export default ErrorPage;
  