import React from "react";

import About from "./Components/About/About";
import Main from "./Components/Main/Main";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div>
        <Main />
      </div>
      <div>
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
