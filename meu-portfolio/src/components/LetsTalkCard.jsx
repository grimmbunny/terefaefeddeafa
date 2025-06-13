import React from "react";
import { Link } from "react-router-dom";

function LetsTalkCard() {
  return (
    <div className="card lets-talk-together-card">
      <div className="card-body">
        <h3 className="card-title">
          Vamos criar<span className="d-block">algo juntos?</span>
        </h3>
        <Link className="link-btn" to="/contact.html">
          Let's Talk
        </Link>
      </div>
    </div>
  );
}
export default LetsTalkCard;
