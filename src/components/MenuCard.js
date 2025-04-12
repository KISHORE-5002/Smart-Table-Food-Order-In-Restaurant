import React from 'react';
import  './MenuCard.css'
const MenuCard = ({ item, onAddToCart }) => {
  return (
    <div className="menu-card">
      <div className="menu-card-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="menu-card-content">
        <h3>{item.name}</h3>
        <p className="menu-card-description">{item.description}</p>
        <div className="menu-card-footer">
          <span className="menu-card-price">${item.price.toFixed(2)}</span>
          <button
            className="add-to-cart-btn"
            onClick={onAddToCart}
            aria-label={`Add ${item.name} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;