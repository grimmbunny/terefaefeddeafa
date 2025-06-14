import React from "react";
import { Link } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import tamataskImage from "../assets/img/projects/tamatask.jpg";

function TamaTaskDetailsPage() {
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
                    <img src={tamataskImage} alt="TamaTask Project" />
                  </div>
                  <div className="portfolio-details-text">
                    <div className="short-info">
                      <div className="info-item">
                        <p className="subtitle">Cliente:</p>
                        <h4 className="card-title">Projeto Pessoal</h4>
                      </div>
                      <div className="info-item">
                        <p className="subtitle">Serviços:</p>
                        <h4 className="card-title">
                          UI/UX Design & Desenvolvimento
                        </h4>
                        <a
                          href="https://grimmbunny.github.io/tamatask/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="website"
                        >
                          Visite o TamaTask
                          <i className="fas fa-arrow-up-right-from-square ms-2"></i>
                        </a>
                      </div>
                    </div>
                    <div className="overview">
                      <h4 className="card-title">
                        TamaTask: Produtividade Gamificada
                      </h4>
                      <p>
                        O TamaTask é uma aplicação web que combina um
                        gerenciador de tarefas com a nostalgia de um mascote
                        virtual. Inspirado nos Tamagotchis, o usuário cuida de
                        seu pet ao completar tarefas, usar o temporizador
                        Pomodoro e interagir com o mascote, ganhando XP para
                        evoluir.
                      </p>
                    </div>
                  </div>

                  <div className="more-info-block">
                    <h3 className="more-info-title">
                      Funcionalidades Principais
                    </h3>
                    <ul className="list-unstyled listed-info">
                      <li>
                        <b>Gerenciador de Tarefas:</b> Permite adicionar,
                        concluir e gerenciar tarefas diárias.
                      </li>
                      <li>
                        <b>Temporizador Pomodoro:</b> Ajuda a manter o foco com
                        ciclos de trabalho e descanso.
                      </li>
                      <li>
                        <b>Gamificação:</b> Sistema de XP, níveis e barras de
                        progresso que incentivam a interação.
                      </li>
                      <li>
                        <b>Player de Lo-fi:</b> Música integrada com seleção de
                        faixas para criar um ambiente de foco.
                      </li>
                      <li>
                        <b>Bloco de Notas:</b> Um espaço simples para anotações
                        rápidas.
                      </li>
                      <li>
                        <b>Sistema de Recompensas:</b> Notificações de ganho de
                        XP ao concluir atividades.
                      </li>
                    </ul>

                    <h3 className="more-info-title">Tecnologias e Conceitos</h3>
                    <ul className="list-unstyled listed-info">
                      <li>
                        <b>Design:</b> Prototipado no Figma, focando em uma UI
                        amigável e intuitiva.
                      </li>
                      <li>
                        <b>Desenvolvimento:</b> Construído com HTML, CSS e
                        JavaScript (vanilla) e posteriormente portado para
                        React.js.
                      </li>
                      <li>
                        <b>Recursos do Navegador:</b> Utiliza localStorage para
                        salvar o progresso, manipulação do DOM e controle de
                        áudio.
                      </li>
                    </ul>
                  </div>
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

export default TamaTaskDetailsPage;
