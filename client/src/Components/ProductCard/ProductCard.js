import React from 'react';
import './ProductCard.css';

function ProductCard() {
  return (
    <div className="product-card">
      <img src="https://via.placeholder.com/150" alt="Product" className="product-card__image" />
      <div className="product-card__details">
        <h3 className="product-card__title">Product Name</h3>
        <p className="product-card__price">$20.00</p>
        <button className="product-card__button">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
