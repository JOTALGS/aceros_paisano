import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="site__header">
      <div className="container_header">
        <div className="logo-container">
          <img src="./images/paisanologo.png" alt="red logo" />
        </div>
        <button className="hamburger" aria-label="Toggle navigation" onClick={toggleMenu}>
          &#9776;
        </button>
        <div className={`navlink ${menuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about-us">Sobre Nosotros</Link>
            </li>
            <li className="dropdown" onClick={toggleDropdown}>
              <span>Productos ▼</span>
              <div className={`dropdown-content ${dropdownOpen ? "open" : ""}`}>
                <li>
                  <Link to="/catalogue/option1">Cortado y Doblado</Link>
                </li>
                <li>
                  <Link to="/catalogue/option2">Malla Electrosoldada</Link>
                </li>
                <li>
                  <Link to="/catalogue/option3">Barras Conformadas y Lisas</Link>
                </li>
                <li>
                  <Link to="/catalogue/option4">Alambres Galvanizados</Link>
                </li>
                <li>
                  <Link to="/catalogue/option5">Alambres Recocidos y Clavos</Link>
                </li>
              </div>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
