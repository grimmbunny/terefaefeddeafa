import React from "react";
import { Link } from "react-router-dom";

function ProjectsCard() {
  return (
    <div className="card card-projects">
      <div className="card-body">
        <h3 className="card-title">
          Recent Projects{" "}
          <Link className="link-btn" to="/portfolio.html">
            All Projects
          </Link>
        </h3>
        {/* Aqui entrará o slider com 'react-slick' */}
      </div>
    </div>
  );
}
export default ProjectsCard;
