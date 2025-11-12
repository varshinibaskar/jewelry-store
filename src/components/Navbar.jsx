import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/shop">Shop</Link>
    <Link to="/cart">Cart</Link>
    <Link to="/about">About</Link> {/* 👈 New link */}
  </nav>
);

export default Navbar;
