import React, { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavBar } from "../header";
import "./style.css";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const { scrollYProgress } = useScroll();
  const textRefs = useRef([]); // Array to hold refs for all paragraphs

  // Setup gsap scroll animations inside useEffect hook
  useEffect(() => {
    textRefs.current.forEach((ref) => {
      if (ref) {
        // ScrollTrigger animation setup for each text element
        gsap.fromTo(
          ref,
          {
            opacity: 0, // Initially invisible
            y: 40, // Start with a slight downward position
          },
          {
            opacity: 1, // Fade in to full opacity
            y: 0, // Move to normal position
            color: "#d6d6d6",
            duration: 4,
            delay: 1.5,
            ease: "power4.out", // Smooth easing
            scrollTrigger: {
              trigger: ref, // Element to trigger the animation
              start: "top 80%", // Trigger when top of element reaches 80% of the viewport height
              end: "top 30%", // End when top of element reaches 30% of the viewport height
              scrub: true, // Smooth scroll-based animation
              toggleActions: "play none none reverse", // Play on enter and reverse on leave
            },
          }
        );
      }
    });
  }, []);

  // Content for sections
  const content = [
    {
      title: "Misión",
      paragraphs: [
        "Nuestra misión es desarrollar una empresa sustentable, brindando productos metálicos de calidad certificada destinados a los sectores de la construcción, el agro y la industria.",
        "La sustentabilidad se obtiene a través de mejorar en forma continua el Sistema de Gestión, el Sistema de Seguridad, y el Sistema Ambiental.",
      ],
    },
    {
      title: "Política de Gestión",
      paragraphs: [
        "Nuestro Sistema de Gestión se controla con la obtención y el mantenimiento de la certificación ISO 9001.",
        "Para mejorar continuamente se aplican los conceptos del Modelo de Mejora Continua del Instituto Nacional de Calidad.",
      ],
    },
    {
      title: "Política de Calidad",
      paragraphs: [
        "Nuestro Sistema de Calidad tiene como prioridades:",
        "- La obtención y el mantenimiento de la certificación de Calidad de Producto.",
        "- La venta de productos metálicos que cumplan los requisitos de las normas vigentes aplicables y las necesidades de nuestros clientes.",
      ],
    },
    {
      title: "Política de Seguridad",
      paragraphs: [
        "Nuestro Sistema de Seguridad se controla con la obtención y el mantenimiento de la certificación de la norma OHSAS 18001.",
        "Nuestra principal política es que cualquier operador debe detener el proceso que no se encuentre dentro de las condiciones estándares de seguridad, hasta no asegurarse de la remoción de la condición insegura.",
      ],
    },
    {
      title: "Política Ambiental",
      paragraphs: [
        "Nuestro Sistema de Protección del Medio Ambiente se controla con la obtención y el mantenimiento de la certificación de la norma ISO 14001.",
        "Nuestra principal política es realizar inversiones y orientar nuestra operación de acuerdo a los conceptos de Tecnología Limpia.",
      ],
    },
  ];

  let globalIndex = 0; // Global counter for refs

  return (
    <section id="about" className="about">
      <NavBar />
      <div className="intro-about"></div>

      <div className="about-sub-section">
        <div className="text-content">¿Quiénes somos?</div>
        <motion.div
          className="image-content"
          style={{
            position: isFixed ? "fixed" : "",
            top: isFixed ? "-150px" : "auto", // Adjust fixed position
            left: isFixed ? "53.4%" : "auto", // Center horizontally
            width: "450px",
            zIndex: isFixed ? 10 : "auto",
          }}
        >
          <img src="./images/about1.png" alt="About us" />
        </motion.div>
      </div>

      <div className="about-sub-section">
        <div className="text-content">¿Qué hacemos?</div>
        <motion.div
          className="image-content"
          style={{
            position: isFixed ? "fixed" : "",
            top: isFixed ? "-150px" : "auto", // Adjust fixed position
            left: isFixed ? "53.4%" : "auto", // Center horizontally
            width: "450px",
            zIndex: isFixed ? 10 : "auto",
          }}
        >
          <img src="./images/about1.png" alt="About us" />
        </motion.div>
      </div>

      <div className="about-sub-section">
        <div className="text-content">¿Dónde estamos?</div>
        <motion.div
          className="image-content"
          style={{
            position: isFixed ? "fixed" : "",
            top: isFixed ? "-150px" : "auto", // Adjust fixed position
            left: isFixed ? "53.4%" : "auto", // Center horizontally
            width: "450px",
            zIndex: isFixed ? 10 : "auto",
          }}
        >
          <img src="./images/about1.png" alt="Our location" />
        </motion.div>
      </div>
    </section>
  );
};
