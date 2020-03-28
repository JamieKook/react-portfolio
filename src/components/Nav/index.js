import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Nav(props) {
  return (
    <nav className="navbar navbar-expand-md bg-white navbar-light justify-content-end sticky-top m-0">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul className="navbar-nav mx-3">
                <li className="nav-item">
                    <a className="nav-link text-black" href="#home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#education">Education</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#skills">Skill Set</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" target="_blank" href="https://www.linkedin.com/in/jamie-kook-b7816770/"><i className="fab fa-linkedin"></i></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" target="_blank" href="https://github.com/JamieKook"><i className="fab fa-github"></i></a>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default Nav;
