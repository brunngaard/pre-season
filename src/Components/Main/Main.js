import React from "react";
import Nav from "../Navigation/Nav";
import "./main.css";

export const Main = () => {
  return (
    <div className="background">
      <Nav />
      <div className="start-info">
        <h1 className="font">We make websites for you and your company!</h1>
        <div className="wrapper">
          <a href="mailto:brunngard.emil@gmail.com">
            "<button className="btn">Contact Us</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
