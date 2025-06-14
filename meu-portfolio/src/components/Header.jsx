import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Os componentes de ícones SVG (LogoIcon, MoonIcon, SunIcon) foram removidos

const navLinks = [
  { to: "/", label: "Home", icon: <i className="fas fa-home"></i> },
  { to: "/about", label: "About", icon: <i className="fas fa-user"></i> },
  {
    to: "/services",
    label: "Services",
    icon: <i className="fas fa-stream"></i>,
  },
  {
    to: "/portfolio",
    label: "Works",
    icon: <i className="fas fa-briefcase"></i>,
  },
  {
    to: "/contact",
    label: "Contact",
    icon: <i className="fas fa-envelope"></i>,
  },
];

function Header({ isDark, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLinkClick = () => setIsMenuOpen(false);

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
                {/* Ícone de quadradinhos foi removido daqui */}
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
              {/* Adicionado d-flex e gap-2 para espaçamento */}
              <ul className="navbar-info mx-auto d-flex gap-2">
                {navLinks.map((link) => (
                  <li className="nav-item" key={link.to}>
                    <NavLink
                      className="nav-link"
                      to={link.to}
                      onClick={handleLinkClick}
                    >
                      <div className="nav-icon-fa">{link.icon}</div>
                      <span>{link.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="header-right-info d-flex align-items-center">
                <button
                  className="theme-control-btn"
                  onClick={toggleTheme}
                  aria-label="Mudar tema"
                >
                  {/* Ícones de Sol e Lua trocados por Font Awesome */}
                  {!isDark ? (
                    <i className="fas fa-moon"></i>
                  ) : (
                    <i className="fas fa-sun"></i>
                  )}
                </button>
                <NavLink
                  to="/contact"
                  className="lets-talk-btn"
                  onClick={handleLinkClick}
                >
                  Mensagem
                  <svg
                    className="icon"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 11.666V6.666h-5M17.5 6.666l-7.5 7.5-7.5-7.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
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
