import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
          <div>
          <a href="https://www.google.co.in/maps/place/Hosur,+Tamil+Nadu/@12.739524,77.7915102,13z/data=!3m1!4b1!4m6!3m5!1s0x3bae70c883f728a3:0xd71a6bc0275ac9be!8m2!3d12.7409127!4d77.8252923!16zL20vMDVmMjFo?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />HOSUR,TAMIL NADU</a></div>
          <div><a href="https://www.google.com/url?sa=D&q=tel:7904183289&ust=1744136100000000&usg=AOvVaw2H9t_J6uqVWbJ0_mUYRPzc&hl=en-GB"  rel="noopener noreferrer">        <FontAwesomeIcon icon={faPhone} className="contact-icon" />+91 7904183289</a></div>
          <div><a href="mailto:kishoresundar972@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} size="1x" />kishoresundar972@gmail.com</a></div>
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