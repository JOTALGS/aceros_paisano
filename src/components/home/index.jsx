  import React, { useEffect, useRef, useState } from "react";
  import "./style.css";
  import { NavBar } from "../header";
  import { Link } from "react-router-dom";

  import { gsap } from "gsap";
  import SteelSheet from "../SteelSheet";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { motion, useMotionValueEvent, useScroll } from "framer-motion";
  import ButtonHoverBg from "../CustomButton/ButtonHoverBg";

  gsap.registerPlugin(ScrollTrigger);

  export const Home = () => {
    const descubrirRef = useRef()

    useEffect(() => {
      const lines = gsap.utils.toArray(".about-description span");

      gsap.set(lines, { opacity: 0, y: 30 });

      lines.forEach((line, index) => {
        gsap.to(line, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: line,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.fromTo(
        descubrirRef.current,
        { opacity: 1 },
        { 
          opacity: 0,
          scrollTrigger: {
            trigger: descubrirRef.current,
            start: "bottom bottom", // When the bottom of the element hits the bottom of the viewport
            end: "top top",         // When the top of the element hits the top of the viewport
            scrub: true,
          },
        }
      );
    }, []);

    return (
      <section id="home" className="home">
        <NavBar />
        {/* Initial webpage mask animation */}
        <div className="init-baseline">
          <div className="init-title">
            <img src="./images/titulo.jpg" alt="title" className="img-title" />
          </div>
          <div className="baseline-start"></div>
        </div>

        {/* Container for the home section */}
        <div className="home-container">
          <div className="top">
            <div className="home-top-row">
              <div className="home-top-grid">
                <div className="image-column image-left">
                  <img src="./images/paisanologoblack.jpg" alt="Left Image" />
                </div>
              </div>
            </div>
          </div>

          <div className="home-middle-row">
            <div className="catalogue-section">
              <p className="catalogue-description">
                Hablamos de la mejor calidad y precisión. La calidad no es negociable.
              </p>
              <div className="catalogue-button-wrapper">
                <Link to={"/catalogue"}>
                  <ButtonHoverBg label="Explorar Productos" buttonStyles={"catalogue-button"} />
                </Link>
              </div>
            </div>
            <div ref={descubrirRef} className={`scroll-indicator`}>Desliza para descubrir</div>
          </div>

          <div className="home-bottom-row">
            <div className="about-intro">
              <p className="about-description">
                {"Nuestra empresa es líder en la venta de acero en Uruguay. Contamos con una amplia variedad de productos de acero, ofreciendo soluciones para diferentes sectores como la construcción, automotriz, la industria y la fabricación.".split(" ").map((word, index) => (
                  <span key={index} style={{ display: "inline-block" }}>
                    {word}&nbsp;
                  </span>
                ))}
              </p>
              <Link to={"/about"}>
                <ButtonHoverBg label="Sobre Nosotros" buttonStyles={"about-link-button"} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  };
