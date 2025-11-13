import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/productCard";
import './shop.css';

const Shop = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const collectionQuery = queryParams.get("collection"); // e.g., "Gold Collection"
  const searchQuery = queryParams.get("search") || "";    // e.g., from header search

  const categories = ["All", "Gold", "Diamond"];
  const subcategories = ["All", "Ring", "Earring", "Jhumka", "Bracelet", "Bangle", "Necklace", "Nosepin"];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState(searchQuery);

  // Update filters when URL query changes
  useEffect(() => {
    // Collection filter
    if (collectionQuery) {
      setSelectedCategory(collectionQuery.includes("Gold") ? "Gold" : "Diamond");
      setSelectedSubcategory("All");
      setSearchTerm(""); // reset search when navigating via collection
    }

    // Search filter
    if (searchQuery) {
      setSearchTerm(searchQuery);
      // Optional: auto-select category/subcategory if exact match found
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

  // Filter products
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

  // Handle typing in shop search bar
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Navigate with search query in URL
    navigate(`/shop?search=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className="shop-container">
      <h1>Shop</h1>

      {/* SEARCH BAR */}
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

      {/* FILTERS */}
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

      {/* PRODUCTS */}
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
