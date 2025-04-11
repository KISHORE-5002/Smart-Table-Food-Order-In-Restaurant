import React from 'react';
import '../App.css';

const MenuCard = ({ item, onAddToCart }) => {
  return (
    <div className="menu-card">
      <img src={item.image} alt={item.name} />
      <div className="menu-card-content">
        <h3>{item.name}</h3>
        <p className="menu-card-description">{item.description}</p>
        <div className="menu-card-footer">
          <span className="price">${item.price.toFixed(2)}</span>
          {onAddToCart && (
            <button onClick={onAddToCart} className="btn btn-primary">
              Add to Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;