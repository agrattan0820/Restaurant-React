import React, { useRef, useEffect } from "react";
import MenuItem from "./MenuItem";
import "./App.css";
import { TweenMax, Power3 } from "gsap";
import Italian from "./images/eaters-collective-Gg5-K-mJwuQ-unsplash-min.jpg";
import RoastBeef from "./images/pexels-erin-wang-1647163-min.jpg";
import AvacadoToast from "./images/pexels-pixabay-236813-min.jpg";
import Salad from "./images/youjeen-cho-sBKLiRiunK0-unsplash-min.jpg";

const sandwiches = [
  {
    name: "Italian Sub",
    price: "$7.99",
    image: Italian,
    index: 1,
  },
  {
    name: "Chipotle Roast Beef",
    price: "$9.99",
    image: RoastBeef,
    index: 2,
  },
  {
    name: "Egg and Avacado Toast",
    price: "$5.99",
    image: AvacadoToast,
    index: 3,
  },
  {
    name: "Cranberry Pecan Salad",
    price: "$7.99",
    image: Salad,
    index: 4,
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
    <div className="menu-page">
      <h1 ref={(el) => (menuTitle = el)}>Menu</h1>
      <div className="menu-container">
        {sandwiches.map((sandwich) => (
          <MenuItem
            key={sandwich.index}
            name={sandwich.name}
            price={sandwich.price}
            image={sandwich.image}
            index={sandwich.index}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
