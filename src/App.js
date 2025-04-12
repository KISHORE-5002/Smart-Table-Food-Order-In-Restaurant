import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavHeader from './components/NavHeader';
import Footer from './components/Footer';
import MenuCard from './components/MenuCard';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import About from './pages/About';
import OrderOnline from './pages/OrderOnline';
import Reservation from './pages/Reservation';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <NavHeader />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/order-online" element={<OrderOnline />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/MenuCard" element={<MenuCard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;