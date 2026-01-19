import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import {useContext} from "react";
import {AppContext} from "../context/appContext";

const Footer = () => {
   const {appName}=useContext(AppContext);
  return (
    <footer className="footer-container">
      <div className="footer-content">

        <div className="footer-section">
          <h3>About {appName}</h3>
          <p>
            {appName} is dedicated to improving mental wellness, daily positivity, 
            and mindfulness practices. Join our community and start your journey 
            towards a balanced and mindful life.
          </p>
        </div>

       
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/tips">Tips</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>

        
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@{appName}.com</p>
          <p>Phone: +92 300 1234567</p>
          <p>Address: MindNest HQ, Karachi, Pakistan</p>
        </div>

       
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {appName}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
