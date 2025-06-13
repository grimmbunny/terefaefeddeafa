import React from "react";
import { Link } from "react-router-dom";

function ServicesCard() {
  return (
    <div className="card services-card">
      <div className="card-body">
        <h3 className="card-title">
          Services
          <Link className="link-btn" to="/services">
            See All Services
            <svg
              className="icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.16699 10H15.8337"
                stroke="#4770FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.833 15L15.833 10"
                stroke="#4770FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.833 5L15.833 10"
                stroke="#4770FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </h3>
        <div className="services-main mt-24">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="service-category">
                <div className="category-header">
                  <i className="fas fa-palette"></i>
                  <h4>Design</h4>
                </div>
                <ul className="service-list">
                  <li>Design digital & social</li>
                  <li>Design para impressos</li>
                  <li>Ilustração e 3D</li>
                  <li>Design de interface/UI</li>
                  <li>Criação ou ajuste de wireframes e protótipos</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-category">
                <div className="category-header">
                  <i className="fas fa-code"></i>
                  <h4>Developer</h4>
                </div>
                <ul className="service-list">
                  <li>Landing pages</li>
                  <li>Portfolio</li>
                  <li>Componentização em framework</li>
                  <li>Manutenção de código front-end</li>
                  <li>Conversão de design para código</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
