import React, { useState, useEffect } from "react";
import Nav from "./Components/Navigation/Nav";
import About from "./Components/About/About";
import Main from "./Components/Main/Main";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div>
        <Main />
      </div>
      <div>
        <About />
      </div>
    </div>
  );
};

export default App;
