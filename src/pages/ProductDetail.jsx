import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import "./ProductDetail.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(product?.image);

  if (!product) return <h2>Product not found</h2>;

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate("/checkout");
  };

  const handleAddToWishlist = () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (!wishlist.some((item) => item.id === product.id)) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }

    navigate("/wishlist");
  };

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      await navigator.share({
        title: product.name,
        text: "Check out this product!",
        url: url,
      });
    } else {
      navigator.clipboard.writeText(url);
      alert("Product link copied to clipboard!");
    }
  };

  return (
    <div className="details-container">
      <div className="details-left">
        <img src={selectedImage} alt={product.name} className="big-image" />

        <div className="thumbnail-row">
          {[product.image, ...(product.thumbnails || [])].map((img, index) => (
            <img
              key={index}
              src={img}
              className="thumb"
              onClick={() => setSelectedImage(img)}
              alt="thumbnail"
            />
          ))}
        </div>
        <div className="below-image-box">
          <h3>Why You'll Love This Product ❤️</h3>
          <ul>
            <li>• Premium craftsmanship & long-lasting shine</li>
            <li>• Lightweight & comfortable</li>
            <li>• Perfect for gifting & daily wear</li>
            <li>• Skin-safe material with anti-tarnish polish</li>
          </ul>

          <h3>Package Includes 📦</h3>
          <ul>
            <li>• 1 x {product.name}</li>
            <li>• Premium Storage Box</li>
            <li>• Care Instructions Card</li>
            <li>• Certificate of Authenticity</li>
          </ul>

          <h3>Delivery & Returns 🚚</h3>
          <ul>
            <li>• Delivery within 3–5 business days</li>
            <li>• Free Delivery</li>
            <li>• 7-Day Easy Returns</li>
            <li>• Cash on Delivery Available</li>
          </ul>
        </div>
      </div>

      <div className="details-right">
        <h2>{product.name}</h2>
        <p className="price">₹{product.price}</p>
        <p className="desc">{product.description}</p>

        <h3>Specifications</h3>
        <table className="spec-table">
          <tbody>
            <tr><td>Category</td><td>{product.category}</td></tr>
            <tr><td>Subcategory</td><td>{product.subcategory}</td></tr>
            <tr><td>Material</td><td>{product.material}</td></tr>
            <tr><td>Weight</td><td>{product.weight}</td></tr>
            <tr><td>Warranty</td><td>{product.warranty}</td></tr>
          </tbody>
        </table>

        <div className="btn-row">
          <button className="add-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>

          <button className="buy-btn" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>

        <div className="extra-btn-row">
          <button className="wishlist-btn" onClick={handleAddToWishlist}>
            ❤️ Add to Wishlist
          </button>

          <button className="share-btn" onClick={handleShare}>
            🔗 Share
          </button>
        </div>
        <div className="extra-details">
          <h3>Product Highlights</h3>
          <ul>
            <li>✔ Premium craftsmanship</li>
            <li>✔ Skin-safe & hypoallergenic</li>
            <li>✔ Lightweight & durable</li>
            <li>✔ Perfect for gifting</li>
          </ul>

          <h3>Manufacturer Details</h3>
          <p><strong>Brand:</strong> {product.brand || "Royal Jewellery"}</p>
          <p><strong>Manufacturer:</strong> {product.manufacturer || "RJ Gold & Co."}</p>
          <p><strong>Country of Origin:</strong> India</p>

          <h3>Customer Reviews</h3>
          <div className="review-box">
            <p>⭐⭐⭐⭐⭐ – "Amazing quality!"</p>
            <p>⭐⭐⭐⭐ – "Beautiful shine."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;






