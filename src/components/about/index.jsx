import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, useTransform, motion } from "framer-motion";
import { NavBar } from "../header";
import "./style.css";

export const About = () => {
  const { scrollYProgress } = useScroll();
  const [isFixed, setIsFixed] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.177 && latest <= 0.65) {
      setIsFixed(true); // Mark as fixed when scrollYProgress is between 0.177 and 0.73
    } else {
      setIsFixed(false); // Unmark fixed if scrollYProgress exceeds 0.73 or goes below 0.177
    }
    console.log("Page scroll: ", latest)
  });

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