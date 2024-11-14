import React, { useEffect, useState } from "react";
import "./style.css";
import { NavBar } from "../header";
import { Link } from "react-router-dom";

import { gsap } from "gsap";
import SteelSheet from "../SteelSheet";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";



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
            <h2 className="catalogue-title">Líderes en Aceros</h2>
            <p className="catalogue-description">
            Nuestra empresa es líder en la venta de acero en Uruguay.
            Contamos con una amplia variedad de productos de acero, ofreciendo
            soluciones para diferentes sectores como la construcción,
            automotriz, la industria y la fabricación.
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
                  transform="rotate(-50)"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </div>
            </div>
          </div>
        </div>
        
        <div className="home-bottom-row">
          <p>Buscanos en Google Maps</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d410.0220973319345!2d-56.2392878!3d-34.7007209!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a1cd0dee1b74d7%3A0x9d3355e7c66adcd2!2sAcerospaisano%20S.A.!5e0!3m2!1ses!2suy!4v1730815336951!5m2!1ses!2suy"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="map"
          > 
          </iframe>
        </div>
      </div>
      <div className="transparent-section"></div>

      {/* Div that follows the viewport */}
      <motion.div
        className="follow-div"
          style={{
            position: isFixed ? "fixed" : "absolute",
            top: isFixed===null ? "10%" : isFixed ? "20%" : "28%", // Adjust fixed position
            left: isFixed ? "50%" : "50%", // Center horizontally
            zIndex: isFixed ? 10 : "auto",
          }}
        >

        <SteelSheet />
      </motion.div>

    </section>
  );
};
