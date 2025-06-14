// src/components/ProjectsCard.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Importe as imagens dos seus projetos
import tamataskImg from "../assets/img/projects/tamatask square.jpg";
// import projectImg2 from "../assets/img/projects/project-2.png"; // Use uma imagem de placeholder se não tiver

const projectData = [
  {
    id: 1,
    image: tamataskImg,
    category: "Web App",
    link: "/portfolio-details-tamatask",
    title: "TamaTask - Produtividade Gamificada",
  },
  {
    id: 2,
    image: tamataskImg,
    category: "Product Design",
    link: "/portfolio-details",
    title: "FlowArch - Architecture Website",
  },
];

function ProjectsCard() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const openLightboxOn = (index) => {
    setImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="card card-projects" style={{ height: "100%" }}>
        <div className="card-body d-flex flex-column">
          <h3 className="card-title">
            Recent Projects
            <Link className="link-btn" to="/portfolio">
              All Projects
              {/* SVG da seta */}
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
                  stroke="#ff4c82"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.833 15L15.833 10"
                  stroke="#ff4c82"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.833 5L15.833 10"
                  stroke="#ff4c82"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </h3>
          <div className="projects-main mt-24 flex-grow-1">
            <div className="row g-4">
              {projectData.map((project, index) => (
                <div className="col-lg-12" key={project.id}>
                  <div className="project-item">
                    {/* Link envolvendo toda a imagem para melhor usabilidade */}
                    <Link to={project.link} className="project-link">
                      <div className="image">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="img-fluid w-100"
                        />
                        {/* Overlay para o efeito de hover */}
                        <div className="hover-overlay">
                          <div className="hover-content">
                            <h4 className="title">{project.title}</h4>
                            <span className="category">{project.category}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                    {/* Botão de lightbox separado */}
                    <button
                      onClick={() => openLightboxOn(index)}
                      className="gallery-popup full-image-preview"
                      aria-label="Ver imagem"
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={projectData.map((p) => ({ src: p.image }))}
        index={imageIndex}
      />
    </>
  );
}

export default ProjectsCard;
