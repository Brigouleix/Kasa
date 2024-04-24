import PropTypes from 'prop-types';
import { useState } from 'react';
import React from 'react';
import arrowRight from '../assets/arrow-right.png'; 

function Collapse({ title, infos, page }) { 
    
    console.log(infos);
    const [isOpen, setOpen] = useState(false) 

    const toggleInfoLogement = () => { 
        setOpen(!isOpen); 
    }

    return (
        <article className="collapse-bar"> {}
            <div className={page === "fiche" ? 'collapse-header header-fiche' : 'collapse-header header-about'} onClick={toggleInfoLogement}> {}
                <h2>{title}</h2>
                <img src={arrowRight} alt="arrow" className={isOpen ? "arrow-down" : "arrow-up"} /> {

                }
            </div>
            {
                 }
            <section className={isOpen ? "collapse-content collapse-content-show" : "collapse-content collapse-content-hide"}>
                <div className={isOpen ? "collapse-infos p-show" : "collapse-infos p-hide"}>
                    <p>{infos}</p>
                </div>
            </section>
        </article>
    )
}

Collapse.propTypes = { 
    title: PropTypes.string,
    infos: PropTypes.string,
}

Collapse.defaultProps = { 
    title: "Title",
    infos: "Informations",
}


export default Collapse