import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./style.css";
import SteelSheet from "../SteelSheet";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin with gsap
gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  useEffect(() => {
    const followDiv = document.querySelector(".follow-div");

    // Create a GSAP timeline for smoother control
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "bottom bottom",
        scrub: true,  // Smooth scrubbing
        markers: false,  // Enable markers for debugging if necessary
      },
    });

    // Move the div from right (50%) to left (-50%)
    tl.to(followDiv, {
      xPercent: -200,  // Move 50% to the left first
      duration: 1,    // Adjust this to control the speed of the animation
    }).to(followDiv, {
      xPercent: -110,   // Move 50% to the right
      duration: 1,    // Adjust the same way here
    });

  }, []);

  return (
    <section id="home" className="home">
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
        <div className="home-welcome">
          <h1 className="home-title">Fabricamos aceros de la más alta calidad</h1>
          <h2 className="home-subtitle">Garantizamos resistencia y durabilidad</h2>
          <div className="divider"></div>
          <p className="home-text">
            Nuestro equipo de profesionales altamente capacitados está siempre dispuesto a asesorar y ayudar a nuestros clientes a encontrar la solución de acero que mejor se adapte a sus necesidades.
          </p>
        </div>
        <div className="home-bottom-row">
          <p>Google Maps Content Here</p>
        </div>
      </div>
      <div className="transparent-section"></div>

      {/* 
      Div that follows the viewport
      <div className="follow-div">
        <SteelSheet />
      </div>
       */}
    </section>
  );
};
