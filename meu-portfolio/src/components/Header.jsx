import React, { useState } from "react";
// Usamos NavLink para que o link ativo receba uma classe especial
import { NavLink } from "react-router-dom";

function Header({ isDark, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // ... (código do logo e do botão de tema que já te passei) ...

  return (
    <header className="header-area">
      <nav className="navbar">
        <div className="container">
          <div className="menu-container">
            <div className="logo">
              <NavLink
                className="navbar-brand me-0"
                to="/"
                onClick={handleLinkClick}
              >
                {/* ... Seu SVG do logo ... */}
                <span>
                  Flávia<span className="primary">Proença</span>
                </span>
              </NavLink>
            </div>

            <div
              className={`navbar-main d-flex flex-grow-1 ${
                isMenuOpen ? "show" : ""
              }`}
            >
              {/* ... logo interno do menu mobile ... */}
              <ul className="navbar-info mx-auto">
                {/* --- LINKS CORRIGIDOS (SEM .html) --- */}
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/"
                    onClick={handleLinkClick}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/about"
                    onClick={handleLinkClick}
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/services"
                    onClick={handleLinkClick}
                  >
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/portfolio"
                    onClick={handleLinkClick}
                  >
                    Works
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/contact"
                    onClick={handleLinkClick}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
              {/* ... botão de tema e botão Let's Talk ... */}
              <div className="header-right-info d-flex align-items-center">
                <button className="theme-control-btn" onClick={toggleTheme}>
                  {/* ... icones de tema ... */}
                </button>
                <NavLink
                  to="/contact"
                  className="lets-talk-btn"
                  onClick={handleLinkClick}
                >
                  Let's Talk
                </NavLink>
              </div>
            </div>

            {/* ... controles do menu mobile ... */}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
