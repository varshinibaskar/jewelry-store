import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to Our Jewellery Store</h1>
        <p>Explore elegant gold and sparkling diamond jewelry for every occasion.</p>
        <Link to="/shop" className="shop-button">Shop Now</Link>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="featured-grid">
          {/* You can map a few featured products here if needed */}
        </div>
      </section>

      <section className="about-section">
        <h2>About Us</h2>
        <p>We provide premium quality jewelry crafted with love and precision. Discover timeless pieces that enhance your elegance.</p>
      </section>
    </div>
  );
};

export default Home;
