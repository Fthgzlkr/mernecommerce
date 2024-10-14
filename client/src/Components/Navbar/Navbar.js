import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item"><a href="/" className="navbar__link">Home</a></li>
        <li className="navbar__item"><a href="/products" className="navbar__link">Products</a></li>
        <li className="navbar__item"><a href="/contact" className="navbar__link">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
