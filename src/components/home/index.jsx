import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./style.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { NavBar } from "../header";

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
        <div className="home-top-row">
          
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

      {/* 
      Div that follows the viewport
      <div className="follow-div">
        <SteelSheet />
      </div>
       */}
    </section>
  );
};
