import React from 'react';
import MenuCard from '../components/MenuCard';
import '../App.css';

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Margherita Pizza',
      description: 'Classic pizza with tomato sauce, mozzarella, and basil',
      price: 12.99,
      category: 'Pizza',
      image: 'https://via.placeholder.com/300x200?text=Margherita+Pizza'
    },
    {
      id: 2,
      name: 'Spaghetti Carbonara',
      description: 'Pasta with eggs, cheese, pancetta, and black pepper',
      price: 14.99,
      category: 'Pasta',
      image: 'https://via.placeholder.com/300x200?text=Spaghetti+Carbonara'
    },
    // Add more menu items...
  ];

  return (
    <div className="menu-page">
      <h1>Our Menu</h1>
      <div className="menu-filters">
        <button className="btn btn-secondary">All</button>
        <button className="btn btn-outline">Pizza</button>
        <button className="btn btn-outline">Pasta</button>
        <button className="btn btn-outline">Salads</button>
        <button className="btn btn-outline">Desserts</button>
      </div>
      <div className="menu-grid">
        {menuItems.map(item => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;