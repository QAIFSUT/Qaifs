import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>QAIFS</h3>
            <p>Quantitative AI & Financial Systems at the University of Toronto Scarborough. 
            Exploring, promoting, and facilitating AI applications in quantitative finance and development.</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/hashim-raja-8408b8270/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
              <a href="https://www.instagram.com/qaifs.ut/" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
              <a href="https://discord.gg/UnSTYKjBjx" target="_blank" rel="noopener noreferrer" className="social-link">Discord</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Activities</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Activities</h4>
            <ul>
              <li>Educational Workshops</li>
              <li>Events & Seminars</li>
              <li>Technical Resources</li>
              <li>Community Building</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Email: qaifs.ut@gmail.com</p>
            <p>Campus: University of Toronto Scarborough</p>
            <p>Location: Scarborough, Ontario, Canada</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 QAIFS - University of Toronto Scarborough. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 