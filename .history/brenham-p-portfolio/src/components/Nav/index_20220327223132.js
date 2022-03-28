
import React from "react";
import { Navbar } from "react-bootstrap";
import {NavLink} from "react-router-dom";

function Nav() {
  return (
    <div>
      <Navbar expand="lg" bg="dark">
        <NavLink className="nav-link" to="/">
          <div>
            <h4 className="nav-title-font">Brenham Pozzi</h4>
          </div>
        </NavLink>
        <ul className="navbar-nav ml-auto navitem-indent">
          <li className="nav-item m-2 ">
            <NavLink to="/about">
              <div className="nav-font">About Me</div>
            </NavLink>
          </li>
          <li className="nav-item m-2 ">
            <NavLink to="/portfolio">
              <div className="nav-font">Portfolio</div>
            </NavLink>
          </li>
          <li className="nav-item m-2 ">
            <NavLink to="/contact">
              <div className="nav-font">Contact</div>
            </NavLink>
          </li>
          <li className="nav-item m-2 ">
            <NavLink to="/resume">
              <div className="nav-font">Resume</div>
            </NavLink>
          </li>
        </ul>
      </Navbar>
    </div>
  );
}

export default Nav;
