import { Component } from "react";
import "./App.css";
import Nav from "./Components/Navigation/Nav";
import Teams from "./Components/Teams/Teams";
import Players from "./Components/Players/Players";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Teams" component={Teams} />
            <Route path="/Players" component={Players} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

export default App;
