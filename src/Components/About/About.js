import React from "react";
import "./about.css";
import logo1 from "./devices.png";
import logo2 from "./tools.png";
import logo3 from "./optimize.png";
export const About = () => {
  return (
    <div>
      <div className="container">
        <div className="con1">
          <img className="logos" src={logo1} alt="logo of devices"></img>
          <p>
            We always make sure that your website works on any type of device
            such as desktop, tablet and mobile.
          </p>
        </div>

        <div className="con2">
          <img className="logos" src={logo2}></img>
          <p>
            We always keep you website up to date with the newest content. We
            also make sure that the website is always up and running for maximum
            effectivness and exposure.
          </p>
        </div>
        <div className="con3">
          <img className="logos" src={logo3}></img>
          <p>We optimize your website for maximum performance.</p>
        </div>
      </div>
      <div className="info-text">
        <h2>About Brunngard Design</h2>
        <p>We create websites for your company</p>
      </div>
    </div>
  );
};

export default About;
