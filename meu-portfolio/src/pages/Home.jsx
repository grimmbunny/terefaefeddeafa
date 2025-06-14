import React from "react";

// (suas outras importações de componentes)
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

          {/* Coluna 2: Cards do meio - CORREÇÃO FINAL */}
          {/* Adicionamos 'gap-4' para criar o espaçamento vertical entre os cards */}
          <div className="col-xl-4 d-flex flex-column gap-4">
            {/* Wrapper da Timeline para fazê-la crescer */}
            <div className="flex-grow-1 d-flex">
              <TimelineCard />
            </div>
            {/* Wrapper do Skillset */}
            <div>
              <SkillsetCard />
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
