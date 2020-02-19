import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/style.css";
import "../assets/styles/animate.css";

function Header() {
  return (
    <ul className="nav nav-tabs">

        <Link to="/" className={window.location.pathname === "/"}>
        <a className="navbar-brand" id="brand" href="index"> Kyle Betlach</a> 
        </Link>

      <li className="nav-item">
        <Link to="/about" className={window.location.pathname === "/about"}>
          About Me
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/gallery" className={window.location.pathname === "/gallery"}>
          Portfolio Gallery
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/contact" className={window.location.pathname === "/contact"}>
          Contact
        </Link>
      </li>

    <li className="nav-item">
      <a href="https://www.linkedin.com/in/kyle-betlach" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" id="linked"></i></a>
      <a href="https://github.com/kbetlach" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" id="git"></i></a>
    </li>

    </ul>
    
  );
}

export default Header;
