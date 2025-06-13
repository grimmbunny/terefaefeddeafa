import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Ícones como componentes para clareza
const LogoIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="logo-icon"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0H9a1.5 1.5 0 0 1 1.5 1.5v21A1.5 1.5 0 0 1 9 24H1.5A1.5 1.5 0 0 1 0 22.5v-21ZM13.5 1.5A1.5 1.5 0 0 1 15 0h7.5a1.5 1.5 0 0 1 1.5 1.5V9a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1-1.5-1.5V1.5Zm0 12A1.5 1.5 0 0 1 15 13.5h7.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1-1.5-1.5v-7.5Z" />
  </svg>
);
const MoonIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#1A1F2C"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.801 3A9.004 9.004 0 0 0 3.01 12.439c.078 1.627.586 3.202 1.47 4.557.885 1.355 2.113 2.44 3.553 3.137a9.003 9.003 0 0 0 10.943-.724c.97-1.28.97-2.997-1.222-4.502-1.29-1.854-1.18-4.32.254-5.962.915-1.045.39-2.68-1.008-2.914A9.018 9.018 0 0 0 11.801 3Z" />
  </svg>
);
const SunIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#FD7E41"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0-5a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm0 18a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zM4.929 4.929a1 1 0 0 1 1.414 0l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 0-1.414zm12.728 12.728a1 1 0 0 1 1.414 0l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 0-1.414zM2 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm18 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1zM6.343 17.657a1 1 0 0 1 0-1.414l.707-.707a1 1 0 1 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414 0zm12.728-12.728a1 1 0 0 1 0-1.414l.707-.707a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414 0z" />
  </svg>
);

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
                <LogoIcon />
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
              <ul className="navbar-info mx-auto">
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
                  {!isDark ? <MoonIcon /> : <SunIcon />}
                </button>
                <NavLink
                  to="/contact"
                  className="lets-talk-btn"
                  onClick={handleLinkClick}
                >
                  Let's Talk
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
