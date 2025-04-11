import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>SmartTable</h3>
          <p>Revolutionizing the dining experience with smart technology.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div  className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/reservation">Reservation</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/order-online">Order Online</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Hosur,Tamil Nadu</p>
          <p> 91+ 7904183289</p>
          <p> kishoresundar972@gmail.com</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#instagram">Instagram</a>
            <a href="#twitter">Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SmartTable Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;