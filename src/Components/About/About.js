import React from "react";
import "./about.css";
import logo1 from "./devices.png";
import logo2 from "./tools.png";

export const About = () => {
  return (
    <div>
      <div className="container">
        <div className="con1">
          <img className="logos" src={logo1} alt="logo of devices"></img>
        </div>

        <div className="con2">
          <img className="logos" src={logo2}></img>
        </div>
        <div className="con3">Optimering</div>
      </div>
      <di></di>
    </div>
  );
};

export default About;
