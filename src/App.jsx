import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/header";
import { Home } from "./components/home";
import NewsletterSubscription from "./components/newsletter/PopUp";
import NewAgents from "./components/newagents/NewAgents";

function AboutUs() {
  return (
    <>
      <NewsletterSubscription />
      <NewAgents />
    </>
  );
}

function Catalogue() {
  return <h1>About Us Page</h1>;
}

function App() {
  return (
    <div className="App" id="model-canvas">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/catalogue" element={<Catalogue />} />
      </Routes>
    </div>
  );
}

export default App;
