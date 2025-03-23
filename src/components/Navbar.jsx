import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Portfolio</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/links">Links</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
