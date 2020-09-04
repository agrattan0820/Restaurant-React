import React, { useRef, useEffect } from "react";
import MenuItem from "./MenuItem";
import "./App.css";
import { TweenMax, Power3 } from "gsap";

const sandwiches = [
  {
    name: "Italian Sub",
    price: "$7.99",
    image: "./images/eaters-collective-Gg5-K-mJwuQ-unsplash-min.jpg",
  },
  {
    name: "Chipotle Roast Beef",
    price: "$9.99",
    image: "./images/pexels-erin-wang-1647163-min.jpg",
  },
  {
    name: "Egg and Avacado Toast",
    price: "$5.99",
    image: "./images/pexels-pixabay-236813-min.jpg",
  },
  {
    name: "Cranberry Pecan Chicken Salad",
    price: "$7.99",
    image: "./images/youjeen-cho-sBKLiRiunK0-unsplash-min.jpg",
  },
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
      <div className="menu-container">
        {sandwiches.map((sandwich) => (
          <MenuItem
            name={sandwich.name}
            price={sandwich.price}
            image={sandwich.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
