import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/" exact>
        <div className="logo">
          <span className="restaurant-name">Danny's</span>
          <span className="emoji-logo" role="img" aria-label="Sandwich">
            &#x1F96A;
          </span>
        </div>
      </Link>
      <ul className="nav-links">
        <Link to="/menu">
          <li>Menu</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
