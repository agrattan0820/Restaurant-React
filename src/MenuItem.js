import React from "react";
import "./App.css";

function MenuItem({ name, price }) {
  return (
    <div className="menu-item-container">
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
}

export default MenuItem;
