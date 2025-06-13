import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// --- 1. Importando Componentes de Layout ---
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

// --- 2. Importando Componentes de Página ---
// (Usando os nomes exatos da sua estrutura de arquivos)
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import Article from "./pages/Article.jsx";
import PortfolioDetails from "./pages/PortfolioDetails.jsx";
import TamaTaskDetails from "./pages/TamaTaskDetails.jsx";

function App() {
  // --- 3. Gerenciamento do Tema (Dark Mode) ---
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDark);
    localStorage.setItem("darkMode", isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };

  return (
    <BrowserRouter>
      {/* O div principal que envolve todo o conteúdo da página */}
      <div id="page-content">
        {/* --- 4. Layout Fixo --- */}
        <Header isDark={isDark} toggleTheme={toggleTheme} />

        <main>
          {/* --- 5. Definição das Rotas --- */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/index.html" element={<Home />} />
            <Route path="/about.html" element={<About />} />
            <Route path="/services.html" element={<Services />} />
            <Route path="/portfolio.html" element={<Portfolio />} />
            <Route path="/blog.html" element={<Blog />} />
            <Route path="/article.html" element={<Article />} />
            <Route path="/contact.html" element={<Contact />} />
            <Route
              path="/portfolio-details.html"
              element={<PortfolioDetails />}
            />
            <Route
              path="/portfolio-details-tamatask.html"
              element={<TamaTaskDetails />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
