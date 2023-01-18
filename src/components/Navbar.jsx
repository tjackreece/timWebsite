import React from "react";
import "./componentsCSS/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navLogo">
        <h1>dev.</h1>
      </div>
      <nav className="navBar">
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/recommendations">Recommendations</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  );
};

export default Navbar;
