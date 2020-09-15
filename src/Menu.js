import React, { useRef, useEffect } from "react";
import MenuItem from "./MenuItem";
import "./App.css";
import { TweenMax, Power3 } from "gsap";

function Menu() {
  let menuTitle = useRef(null);

  useEffect(() => {
    TweenMax.from(menuTitle, 0.8, {
      opacity: 0,
      y: 20,
      ease: Power3.easeOut,
      delay: 1,
    });
  });

  return (
    <div className="menu-page">
      <h1 ref={(el) => (menuTitle = el)}>Menu</h1>
      <div>
        <MenuItem />
      </div>
    </div>
  );
}

export default Menu;
