import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// --- IMPORTAÇÃO DOS ESTILOS GLOBAIS ---
// O Vite vai processar esses arquivos e aplicá-los à sua aplicação.
import "./assets/css/bootstrap.min.css";
import "./assets/fontawsome/css/all.min.css";
import "./assets/css/magnific-popup.css"; // Será substituído, mas pode manter por agora
import "./assets/css/slick.css"; // Também será substituído
import "./assets/css/style.css";
import "./assets/css/responsive.css";
// -----------------------------------------

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
