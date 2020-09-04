import React, { useRef, useEffect } from "react";
import "./App.css";
import { TweenMax, Power3 } from "gsap";

function Contact() {
  let form = useRef(null);

  useEffect(() => {
    TweenMax.from(form, 0.8, {
      opacity: 0,
      y: 20,
      ease: Power3.easeOut,
      delay: 1,
    });
  });

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h1>
          Call us at <span className="phone-number">412-576-2807</span>
        </h1>
        <h1>Or come and visit us!</h1>
        <address>
          2848 Connecticut Avenue
          <br />
          Pittsburgh, PA 15216
        </address>
      </div>
      <div>
        <form noValidate ref={(el) => (form = el)}>
          <div>
            <label for="email">Email Address:</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              minlength="8"
            />
            <span class="error" aria-live="polite"></span>
          </div>
          <div>
            <label htmlFor="messageArea">Message:</label>
            <textarea name="messageArea" id="" cols="30" rows="10"></textarea>
            <span class="error" aria-live="polite"></span>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
