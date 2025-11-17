import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./cart.css";

const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    getTotalAmount,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-page">
      <h1>My Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                  onClick={() => navigate(`/product/${item.id}`)}
                />

                <div className="cart-item-details">
                  <h3 onClick={() => navigate(`/product/${item.id}`)}>
                    {item.name}
                  </h3>

                  <div className="quantity-controls">
                    <button
                      className="qty-btn"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>

                    <span className="qty-value">{item.quantity}</span>

                    <button
                      className="qty-btn"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>

                  <p className="item-price">
                    ₹{item.price} × {item.quantity} ={" "}
                    <strong>₹{item.price * item.quantity}</strong>
                  </p>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Total: ₹{getTotalAmount()}</h2>

            <div className="cart-actions">
              <button className="clear-btn" onClick={clearCart}>
                Clear Cart
              </button>

              <button className="checkout-btn" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
