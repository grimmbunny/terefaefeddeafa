import React from "react";

const tools = [
  { name: "Photoshop", icon: "assets/img/icons/photoshop.svg" },
  { name: "InDesign", icon: "assets/img/icons/indesign.svg" },
  { name: "Illustrator", icon: "assets/img/icons/illustrator.svg" },
  { name: "Creative Cloud", icon: "assets/img/icons/adobe.svg" },
  { name: "Figma", icon: "assets/img/icons/figma.svg" },
  { name: "CSS3", icon: "assets/img/icons/css.svg" },
  { name: "HTML5", icon: "assets/img/icons/html.svg" },
  { name: "JavaScript", icon: "assets/img/icons/javascript.svg" },
  { name: "Vite", icon: "assets/img/icons/vite.svg" },
  { name: "React", icon: "assets/img/icons/react.svg" },
  { name: "GitHub", icon: "assets/img/icons/github.svg" },
];

const softSkills = [
  "multitasking",
  "autonomia",
  "visão 360º",
  "flexibilidade",
  "tech fluency",
  "growth mindset",
];

function SkillsetCard() {
  return (
    <div className="card skillset-card">
      <div className="card-body">
        <h3 className="card-title">Skillset</h3>
        <div className="tools-main mt-24">
          <div className="tools-slider">
            {/* Duplicamos a lista para o efeito de loop infinito com CSS */}
            {[...tools, ...tools].map((tool, index) => (
              <div className="expertise-item" key={index}>
                <div className="image text-center">
                  <img src={tool.icon} alt={tool.name} />
                </div>
                <div className="text">
                  <h4 className="title">{tool.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="skills-main">
          <div className="skills-slider">
            {/* Duplicamos a lista para o efeito de loop infinito com CSS */}
            {[...softSkills, ...softSkills].map((skill, index) => (
              <span className="skill-item" key={index}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsetCard;
