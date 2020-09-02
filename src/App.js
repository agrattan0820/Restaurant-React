import React, { useRef, useEffect } from "react";
import "./App.css";
import Home from "./Home";
import Nav from "./Nav";
import Menu from "./Menu";
import Contact from "./Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { TweenMax } from "gsap";
import { CSSTransition } from "react-transition-group";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/menu", name: "Menu", Component: Menu },
  { path: "/contact", name: "Contact", Component: Contact },
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
        {routes.map(({ path, name, Component }) => (
          <Route key={name} path={path} exact>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={1200}
                classNames="page"
                unmountOnExit
              >
                <div className="page">
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
    </Router>
  );
}

export default App;
