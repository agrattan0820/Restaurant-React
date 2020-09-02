import React, { useRef, useEffect } from "react";
import "./App.css";
import Home from "./Home";
import Nav from "./Nav";
import Menu from "./Menu";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TweenMax } from "gsap";

const routes = [
  { path: "/", name: "Home", exact, component: Home },
  { path: "/menu", name: "Menu", component: Menu },
  { path: "/contact", name: "Contact", component: Contact },
];

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

export default App;
