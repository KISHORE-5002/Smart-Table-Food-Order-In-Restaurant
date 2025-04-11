import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to SmartTable</h1>
          <p>Experience the future of dining with our smart ordering system</p>
          <div className="cta-buttons">
            <Link to="/order-online" className="btn btn-primary">Order Now</Link>
            <Link to="/reservation" className="btn btn-secondary">Book a Table</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Us</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast Ordering</h3>
            <p>Order directly from your table with our smart system</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🍽️</div>
            <h3>Diverse Menu</h3>
            <p>Explore our wide variety of delicious dishes</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Mobile Friendly</h3>
            <p>Access our menu and order from your smartphone</p>
          </div>
        </div>
      </section>

      <section className="special-offers">
        <h2>Today's Specials</h2>
        <div className="specials-grid">
          <div className="special-card">
            <img src="https://via.placeholder.com/300x200?text=Special+Dish+1" alt="Special Dish 1" />
            <h3>Chef's Special Pasta</h3>
            <p className="price">$15.99</p>
          </div>
          <div className="special-card">
            <img src="https://via.placeholder.com/300x200?text=Special+Dish+2" alt="Special Dish 2" />
            <h3>Grilled Salmon</h3>
            <p className="price">$18.99</p>
          </div>
          <div className="special-card">
            <img src="https://via.placeholder.com/300x200?text=Special+Dish+3" alt="Special Dish 3" />
            <h3>Vegetable Lasagna</h3>
            <p className="price">$14.99</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;