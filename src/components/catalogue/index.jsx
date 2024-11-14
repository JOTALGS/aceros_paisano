import React, { useEffect, useState } from 'react';
import './style.css';
import { NavBar } from '../header';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

export function Catalogue() {
  const [viewMode, setViewMode] = useState('list'); // 'grid' or 'list'
  const { scrollYProgress } = useScroll();
  const [isFixed, setIsFixed] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.037 && latest <= 1) {
      setIsFixed(true); // Mark as fixed when scrollYProgress is between 0.177 and 0.73
    } else {
      setIsFixed(false); // Unmark fixed if scrollYProgress exceeds 0.73 or goes below 0.177
    }
    console.log("Page scroll: ", latest)
  });

  const products = [
    {
      id: 1,
      title: 'Product 1',
      description: 'This is the description for product 1.',
      price: '$100',
      image: './images/product1.jpg',
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'This is the description for product 2.',
      price: '$150',
      image: './images/product2.jpg',
    },
    {
      id: 3,
      title: 'Product 3',
      description: 'This is the description for product 2.',
      price: '$150',
      image: './images/product2.jpg',
    },    {
      id: 4,
      title: 'Product 4',
      description: 'This is the description for product 2.',
      price: '$150',
      image: './images/product2.jpg',
    },
    {
      id: 5,
      title: 'Product 5',
      description: 'This is the description for product 2.',
      price: '$150',
      image: './images/product2.jpg',
    },
    {
      id: 6,
      title: 'Product 6',
      description: 'This is the description for product 2.',
      price: '$150',
      image: './images/product2.jpg',
    },
    // Add more products as needed
  ];

  return (
    <section>
        <NavBar />
        <div className="catalogue-container">
        {/* Fixed Filters Section */}
        <div className="catalogue-filters">
            <h2>Catálogo</h2>
            <motion.div
              className="filters"
              style={{
                position: isFixed ? "fixed" : "",
                top: isFixed ? "10%" : "auto", // Adjust fixed position
                left: isFixed ? "20px" : "auto", // Center horizontally
                width: "450px",
                zIndex: isFixed ? 10 : "auto",
              }}
            >
              <label>
                  <input type="checkbox" />
                  Filter 1
              </label>
              <label>
                  <input type="checkbox" />
                  Filter 2
              </label>
            </motion.div>
        </div>

        {/* Scrollable Products Section */}
        <div className="catalogue-products">
            <div className="view-toggle">
            <button onClick={() => setViewMode('grid')}>Grid View</button>
            <button onClick={() => setViewMode('list')}>List View</button>
            </div>
            <div className={`products-list ${viewMode}`}>
            {products.map((product) => (
                <div className={`product-item ${viewMode}`} key={product.id}>
                <img src={product.image} alt={product.title} />
                <div className="product-info">
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-description">{product.description}</p>
                    <span className="product-price">{product.price}</span>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    </section>
  );
}
