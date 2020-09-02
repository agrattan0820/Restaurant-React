import React, { useRef, useEffect } from "react";
import "./App.css";
import Nav from "./Nav";
import Menu from "./Menu";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TweenMax } from "gsap";

function App() {
  let app = useRef(null);

  useEffect(() => {
    TweenMax.to(app, 0, { css: { visibility: "visible" } });
  });

  return (
    <Router>
      <div className="App" ref={(el) => (app = el)}>
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
