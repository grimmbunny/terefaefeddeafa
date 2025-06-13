import React from "react";
import { Link } from "react-router-dom";

function LetsTalkCard() {
  return (
    <div className="card lets-talk-together-card" style={{ height: "100%" }}>
      <div className="card-body d-flex flex-column">
        {/* Seção de texto rolante */}
        <div className="scrolling-info">
          <div className="slider-item">
            <p>
              Available For Hire 🚀 Crafting Digital Experiences 🎨 Available
              For Hire 🚀 Crafting Digital Experiences 🎨
            </p>
          </div>
        </div>

        {/* Título e link principal */}
        <div className="flex-grow-1">
          <h3 className="card-title">
            Vamos criar<span className="d-block">algo juntos?</span>
          </h3>
          <Link className="link-btn" to="/contact">
            {" "}
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
                d="M17.5 11.6665V6.6665H12.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.5 6.6665L10 14.1665L2.5 6.6665"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Informações de contato adicionadas */}
        <div className="contact-info-wrap">
          <a
            href="mailto:muzzastudio@outlook.com"
            className="contact-info-link"
          >
            <i className="fas fa-envelope"></i>
            muzzastudio@outlook.com
          </a>
          <a
            href="https://wa.me/5521967332761"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-info-link"
          >
            <i className="fab fa-whatsapp"></i>
            +55 (21) 96733-2761
          </a>
        </div>
      </div>
    </div>
  );
}

export default LetsTalkCard;
