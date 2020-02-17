import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/style.css";
import "../assets/styles/animate.css";

function Header() {
  return (
    <ul className="nav nav-tabs">

      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/about" className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
          About Me
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/gallery" className={window.location.pathname === "/gallery" ? "nav-link active" : "nav-link"}>
          Portfolio Gallery
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
          Contact
        </Link>
      </li>
     
    </ul>
  );
}

export default Header;
