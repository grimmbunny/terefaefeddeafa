import React from "react";
import { Link } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";

// -- Sub-componentes para organização --
const SkillList = ({ items }) => (
  <ul className="info-list">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
const LanguageSkill = ({ lang, level, percentage }) => (
  <div className="language-skill">
    <div className="skill-info">
      <span>{lang}</span>
      <span>{level}</span>
    </div>
    <div className="progress">
      <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

// --- Componente Principal da Página ---
function AboutPage() {
  const designSkills = [
    "Figma",
    "Photoshop",
    "Illustrator",
    "InDesign",
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
    <section className="content-box-area mt-4 about-page">
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
                {/* SEÇÃO SOBRE MIM */}
                <div className="cv-section">
                  <h2 className="cv-section-title">Sobre Mim 👋</h2>
                  <p>
                    Designer e Desenvolvedora Web que une criatividade e código
                    para entregar soluções visuais estratégicas, funcionais e
                    acessíveis; em evolução contínua rumo à Full-stack Designer
                    T-Shaped.
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

                {/* SEÇÃO EXPERIÊNCIA PROFISSIONAL */}
                <div className="cv-section">
                  <h3 className="cv-section-title">Experiência Profissional</h3>
                  <div className="scrollable-box">
                    <div className="experience-entry">
                      <div className="experience-header">
                        <h4 className="title">Designer Gráfica (Temporária)</h4>
                        <span className="period">ABR/2025 & OUT/2024</span>
                      </div>
                      <h5 className="company">Agência Razow</h5>
                      <ul>
                        <li>
                          Recontratada pela qualidade e agilidade nas entregas.
                        </li>
                      </ul>
                    </div>
                    <div className="experience-entry">
                      <div className="experience-header">
                        <h4 className="title">
                          Designer Gráfica & Social Media
                        </h4>
                        <span className="period">FEV/2024 - DEZ/2024</span>
                      </div>
                      <h5 className="company">D&D Cosméticos</h5>
                      <ul>
                        <li>
                          Desenvolveu KVs, impressos e conteúdo para redes
                          sociais.
                        </li>
                        <li>
                          Aumentou o engajamento digital com peças promocionais.
                        </li>
                      </ul>
                    </div>
                    <div className="experience-entry">
                      <div className="experience-header">
                        <h4 className="title">Freelancer Multidisciplinar</h4>
                        <span className="period">2018 - Presente</span>
                      </div>
                      <h5 className="company">Muzza Studio</h5>
                      <ul>
                        <li>
                          Entregou projetos de design, web e editorial para
                          diversos clientes (PMEs e pessoas físicas).
                        </li>
                        <li>
                          Atuou em projetos para Razow, Sapiens e Eleve
                          Comunicação.
                        </li>
                      </ul>
                    </div>
                    <div className="experience-entry">
                      <div className="experience-header">
                        <h4 className="title">Designer Gráfica</h4>
                        <span className="period">JAN/2022 - DEZ/2022</span>
                      </div>
                      <h5 className="company">Fundação de Arte de Niterói</h5>
                      <ul>
                        <li>
                          Liderou branding e redes sociais de instituições
                          culturais.
                        </li>
                        <li>Direção de arte do ciclo 'Modernismo(s)'.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* GRID INFERIOR 2x2 */}
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="cv-grid-item">
                      <h3 className="cv-section-title">Educação & Cursos</h3>
                      <div className="education-entry">
                        <div className="experience-header">
                          <h4 className="title">
                            Análise e Desenvolvimento de Sistemas
                          </h4>
                          <span className="period">FEV/24 - MAI/26</span>
                        </div>
                        <h5 className="institution">
                          Universidade Presbiteriana Mackenzie
                        </h5>
                      </div>
                      <div className="education-entry">
                        <div className="experience-header">
                          <h4 className="title">
                            Profissão: Engenheiro Front-End
                          </h4>
                          <span className="period">JUL/23 - DEZ/23</span>
                        </div>
                        <h5 className="institution">EBAC</h5>
                      </div>
                      <div className="education-entry">
                        <div className="experience-header">
                          <h4 className="title">Pós-graduação em UI/UX</h4>
                          <span className="period">FEV/20 - FEV/21</span>
                        </div>
                        <h5 className="institution">Unyleya</h5>
                      </div>
                      <div className="education-entry">
                        <div className="experience-header">
                          <h4 className="title">
                            Desenho Industrial (Bacharelado)
                          </h4>
                          <span className="period">AGO/15 - DEZ/19</span>
                        </div>
                        <h5 className="institution">PUC-Rio</h5>
                      </div>
                      <div className="education-entry">
                        <h4 className="title">Cursos Livres Relevantes</h4>
                        <h5 className="institution">
                          UX/UI & Front-End (Origamid), Bootcamp Design
                          (Baseline), Google UX Design (Coursera)
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cv-grid-item">
                      <h3 className="cv-section-title">
                        Principais Competências
                      </h3>
                      <div className="row">
                        <div className="col-sm-6">
                          <h4 className="skills-subtitle">Design & UI/UX</h4>
                          <SkillList items={designSkills} />
                        </div>
                        <div className="col-sm-6">
                          <h4 className="skills-subtitle">Front-End</h4>
                          <SkillList items={devSkills} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cv-grid-item">
                      <h3 className="cv-section-title">Idiomas</h3>
                      <LanguageSkill
                        lang="Português"
                        level="Nativo"
                        percentage="100"
                      />
                      <LanguageSkill
                        lang="Inglês"
                        level="Avançado (C1)"
                        percentage="90"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cv-grid-item">
                      <h3 className="cv-section-title">Hobbies & Interesses</h3>
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
      <div className="work-together-slider mt-4">
        <div className="slider-main d-flex gap-4 align-items-center">
          <div className="slider-item">
            <Link to="/contact">Mande uma mensagem</Link>
            <Link to="/contact">Mande uma mensagem</Link>
          </div>
          <div className="slider-item">
            <Link to="/contact">Mande uma mensagem</Link>
            <Link to="/contact">Mande uma mensagem</Link>
          </div>
        </div>
      </div>
      <div className="background-shapes">
        <div className="shape-1 common-shape">
          <img src="assets/img/bg/banner-shape-1.png" alt="banner-shape-1" />
        </div>
        <div className="shape-2 common-shape">
          <img src="assets/img/bg/banner-shape-1.png" alt="banner-shape-1" />
        </div>
        <div className="threed-shape-1 move-with-cursor" data-value="1">
          <img src="assets/img/bg/object-3d-1.png" alt="object-3d-1" />
        </div>
        <div className="threed-shape-2 move-with-cursor" data-value="1">
          <img src="assets/img/bg/object-3d-2.png" alt="object-3d-2" />
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
