import React from "react";
import Nav from "../Navigation/Nav";
import "./main.css";

export const Main = () => {
  return (
    <div className="background">
      <Nav />
      <div className="start-info">
        <h1
          className="font"
          style={{
            marginTop: "100px",
            fontSize: "32px",
            textDecoration: "underline",
            color: "white",
            textTransform: "uppercase",
          }}
        >
          We make websites for you and your company!
        </h1>
        <div className="wrapper">
          <button className="btn">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
