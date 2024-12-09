import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./style.css"; // Optional CSS for styling

export function About() {
  const items = [
    {
      image: "https://via.placeholder.com/150", // Replace with your image URLs
      title: "Title 1",
      description: "This is the description for item 1.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Title 2",
      description: "This is the description for item 2.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Title 3",
      description: "This is the description for item 3.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Title 4",
      description: "This is the description for item 4.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Title 5",
      description: "This is the description for item 5.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const getItemStyle = (index) => {
    if (index === currentIndex) {
      return { width: "40%", height: "80%", opacity: 1, zIndex: 2 };
    } else if (index === (currentIndex - 1 + items.length) % items.length || index === (currentIndex + 1) % items.length) {
      return { width: "35%", height: "70%", opacity: 0.9, zIndex: 1 };
    } else {
      return { width: "20%", height: "50%", opacity: 0.1, zIndex: 0 };
    }
  };

  return (
    <div className="carousel-container">
      <button onClick={handlePrev} className="carousel-button">
        &lt;
      </button>
      <div className="carousel-viewport">
        {items.map((item, index) => {
          const style = getItemStyle(index);
          return (
            <motion.div
              key={index}
              className="carousel-item"
              animate={{
                x: `${(index - currentIndex) * 90}%`,
                width: style.width,
                height: style.height,
                opacity: style.opacity,
              }}
              transition={{ duration: 0.2 }}
              style={{
                zIndex: style.zIndex,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}
              />
              <h3 style={{ margin: "5px 0", fontSize: "1.2rem" }}>{item.title}</h3>
              <p style={{ textAlign: "center", fontSize: "0.9rem" }}>{item.description}</p>
            </motion.div>
          );
        })}
      </div>
      <button onClick={handleNext} className="carousel-button">
        &gt;
      </button>
    </div>
  );
};