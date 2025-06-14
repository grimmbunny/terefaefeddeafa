// ... (mantenha as importações e as listas como estão)
import React from "react";

// --- ÍCONES DAS FERRAMENTAS ---
import photoshopIcon from "../assets/img/icons/photoshop.svg";
import indesignIcon from "../assets/img/icons/indesign.svg";
import illustratorIcon from "../assets/img/icons/illustrator.svg";
import adobeIcon from "../assets/img/icons/adobe.svg";
import figmaIcon from "../assets/img/icons/figma.svg";
import cssIcon from "../assets/img/icons/css.svg";
import htmlIcon from "../assets/img/icons/html.svg";
import javascriptIcon from "../assets/img/icons/javascript.svg";
import viteIcon from "../assets/img/icons/vite.svg";
import reactIcon from "../assets/img/icons/react.svg";

const tools = [
  { name: "Photoshop", icon: photoshopIcon },
  { name: "InDesign", icon: indesignIcon },
  { name: "Illustrator", icon: illustratorIcon },
  { name: "Creative Cloud", icon: adobeIcon },
  { name: "Figma", icon: figmaIcon },
  { name: "CSS3", icon: cssIcon },
  { name: "HTML5", icon: htmlIcon },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "Vite", icon: viteIcon },
  { name: "React", icon: reactIcon },
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
    // Adicionamos a classe w-100 para garantir que ele preencha a largura do container flex
    <div className="card skillset-card w-100">
      <div className="card-body">
        <h3 className="card-title">Skillset</h3>
        <div className="tools-main mt-24">
          <div className="tools-slider">
            {[...tools, ...tools].map((tool, index) => (
              <div className="expertise-item" key={index}>
                <div className="image text-center">
                  <img src={tool.icon} alt={tool.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="skills-main">
          <div className="skills-slider">
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
