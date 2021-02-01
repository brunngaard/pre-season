import React from "react";
import "./nav.css";
import imageLogo from "./hand-shake.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <img className="logo" src={imageLogo}></img>
      <nav>
        <ul className="nav_links">
          <Link to="/Teams">
            <li>Teams</li>
          </Link>
          <Link to="/Players">
            <li>Players</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
