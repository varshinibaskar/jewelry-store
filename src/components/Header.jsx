import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Header.css";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  return (
    <header className="header">
      <div className="logo-section">
        <Link to="/">
          <img src="/images/logo.png" alt="Lumyn Logo" className="logo" />
        </Link>
        <h1 className="brand-name">LUMYN</h1>
      </div>

      <div className="search-section">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for jewellery..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="icon-section">
        <Link to="/"><img src="/icons/home.png" alt="Home" /></Link>
        <Link to="/shop"><img src="/icons/shop.png" alt="Shop" /></Link>

        <div style={{ position: "relative" }}>
          <Link to="/cart">
            <img src="/icons/cart.png" alt="Cart" />
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
          </Link>
        </div>

        <Link to="/login"><img src="/icons/login.png" alt="Login" /></Link>
        <Link to="/signup"><img src="/icons/signup.png" alt="Sign Up" /></Link>
        <Link to="/about"><img src="/icons/info.png" alt="About" /></Link>

        <Link to="/wishlist">
          <img src="/icons/heart image.png" alt="Wishlist" />
        </Link>
      </div>
    </header>
  );
};

export default Header;









