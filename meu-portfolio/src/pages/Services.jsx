import React from "react";
import ProfileCard from "../components/ProfileCard";

// Componente para o Acordeão (FAQ)
const AccordionItem = ({ id, title, content, parent, show = false }) => {
  return (
    <div className="accordion-item">
      <h4 className="accordion-header" id={`heading${id}`}>
        <button
          className={`accordion-button ${!show ? "collapsed" : ""}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${id}`}
          aria-expanded={show}
          aria-controls={`collapse${id}`}
        >
          {title}
          <span className="ms-auto">
            <span className="icon ms-4">
              <img
                className="icon-plus"
                src="assets/img/icons/plus.svg"
                alt="plus"
              />
              <img
                className="icon-minus d-none"
                src="assets/img/icons/minus.svg"
                alt="minus"
              />
            </span>
          </span>
        </button>
      </h4>
      <div
        id={`collapse${id}`}
        className={`accordion-collapse collapse ${show ? "show" : ""}`}
        aria-labelledby={`heading${id}`}
        data-bs-parent={`#${parent}`}
      >
        <div className="accordion-body">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

// Componente para cada caixa de serviço
const ServiceBox = ({ icon, title, services }) => (
  <div className="service-item-box">
    <div className="icon">{icon}</div>
    <h4 className="title">{title}</h4>
    <ul className="info-list">
      {services.map((service, index) => (
        <li key={index}>{service}</li>
      ))}
    </ul>
  </div>
);

function ServicesPage() {
  return (
    <section className="content-box-area mt-4 services-page">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-4">
            <ProfileCard />
          </div>
          <div className="col-xl-8">
            <div className="card content-box-card">
              <div className="card-body">
                <div className="top-info">
                  <div className="text">
                    <h1 className="main-title">
                      Serviços & <span>Metodologia</span>
                    </h1>
                    <p>
                      Do conceito à implementação, ofereço soluções integradas
                      de <b>Design e Desenvolvimento</b> para elevar a sua
                      presença digital.
                    </p>
                  </div>
                  <div className="available-btn">
                    <span>
                      <i className="fas fa-circle"></i> Disponível
                    </span>
                  </div>
                </div>

                {/* Grid de Serviços */}
                <div className="row g-4">
                  <div className="col-md-6 d-flex">
                    <ServiceBox
                      icon={<i className="fas fa-palette"></i>}
                      title="UI/UX & Product Design"
                      services={[
                        "Otimização de fluxos, testes e análise de dados.",
                        "Pesquisa de Usuário e Jornadas",
                        "Wireframes e Fluxos de Navegação",
                        "Protótipos Interativos (Figma)",
                        "Design de Interface (UI)",
                        "Design Systems",
                      ]}
                    />
                  </div>
                  <div className="col-md-6 d-flex">
                    <ServiceBox
                      icon={<i className="fas fa-code"></i>}
                      title="Desenvolvimento Front-End"
                      services={[
                        "Landing Pages e Hotsites",
                        "Sites Institucionais e Portfólios",
                        "Conversão de Design (Figma) para Código",
                        "Componentização em React",
                        "Manutenção e otimização de código",
                      ]}
                    />
                  </div>
                  <div className="col-md-6 d-flex">
                    <ServiceBox
                      icon={<i className="fas fa-lightbulb"></i>}
                      title="Identidade Visual & Branding"
                      services={[
                        "Criação de Logotipos",
                        "Manual de Marca (Branding)",
                        "Paleta de Cores e Tipografia",
                        "Templates para Redes Sociais",
                      ]}
                    />
                  </div>
                  <div className="col-md-6 d-flex">
                    <ServiceBox
                      icon={<i className="fas fa-pencil-ruler"></i>}
                      title="Design Gráfico & Arte Digital"
                      services={[
                        "Peças para Redes Sociais",
                        "Diagramação de E-books e Catálogos",
                        "Ilustrações Personalizadas",
                        "Modelagem 3D Básica (Blender)",
                      ]}
                    />
                  </div>
                </div>

                <div className="frequently-asked-questions mt-5">
                  <h2 className="main-common-title">Perguntas Frequentes</h2>
                  <div className="accordion" id="accordionFAQ">
                    <AccordionItem
                      id="One"
                      title="Como funciona o processo de um projeto?"
                      content="Meu processo é colaborativo e dividido em etapas claras: briefing para entender suas necessidades, proposta comercial, etapa de design (wireframe/layout), desenvolvimento e, por fim, a entrega final com os devidos ajustes."
                      parent="accordionFAQ"
                      show={true}
                    />
                    <AccordionItem
                      id="Two"
                      title="Quais ferramentas você mais utiliza?"
                      content="Para design, meu carro-chefe é o Figma, junto com o pacote Adobe (Photoshop, Illustrator, After Effects). No desenvolvimento, trabalho principalmente com HTML, CSS, JavaScript e React."
                      parent="accordionFAQ"
                    />
                    <AccordionItem
                      id="Three"
                      title="Quanto custa um projeto?"
                      content="Cada projeto é único! O valor varia conforme a complexidade, escopo e prazo. Entre em contato para conversarmos sobre suas necessidades e eu prepararei um orçamento detalhado para você."
                      parent="accordionFAQ"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Card Final de Contato */}
            <div className="card content-box-card mt-4">
              <div className="card-body contact-final-card">
                <h3>
                  Para dúvidas ou orçamentos: <strong>contato</strong>
                </h3>
                <div className="contact-info">
                  <a href="mailto:muzzastudio@outlook.com">
                    <i className="fas fa-envelope"></i> muzzastudio@outlook.com
                  </a>
                  <a
                    href="https://wa.me/5521967332761"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-whatsapp"></i> +55 (21) 96733-2761
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;
