import React, { useRef, useEffect } from "react";
import "./App.css";
import { TweenMax, Power3 } from "gsap";

function MenuItem({ name, price, image, index }) {
  let menuItem = useRef();
  console.log(menuItem);

  useEffect(() => {
    TweenMax.from(menuItem, 0.8, {
      opacity: 0,
      x: -100,
      ease: Power3.easeOut,
      delay: 1.2,
    });
  });

  return (
    <div
      className="menu-item-container"
      key={index}
      ref={(el) => (menuItem = el)}
    >
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
}

export default MenuItem;
