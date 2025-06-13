import React from "react";

// Importe os componentes que vamos criar
import ProfileCard from "../components/ProfileCard";
import TimelineCard from "../components/TimelineCard";
import SkillsetCard from "../components/SkillsetCard";
import ProjectsCard from "../components/ProjectsCard";
import ServicesCard from "../components/ServicesCard";
import LetsTalkCard from "../components/LetsTalkCard";

function HomePage() {
  return (
    <section className="home-area">
      <div className="container">
        <div className="row g-4">
          {/* Coluna 1: Perfil */}
          <div className="col-xl-4">
            <ProfileCard />
          </div>

          {/* Coluna 2: Cards do meio */}
          <div className="col-xl-4">
            <div className="row g-4">
              <div className="col-lg-12">
                <TimelineCard />
              </div>
              <div className="col-lg-12">
                <SkillsetCard />
              </div>
            </div>
          </div>

          {/* Coluna 3: Projetos */}
          <div className="col-xl-4">
            <ProjectsCard />
          </div>
        </div>

        {/* Segunda Linha de Cards */}
        <div className="row g-4 mt-0">
          <div className="col-xl-8">
            <ServicesCard />
          </div>
          <div className="col-xl-4">
            <LetsTalkCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
