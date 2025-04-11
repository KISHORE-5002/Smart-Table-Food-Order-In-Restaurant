import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NavHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">SmartTable</Link>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link></li>
            <li><Link to="/order-online" onClick={() => setIsOpen(false)}>Order Online</Link></li>
            <li><Link to="/reservation" onClick={() => setIsOpen(false)}>Reservation</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavHeader;