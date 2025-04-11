import React, { useState } from 'react';
import MenuCard from '../components/MenuCard';
import '../App.css';

const OrderOnline = () => {
  const [cart, setCart] = useState([]);

  const menuItems = [
    // Same as in Menu.jsx
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="order-online-page">
      <h1>Order Online</h1>

      <div className="order-container">
        <div className="menu-section">
          <h2>Menu</h2>
          <div className="menu-grid">
            {menuItems.map(item => (
              <MenuCard
                key={item.id}
                item={item}
                onAddToCart={() => addToCart(item)}
              />
            ))}
          </div>
        </div>

        <div className="cart-section">
          <h2>Your Order</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div className="cart-items">
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <p>{item.name}</p>
                  <p>${item.price.toFixed(2)}</p>
                </div>
              ))}
              <div className="cart-total">
                <h3>Total: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</h3>
              </div>
              <button className="btn btn-primary">Proceed to Checkout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderOnline;