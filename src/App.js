import React from "react";
import "./App.css";
import Nav from "./Nav";
import Menu from "./Menu";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="container">
    <div className="cta">
      <h1>yummy sandwiches</h1>
      <button>Look at the menu</button>
      <address>
        2848 Connecticut Avenue
        <br />
        Pittsburgh, PA 15216
        <br />
        412-576-2807
      </address>
    </div>
  </div>
);

export default App;
