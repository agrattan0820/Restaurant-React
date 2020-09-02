import React, { useRef, useEffect } from "react";
import "./App.css";
import Home from "./Home";
import Nav from "./Nav";
import Menu from "./Menu";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TweenMax } from "gsap";
import { CSSTransition } from "react-transition-group";

const routes = [
  { path: "/", name: "Home", component: Home },
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
        {routes.map(({ path, Component }) => (
          <Route key={name} path={path} exact>
            <div className="page">
              <Component />
            </div>
          </Route>
        ))}
      </div>
    </Router>
  );
}

export default App;
