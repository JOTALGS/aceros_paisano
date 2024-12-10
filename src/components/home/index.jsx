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
            Hablamos de la mejor calidad y precisión. 
            La calidad no es negociable.
            </p>
            <div className="catalogue-button-wrapper">
              <Link to={"/catalogue"} className="catalogue-button">
                Explorar Productos
              </Link>
            </div>
          </div>
        </div>
        
        <div className="home-bottom-row">
          <div className="about-intro">
          <p className="about-description">
              NUESTRA EMPRESA ES LÍDER EN LA VENTA DE ACERO EN URUGUAY.
              CONTAMOS CON UNA AMPLIA VARIEDAD DE PRODUCTOS DE ACERO, OFRECIENDO
              SOLUCIONES PARA DIFERENTES SECTORES COMO LA CONSTRUCCIÓN,
              AUTOMOTRIZ, LA INDUSTRIA Y LA FABRICACIÓN.
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
