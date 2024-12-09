import React, { useEffect, useState } from "react";
import "./style.css";
import { NavBar } from "../header";
import { Link } from "react-router-dom";

import { gsap } from "gsap";
import SteelSheet from "../SteelSheet";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import ButtonHoverBg from "../CustomButton/ButtonHoverBg";



export const Home = () => {
  const { scrollYProgress } = useScroll();
  const [isFixed, setIsFixed] = useState(null);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.28 ) {
      setIsFixed(false); // Mark as fixed when scrollYProgress is between 0.177 and 0.73
    } else {
      setIsFixed(true); // Unmark fixed if scrollYProgress exceeds 0.73 or goes below 0.177
    }
    console.log("Page scroll: ", latest)
  });


  return (
    <section id="home" className="home">
      <NavBar />
      {/* Initial webpage mask animation */}
      <div className="init-baseline">
        <div className="init-title">
          <img src="./images/titulo.jpg" alt="title" className="img-title" />
        </div>
        <div className="baseline-start">
        </div>
      </div>

      {/* Container for the home section */}
      <div className="home-container">
        <div className="top">
          <div className="home-top-row">
            <div className="home-top-grid">
              <div className="image-column image-left">
                <img src="./images/aceros.jpg" alt="Left Image" />
              </div>
              <div className="content-column">

              </div>
              <div className="image-column image-right">
                <img src="./images/paisano.jpg" alt="Right Image" />
              </div>
            </div>
          </div>
        </div>

        <div className="home-middle-row">
          <div className="catalogue-section">
            <p className="catalogue-description">
            Nuestra empresa es líder en la venta de acero en Uruguay.
            </p>
            <div className="catalogue-button-wrapper">
              <Link to={"/catalogue"} className="catalogue-button">
                Explorar Catálogo
              </Link>
              <div className="catalogue-arrow">
                <svg 
                  className="arrow-icon" 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  transform="rotate(-45)"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </div>
            </div>
          </div>
        </div>
        
        <div className="home-bottom-row">
          <div className="about-intro">
          <h2 className="catalogue-title">Líderes en Aceros</h2>
              <p className="about-description">
                Nuestra empresa es líder en la venta de acero en Uruguay.
                Contamos con una amplia variedad de productos de acero, ofreciendo
                soluciones para diferentes sectores como la construcción,
                automotriz, la industria y la fabricación.
              </p>
              <Link to={"/about"} >
                <ButtonHoverBg label="Sobre Nosotros" buttonStyles={"about-link-button"}/>
              </Link>
          </div>
        </div>
      </div>

      {/* Div that follows the viewport */}
      <motion.div
        className="follow-div"
          style={{
            position: isFixed ? "fixed" : "absolute",
            top: isFixed===null ? "8%" : isFixed ? "18%" : "40%", 
            left: isFixed ? "50%" : "50%", // Center horizontally
            zIndex: isFixed ? 10 : "0",
          }}
        >
        {/* <SteelSheet /> */}
        
      </motion.div>

    </section>
  );
};
