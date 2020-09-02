import React, { useRef, useEffect } from "react";
import "./App.css";
import { TweenMax, Power3 } from "gsap";

function Home() {
  let headline = useRef(null);

  useEffect(() => {
    TweenMax.from(headline, 0.8, {
      opacity: 0,
      y: 20,
      ease: Power3.easeOut,
      delay: 1,
    });
  });

  return (
    <div className="container">
      <div className="cta">
        <h1 ref={(el) => (headline = el)}>yummy sandwiches</h1>
        <button>Look at the menu</button>
        <address>
          2848 Connecticut Avenue
          <br />
          Pittsburgh, PA 15216
          <br />
          412-576-2807
        </address>
      </div>
    </div>
  );
}

export default Home;
