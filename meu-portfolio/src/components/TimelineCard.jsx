import React from "react";

function TimelineCard() {
  const timelineData = [
    {
      date: "ABR/2025 & OUT/2024",
      title: "Designer Gráfica (Temporária)",
      company: "Agência Razow",
      details: ["Recontratada pela qualidade e agilidade nas entregas."],
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
  ];

  return (
    <div className="card timeline-card">
      <div className="card-body">
        <h3 className="card-title">Timeline</h3>
        <div className="timeline-main mt-24">
          {/* O scroll vertical é controlado pelo CSS */}
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
