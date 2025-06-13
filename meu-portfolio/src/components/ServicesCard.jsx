import React from "react";
import { Link } from "react-router-dom";

function ServicesCard() {
  return (
    <div className="card services-card">
      <div className="card-body">
        <h3 className="card-title">
          Services{" "}
          <Link className="link-btn" to="/services.html">
            See All Services
          </Link>
        </h3>
        {/* Aqui entrará a lista de serviços */}
      </div>
    </div>
  );
}
export default ServicesCard;
