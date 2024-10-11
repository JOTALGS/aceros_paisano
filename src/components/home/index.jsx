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
      <div className="home-container"></div>
      <div className="transparent-section"></div>
      <div className="home-container"></div>

      {/* Div that follows the viewport */}
      <div className="follow-div">
        <SteelSheet />
      </div>
    </section>
  );
};
