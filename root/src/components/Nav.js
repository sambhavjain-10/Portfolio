import React from "react";

function Nav() {
  return (
    <nav>
      <div className="toggle">
        <span className="es"> Sambhav Jain | Full Stack Developer</span>
        <div className="icon">
          <div className="hamburger"></div>
        </div>
      </div>
      <ul>
        <li>
          <a href="#home">
            <i className="fas fa-home"></i> HOME
          </a>
        </li>
        <li>
          <a href="#about">
            <i className="fas fa-user"></i> ABOUT
          </a>
        </li>
        <li>
          <a href="#projects">
            <i className="fas fa-code"></i> PROJECTS
          </a>
        </li>
        <li>
          <a href="#contact">
            <i className="fas fa-envelope"></i> CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
