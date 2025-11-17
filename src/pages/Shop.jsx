import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/productCard";
import './shop.css';

const Shop = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const collectionQuery = queryParams.get("collection"); 
  const searchQuery = queryParams.get("search") || "";    

  const categories = ["All", "Gold", "Diamond"];
  const subcategories = ["All", "Ring", "Earring", "Jhumka", "Bracelet", "Bangle", "Necklace", "Nosepin"];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState(searchQuery);

  useEffect(() => {
    
    if (collectionQuery) {
      setSelectedCategory(collectionQuery.includes("Gold") ? "Gold" : "Diamond");
      setSelectedSubcategory("All");
      setSearchTerm(""); 
    }
    if (searchQuery) {
      setSearchTerm(searchQuery);
      const foundProduct = products.find(
        (p) =>
          p.category.toLowerCase() === searchQuery.toLowerCase() ||
          p.subcategory.toLowerCase() === searchQuery.toLowerCase()
      );
      if (foundProduct) {
        setSelectedCategory(foundProduct.category);
        setSelectedSubcategory(foundProduct.subcategory);
      }
    }
  }, [collectionQuery, searchQuery]);

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;
    const subcategoryMatch = selectedSubcategory === "All" || product.subcategory === selectedSubcategory;
    const searchMatch =
      searchTerm === "" ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.subcategory.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && subcategoryMatch && searchMatch;
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/shop?search=${encodeURIComponent(searchTerm)}`);
  };

  return (
  <div className="shop-container">
      <div className="shop-banner">
        <img
          src="\images\banner.jpg"
          alt="Jewellery Banner"
          className="banner-image"
        />
        <div className="banner-text">
          <h2>Elegance That Shines</h2>
          <p>Discover timeless gold & diamond collections crafted to perfection.</p>
        </div>
      </div>

      <h1>Shop</h1>
      <div className="search-bar">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search products or collections..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="filters">
        <div>
          <label>Category:</label>
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Subcategory:</label>
          <select value={selectedSubcategory} onChange={(e) => setSelectedSubcategory(e.target.value)}>
            {subcategories.map((sub) => (
              <option key={sub} value={sub}>{sub}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
  </div>
);
};

export default Shop;
