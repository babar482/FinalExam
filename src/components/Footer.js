import React from "react";
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h2>Contact Us</h2>
            <p>Email: example@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div className="footer-section">
            <h2>Follow Us</h2>
            <p>Twitter</p>
            <p>Facebook</p>
            <p>Instagram</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
