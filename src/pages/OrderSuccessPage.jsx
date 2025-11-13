import React from "react";
import { Link } from "react-router-dom";
import "./orderSuccess.css";

const OrderSuccessPage = () => {
  return (
    <div className="order-success-container">
      <h1>🎉 Order Placed Successfully!</h1>
      <p>Your jewellery will be delivered soon 💎</p>
      <Link to="/shop" className="back-to-shop-btn">
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderSuccessPage;
