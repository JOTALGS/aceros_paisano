import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/header";
import { Home } from "./components/home";
import { About } from "./components/about"
import { Catalogue } from "./components/catalogue"
import { Footer } from "./components/footer";



function App() {
  return (
    <div className="App" id="model-canvas">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/catalogue" element={<Catalogue />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
