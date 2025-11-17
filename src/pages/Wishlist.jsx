import React from "react";
import "./wishlist.css";

const WishlistPage = () => {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter((item) => item.id !== id);
    localStorage.setItem("wishlist", JSON.stringify(updated));
    window.location.reload(); 
  };

  return (
    <div className="wishlist-page">
      <h2 className="wishlist-title">Your Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="empty-wishlist">No items in wishlist</p>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((item) => (
            <div key={item.id} className="wishlist-card">
              <img
                src={item.image}
                alt={item.name}
                className="wishlist-image"
              />

              <div className="wishlist-info">
                <h3>{item.name}</h3>
                <p className="wishlist-price">₹{item.price}</p>

                <button
                  className="wishlist-remove-btn"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;

