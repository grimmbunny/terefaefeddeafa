import React, { useState } from "react";
import ProfileCard from "../components/ProfileCard";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    budget: "",
    message: "",
  });
  const [responseMsg, setResponseMsg] = useState({ text: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMsg({ text: "Enviando...", type: "" });

    try {
      const response = await fetch("assets/mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      const text = await response.text();

      if (response.ok) {
        setResponseMsg({ text, type: "success" });
        setFormData({
          name: "",
          email: "",
          subject: "",
          budget: "",
          message: "",
        });
      } else {
        throw new Error(text || "Ocorreu um erro.");
      }
    } catch (error) {
      setResponseMsg({
        text: error.message || "Oops! Algo deu errado.",
        type: "error",
      });
    }
    setTimeout(() => setResponseMsg({ text: "", type: "" }), 5000);
  };

  return (
    <section className="content-box-area mt-4">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-4">
            <ProfileCard />
          </div>
          <div className="col-xl-8">
            <div className="card content-box-card">
              <div className="card-body portfolio-card contact-card">
                <div className="top-info">
                  <div className="text">
                    <h1 className="main-title">
                      Vamos 👋 <span>Trabalhar</span> Juntos
                    </h1>
                    <p>
                      Estou aqui para ajudar se você estiver procurando um
                      designer de produto para dar vida à sua ideia ou um
                      parceiro de design para levar seu negócio para o próximo
                      nível.
                    </p>
                  </div>
                </div>
                <div className="leave-comments-area">
                  <div className="comments-box">
                    <form id="contact-form" onSubmit={handleSubmit}>
                      <div className="row gx-3">
                        <div className="col-md-6">
                          <div className="mb-4">
                            <label className="form-label">Nome</label>
                            <input
                              name="name"
                              required
                              type="text"
                              className="form-control shadow-none"
                              placeholder="Seu nome"
                              value={formData.name}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-4">
                            <label className="form-label">Email</label>
                            <input
                              name="email"
                              required
                              type="email"
                              className="form-control shadow-none"
                              placeholder="Seu email"
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-4">
                            <label className="form-label">Assunto</label>
                            <input
                              name="subject"
                              required
                              type="text"
                              className="form-control shadow-none"
                              placeholder="Assunto"
                              value={formData.subject}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-4">
                            <label className="form-label">Orçamento</label>
                            <select
                              name="budget"
                              required
                              className="form-select shadow-none"
                              value={formData.budget}
                              onChange={handleChange}
                            >
                              <option value="" disabled>
                                Selecione o orçamento...
                              </option>
                              <option value="< R$5.000">&lt; R$5.000</option>
                              <option value="R$5.000 - R$10.000">
                                R$5.000 - R$10.000
                              </option>
                              <option value="R$10.000 - R$20.000">
                                R$10.000 - R$20.000
                              </option>
                              <option value="> R$20.000">&gt; R$20.000+</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-4">
                            <label className="form-label">Mensagem</label>
                            <textarea
                              name="message"
                              className="form-control shadow-none"
                              rows="4"
                              placeholder="Detalhes da sua solicitação"
                              value={formData.message}
                              onChange={handleChange}
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button className="submit-btn" type="submit">
                            Enviar Mensagem
                          </button>
                        </div>
                      </div>
                    </form>
                    {responseMsg.text && (
                      <p className={`ajax-response ${responseMsg.type}`}>
                        {responseMsg.text}
                      </p>
                    )}
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

export default ContactPage;
