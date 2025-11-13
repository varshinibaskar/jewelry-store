import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./checkout.css";

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    pincode: "",
    paymentMethod: "COD",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    clearCart();
    navigate("/order-success");
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      <div className="checkout-summary">
        <h2>Order Summary</h2>
        {cartItems.map((item) => (
          <p key={item.id}>
            {item.name} × {item.quantity} = ₹{item.price * item.quantity}
          </p>
        ))}
        <h3>Total: ₹{total}</h3>
      </div>

      <form className="checkout-form" onSubmit={handlePlaceOrder}>
        <h2>Shipping Address</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          required
          onChange={handleChange}
        />

        <select name="paymentMethod" onChange={handleChange}>
          <option value="COD">Cash on Delivery</option>
          <option value="UPI">UPI / Online Payment</option>
          <option value="Card">Credit/Debit Card</option>
        </select>

        <button type="submit" className="place-order-btn">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
