import React, { useRef, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { TweenMax, Power3 } from "gsap";

function Home() {
  let headline = useRef(null);
  let address = useRef(null);
  let ctaButton = useRef(null);

  useEffect(() => {
    TweenMax.from(headline, 0.8, {
      opacity: 0,
      y: 20,
      ease: Power3.easeOut,
      delay: 1,
    });

    TweenMax.from(address, 0.8, {
      opacity: 0,
      y: 20,
      ease: Power3.easeOut,
      delay: 1.4,
    });

    TweenMax.from(ctaButton, 0.8, {
      opacity: 0,
      x: -100,
      ease: Power3.easeOut,
      delay: 1.2,
    });
  });

  return (
    <div className="container">
      <div className="cta">
        <h1 ref={(el) => (headline = el)}>yummy sandwiches</h1>
        <Link to="/menu">
          <button ref={(el) => (ctaButton = el)}>Look at the menu</button>
        </Link>
        <address ref={(el) => (address = el)}>
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
