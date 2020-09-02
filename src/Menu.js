import React, { useRef, useEffect } from "react";
import "./App.css";
import { TweenMax, Power3 } from "gsap";

const sandwiches = [
  { name: "Turkey Club", price: "$7.99" },
  { name: "Roast Beef Sandwich", price: "$9.99" },
  { name: "BLT", price: "$5.99" },
];

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
    <div className="container">
      <h1 ref={(el) => (menuTitle = el)}>Menu</h1>
      <div className="menu-container"></div>
    </div>
  );
}

export default Menu;
