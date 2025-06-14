import React from "react";

// Certifique-se de que o caminho para a sua imagem de perfil está correto
import profileImage from "../assets/img/images/profile.png";

function ProfileCard() {
  return (
    <div className="card profile-card" style={{ height: "100%" }}>
      <div className="card-body">
        <div className="image text-center">
          <img src={profileImage} alt="Flávia Proença" />
        </div>
        <div className="text">
          <h3 className="card-title">Flávia Proença🤘</h3>
          <h4 className="profile-subtitle">
            Designer Fullstack (Design + Código)
          </h4>
          <p>
            Sou designer e desenvolvedora do Rio de Janeiro com foco em criar
            soluções digitais que unem estética, funcionalidade e tecnologia.
            Minha carreira é dedicada a explorar a sinergia entre o design
            criativo e o desenvolvimento técnico, atuando de ponta a ponta no
            ciclo de vida de um produto.
          </p>
          <p>
            Formada em Design Digital (PUC-Rio), pós-graduada em UI/UX (Unyleya)
            e atualmente cursando Análise e Desenvolvimento de Sistemas
            (Mackenzie).
          </p>
          <div className="social-media-icon">
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://github.com/grimmbunny"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.behance.net/muzzae"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Behance"
                >
                  <i className="fab fa-behance"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/lapiccino"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://linktr.ee/flxvia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Linktree"
                >
                  <i className="fas fa-link"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
