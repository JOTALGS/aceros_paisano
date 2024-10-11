import React, { useRef, useState } from "react";
import "./style.css";
import { motion, useInView, useTransform, useViewportScroll } from "framer-motion";

const PdfModal = ({ show, handleClose, pdfFile }) => {
  if (!show) return null;

  return (
    <div className="custom-modal">
      <div className="custom-modal-content">
        <span className="custom-modal-close" onClick={handleClose}>
          &times;
        </span>
        <iframe src={pdfFile} width="100%" height="500px" title="PDF Preview"></iframe>
      </div>
    </div>
  );
};

export const About = () => {
  // Track scroll progress with Framer Motion's useViewportScroll
  const { scrollYProgress } = useViewportScroll();

  // Interpolate scroll progress to map between 90vw and 100vw
  const width = useTransform(scrollYProgress, [0, 0.1], ['85%', '100%']);

  return (
    <motion.section
      id="about"
      className="about"
      style={{
        width,
      }}
    >
      {/* Add your content here */}
    </motion.section>
  );
};
