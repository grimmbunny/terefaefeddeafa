import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
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
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDark);
    localStorage.setItem("darkMode", isDark);
  }, [isDark]);

  const toggleTheme = () => setIsDark((prevIsDark) => !prevIsDark);

  return (
    <BrowserRouter>
      <div id="page-content">
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        <main>
          {/* --- ROTAS CORRIGIDAS (SEM .html) --- */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/article" element={<Article />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio-details" element={<PortfolioDetails />} />
            <Route
              path="/portfolio-details-tamatask"
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
