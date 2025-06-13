import React from "react";
import ProfileCard from "../components/ProfileCard";
import { Link } from "react-router-dom";

const projectsData = [
  {
    id: 1,
    title: "TamaTask - Produtividade Gamificada",
    category: "Web App | UI/UX & DEV",
    image: "assets/img/projects/tamatask.jpg",
    link: "/portfolio-details-tamatask.html",
  },
  {
    id: 2,
    title: "AIMug - AI Writing Application",
    category: "Product Design | Application",
    image: "assets/img/projects/project-2.png",
    link: "/portfolio-details.html",
  },
  {
    id: 3,
    title: "FlowArch - Architecture Website",
    category: "UI UX Design | Development",
    image: "assets/img/projects/project-3.png",
    link: "/portfolio-details.html",
  },
];

function PortfolioPage() {
  return (
    <section className="content-box-area mt-4">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-4">
            <ProfileCard />
          </div>
          <div className="col-xl-8">
            <div className="card content-box-card">
              <div className="card-body portfolio-card">
                <div className="top-info">
                  <div className="text">
                    <h1 className="main-title">
                      Confira meus <span>projetos</span>
                    </h1>
                    <p>
                      Aqui estão alguns dos trabalhos que desenvolvi, variando
                      de web apps a design de produtos. Se estiver procurando um
                      designer para dar vida à sua ideia, estou aqui para
                      ajudar.
                    </p>
                  </div>
                </div>
                <div className="portfolio-area">
                  <div className="row g-4 parent-container">
                    {projectsData.map((project) => (
                      <div className="col-lg-12" key={project.id}>
                        <div className="portfolio-item">
                          <div className="image">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="img-fluid w-100"
                            />
                            {/* Lembre-se de adicionar um componente de lightbox aqui */}
                          </div>
                          <div className="text">
                            <div className="info">
                              <Link to={project.link} className="title">
                                {project.title}
                              </Link>
                              <p className="subtitle">{project.category}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* A paginação pode ser adicionada aqui depois */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioPage;
