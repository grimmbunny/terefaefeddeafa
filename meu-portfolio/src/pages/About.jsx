import React from "react";
import ProfileCard from "../components/ProfileCard";
import { Link } from "react-router-dom";

// Componente para a barra de progresso de idiomas
const LanguageSkill = ({ language, level, percentage }) => (
  <div className="language-skill">
    <div className="skill-info">
      <span>{language}</span>
      <span>{level}</span>
    </div>
    <div className="progress">
      <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

// Componente para a lista de Hobbies/Skills
const SkillList = ({ items }) => (
  <ul className="skills-list">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

function AboutPage() {
  const skills = [
    "Figma",
    "Photoshop",
    "Illustrator",
    "After Effects",
    "Blender",
  ];
  const devSkills = [
    "HTML & CSS/SASS",
    "JavaScript ES6+",
    "React",
    "Git & Bootstrap",
  ];
  const hobbies = [
    "Arte",
    "Animais",
    "Games",
    "Storytelling",
    "Lira acrobática",
    "Tecnologia",
    "Estética alternativa",
  ];

  return (
    <section className="content-box-area mt-4">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-4">
            <div className="content-box-area-profile-card">
              <ProfileCard />
            </div>
          </div>
          <div className="col-xl-8">
            <div className="card content-box-card">
              <div className="card-body">
                <div className="top-info">
                  <div className="text">
                    <h1 className="main-title">
                      Sobre <span>Mim</span> 👋
                    </h1>
                    <p>
                      Designer e Desenvolvedora Web que une criatividade e
                      código para entregar soluções visuais estratégicas,
                      funcionais e acessíveis; em evolução contínua rumo à
                      Full-stack Designer T-Shaped.
                    </p>
                    <div className="personal-stats mt-4">
                      <span>
                        <i className="fas fa-birthday-cake"></i> 28 anos
                      </span>
                      <span>
                        <i className="fas fa-map-marker-alt"></i> Niterói, RJ -
                        Brasil
                      </span>
                      <span>
                        <i className="fas fa-briefcase"></i> Remoto ou Híbrido
                      </span>
                    </div>
                  </div>
                  <div className="available-btn">
                    <span>
                      <i className="fas fa-circle"></i> Disponível
                    </span>
                  </div>
                </div>

                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="cv-item">
                      <h3 className="mb-3">Experiência Profissional</h3>
                      <div className="scrollable-box">
                        {/* Aqui você pode mapear um array de experiências como no TimelineCard */}
                        <div className="experience-entry">
                          <h4>Designer Gráfica (Temporária)</h4>
                          <span className="period">
                            Agência Razow | ABR/2025 & OUT/2024
                          </span>
                          <ul>
                            <li>
                              Criação de peças digitais e impressas para
                              campanhas pontuais.
                            </li>
                            <li>
                              Recontratada pela qualidade e agilidade nas
                              entregas.
                            </li>
                          </ul>
                        </div>
                        {/* Adicione outras experiências aqui */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="cv-item">
                      <h3 className="mb-3">Educação & Cursos</h3>
                      {/* Adicione suas formações aqui */}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="cv-item">
                      <h3 className="mb-3">Principais Competências</h3>
                      <div className="row">
                        <div className="col-sm-6">
                          <h4 className="mb-2">Design & UI/UX</h4>
                          <SkillList items={skills} />
                        </div>
                        <div className="col-sm-6">
                          <h4 className="mb-2">Front-End</h4>
                          <SkillList items={devSkills} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="cv-item">
                      <div className="row align-items-center">
                        <div className="col-md-5 mb-4 mb-md-0">
                          <h3 className="mb-3">Idiomas</h3>
                          <LanguageSkill
                            language="Português"
                            level="Nativo"
                            percentage="100"
                          />
                          <LanguageSkill
                            language="Inglês"
                            level="Avançado (C1)"
                            percentage="90"
                          />
                        </div>
                        <div className="col-md-7">
                          <h3 className="mb-3">Hobbies & Interesses</h3>
                          <div className="hobbies-container">
                            {hobbies.map((hobby) => (
                              <span className="skill-item" key={hobby}>
                                {hobby}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
