import React from "react";
import { Link } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";

function PortfolioDetailsPage() {
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
                <div className="portfolio-details-area">
                  <div className="main-image">
                    <img
                      src="assets/img/projects/project-details-1.png"
                      alt="project-details-1"
                    />
                  </div>
                  <div className="portfolio-details-text">
                    <div className="short-info">
                      <div className="info-item">
                        <p className="subtitle">Cliente:</p>
                        <h4 className="card-title">FlexiFlow</h4>
                      </div>
                      <div className="info-item">
                        <p className="subtitle">Serviços:</p>
                        <h4 className="card-title">
                          Product Design, and Development
                        </h4>
                        <a href="#" className="website">
                          flexiflow.com
                          <i className="fas fa-arrow-up-right-from-square ms-2"></i>
                        </a>
                      </div>
                    </div>
                    <div className="overview">
                      <h4 className="card-title">Overview</h4>
                      <p>
                        Web design encompasses the process of creating and
                        designing websites It involves a combination of
                        different skills and disciplines to produce a visually
                        appealing and user-friendly website. Here's an overview
                        of key aspects of web design.
                      </p>
                    </div>
                  </div>
                  {/* Você pode adicionar mais seções como "Challenges" e "Results" aqui */}
                  <div className="prev-and-next-btn">
                    <Link to="/portfolio" className="btn btn-prev">
                      Voltar ao Portfólio
                    </Link>
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

export default PortfolioDetailsPage;
