import React from "react";
import "./App.css";

const sandwiches = [
  { name: "Turkey Club", price: "$7.99" },
  { name: "Roast Beef Sandwich", price: "$9.99" },
  { name: "BLT", price: "$5.99" },
];

function Menu() {
  return (
    <div className="container">
      <h1>Menu</h1>
      <div className="menu-container"></div>
    </div>
  );
}

export default Menu;
