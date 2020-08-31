import React from "react";
import "./App.css";

function Contact() {
  return (
    <div className="container">
      <div>
        <form no>
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
            <label for="zipCode">Zip Code:</label>
            <input type="number" name="zipCode" id="zipCode" minlength="5" />
            <span class="error" aria-live="polite"></span>
          </div>
          <div>
            <label for="country">Country:</label>
            <input type="text" name="country" id="country" minlength="3" />
            <span class="error" aria-live="polite"></span>
          </div>
          <div>
            <label for="password">Password:</label>
            <input type="text" name="password" id="password" />
            <span class="error" aria-live="polite"></span>
          </div>
          <div>
            <label for="passwordConfirmation">Confirm your Password:</label>
            <input
              type="text"
              name="passwordConfirmation"
              id="passwordConfirmation"
            />
            <span class="error" aria-live="polite"></span>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
