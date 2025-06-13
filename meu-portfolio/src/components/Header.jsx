import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Importe seus SVGs aqui. Exemplo:
// import { ReactComponent as LogoSvg } from '../assets/img/logo.svg';

function Header({ isDark, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para fechar o menu ao clicar em um link no modo mobile
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const Logo = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0L9 0C9.39782 0 9.77936 0.158035 10.0607 0.43934C10.342 0.720644 10.5 1.10218 10.5 1.5V22.5C10.5 22.8978 10.342 23.2794 10.0607 23.5607C9.77936 23.842 9.39782 24 9 24H1.5C1.10218 24 0.720644 23.842 0.43934 23.5607C0.158035 23.2794 0 22.8978 0 22.5V1.5ZM13.5 1.5C13.5 1.10218 13.658 0.720644 13.9393 0.43934C14.2206 0.158035 14.6022 0 15 0L22.5 0C22.8978 0 23.2794 0.158035 23.5607 0.43934C23.842 0.720644 24 1.10218 24 1.5V9C24 9.39782 23.842 9.77936 23.5607 10.0607C23.2794 10.342 22.8978 10.5 22.5 10.5H15C14.6022 10.5 14.2206 10.342 13.9393 10.0607C13.658 9.77936 13.5 9.39782 13.5 9V1.5ZM13.5 15C13.5 14.6022 13.658 14.2206 13.9393 13.9393C14.2206 13.658 14.6022 13.5 15 13.5H22.5C22.8978 13.5 23.2794 13.658 23.5607 13.9393C23.842 14.2206 24 14.6022 24 15V22.5C24 22.8978 23.842 23.2794 23.5607 23.5607C23.2794 23.842 22.8978 24 22.5 24H15C14.6022 24 14.2206 23.842 13.9393 23.5607C13.658 23.2794 13.5 22.8978 13.5 22.5V15Z"
        className="logo-icon"
      />
    </svg>
  );

  return (
    <header className="header-area">
      <nav className="navbar">
        <div className="container">
          <div className="menu-container">
            <div className="logo">
              <NavLink className="navbar-brand me-0" to="/">
                <Logo />
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
              <div className="logo inner-logo d-block d-xl-none">
                <NavLink
                  className="navbar-brand me-0"
                  to="/"
                  onClick={handleLinkClick}
                >
                  <Logo />
                  <span>
                    Flávia<span className="primary">Proença</span>
                  </span>
                </NavLink>
              </div>
              <ul className="navbar-info mx-auto">
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
                    to="/about.html"
                    onClick={handleLinkClick}
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/services.html"
                    onClick={handleLinkClick}
                  >
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/portfolio.html"
                    onClick={handleLinkClick}
                  >
                    Works
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/contact.html"
                    onClick={handleLinkClick}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
              <div className="header-right-info d-flex align-items-center">
                <button className="theme-control-btn" onClick={toggleTheme}>
                  {isDark ? <span>☀️</span> : <span>🌙</span>}
                  <small className="theme-text d-block d-xl-none">
                    Mudar tema
                  </small>
                </button>
                <NavLink to="/contact.html" className="lets-talk-btn">
                  Let's Talk
                </NavLink>
              </div>
            </div>

            <div
              className={`mobile-menu-overlay d-block d-xl-none ${
                isMenuOpen ? "show" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            ></div>
            <div className="mobile-menu-control-bar d-block d-xl-none">
              <button
                className="mobile-menu-control-bar"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
