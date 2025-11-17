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

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const orderDetails = {
      orderId: "LUMYN-" + Math.floor(100000 + Math.random() * 900000),
      customer: formData.name,
      address: formData.address,
      city: formData.city,
      pincode: formData.pincode,
      paymentMethod: formData.paymentMethod,
      items: cartItems,
      date: new Date().toLocaleString(),
      totalAmount: total,
    };

    navigate("/order-success", {
      state: { orderDetails },
    });

    clearCart();
  };

  return (
    <div className="checkout-wrapper">
      <h1 className="checkout-title">Checkout</h1>

      <div className="checkout-main">
        <div className="order-summary">
          <h2>Order Summary</h2>

          <div className="order-items">
            {cartItems.length === 0 ? (
              <p>No items in cart</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="order-item">
                  <div className="summary-left">
                    <img src={item.image} alt={item.name} className="summary-img" />
                    <span>{item.name} × {item.quantity}</span>
                  </div>
                  <span className="summary-price">₹{item.price * item.quantity}</span>
                </div>
              ))
            )}
          </div>

          <div className="order-total">
            <strong>Total:</strong> <span>₹{total}</span>
          </div>
        </div>
        <form className="checkout-form" onSubmit={handlePlaceOrder}>
          <h2>Shipping Details</h2>

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
            type="number"
            name="pincode"
            placeholder="Pincode"
            required
            maxLength="6"
            onChange={handleChange}
          />

          <label className="payment-label">Payment Method</label>
          <select
            name="paymentMethod"
            onChange={handleChange}
            className="payment-select"
          >
            <option value="COD">Cash on Delivery</option>
            <option value="UPI">UPI / Online Payment</option>
            <option value="Card">Credit / Debit Card</option>
          </select>

          <button type="submit" className="place-order-btn">
            Confirm & Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;


