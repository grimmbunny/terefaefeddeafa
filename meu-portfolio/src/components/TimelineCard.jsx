import React from "react";

function TimelineCard() {
  // O array timelineData permanece o mesmo que você atualizou
  const timelineData = [
    {
      date: "ABR/2025 & OUT/2024",
      title: "Designer Gráfica (Temporária)",
      company: "Agência Razow",
      details: ["Recontratada pela qualidade e agilidade nas entregas."],
    },
    {
      date: "FEV/2024 - DEZ/2024",
      title: "Designer Gráfica & Social Media",
      company: "D&D Cosméticos",
      details: [
        "Desenvolveu KVs, impressos e conteúdo para redes sociais.",
        "Aumentou o engajamento digital com peças promocionais.",
      ],
    },
    {
      date: "FEV/2024 - MAI/2026",
      title: "Análise e Desenvolvimento de Sistemas",
      company: "Universidade Presbiteriana Mackenzie",
      details: [],
    },
    {
      date: "2018 - Presente",
      title: "Freelancer Multidisciplinar",
      company: "Muzza Studio",
      details: [
        "Entregou projetos de design, web e editorial para diversos clientes (PMEs e pessoas físicas).",
        "Atuou em projetos para Razow, Sapiens e Eleve Comunicação.",
      ],
    },
    {
      date: "JAN/2022 - DEZ/2022",
      title: "Designer Gráfica",
      company: "Fundação de Arte de Niterói",
      details: [
        "Liderou branding e redes sociais de instituições culturais.",
        "Direção de arte do ciclo 'Modernismo(s)'.",
      ],
    },
    {
      date: "SET/2020 - DEZ/2021",
      title: "Designer Gráfica",
      company: "Agência Razow",
      details: [
        "Criou identidades e conteúdos para Evelyn Regly, VacaCast e MyMake.",
        "Desenvolveu a identidade visual completa do podcast VacaCast.",
      ],
    },
    {
      date: "FEV/2021 - OUT/2021",
      title: "Diagramadora & Capista",
      company: "Editora Dialética",
      details: [
        "Diagramou livros físicos e digitais para publicação nacional.",
        "Criou capas para autores de diversas áreas.",
      ],
    },
    {
      date: "JAN/2018 - DEZ/2019",
      title: "Artista 2D & UI/UX Designer",
      company: "ICAD / Vision Lab, PUC-Rio",
      details: [
        "Atuou no jogo Shape Arena (Steam), premiado na SBGames 2019.",
        "Criou e animou assets 2D para interfaces interativas.",
      ],
    },
  ];

  return (
    // Adicionamos a classe h-100 para que o card ocupe 100% da altura do pai
    <div className="card timeline-card h-100">
      <div className="card-body d-flex flex-column">
        <h3 className="card-title">Timeline</h3>
        <div className="timeline-main mt-24 flex-grow-1">
          <ul className="timeline-list list-unstyled">
            {timelineData.map((item, index) => (
              <li className="timeline-item" key={index}>
                <div className="date">
                  <p>{item.date}</p>
                </div>
                <div className="info">
                  <h4 className="title">{item.title}</h4>
                  <h6 className="subtitle">{item.company}</h6>
                  {item.details.length > 0 && (
                    <ul className="details">
                      {item.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TimelineCard;
