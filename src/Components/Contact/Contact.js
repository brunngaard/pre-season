import React, { useState } from "react";
import "./contact.css";
import mail from "./mail.png";
import linked from "./linkedin.png";

const Contact = () => {
  return (
    <div className="contact">
      <h1>
        Please mail us or send a message on linkedin and we'll try to get back
        to you as soon as possible
      </h1>
      <div className="contact-icons">
        <a href="mailto:brunngard.emil@gmail.com">
          <img className="mail1" src={mail}></img>
        </a>
        <a href="https://www.linkedin.com/in/emil-brunng%C3%A5rd-34b765146/">
          <img className="mail" src={linked}></img>
        </a>
      </div>
    </div>
  );
};

export default Contact;
