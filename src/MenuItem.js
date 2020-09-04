import React from "react";
import "./App.css";

function MenuItem({ name, price, image }) {
  return (
    <div className="menu-item-container">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
}

export default MenuItem;
