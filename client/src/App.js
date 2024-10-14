import React from 'react';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import ProductCard from './Components/ProductCard/ProductCard';
import Footer from './Components/Footer/Footer';
import './styles/App.css';  

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="product-container">
        <ProductCard />
     
      </div>
      <Footer />
    </div>
  );
}

export default App;
