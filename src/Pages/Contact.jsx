import React from "react";
import "../css/contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-content">
        <h1>Contact <span className="highlight">Me</span></h1>
        <p>
          If you have any questions or project ideas, feel free to reach out.
        </p>
        <form>
          <div className="input-group">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
