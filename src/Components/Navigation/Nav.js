import React from "react";
import "./nav.css";

export const Nav = () => {
  return (
    <div>
      <nav>
        <label className="logo">Brunngard Design</label>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
