import React, { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/productCard"; 
import './shop.css';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");

  const categories = ["All", "Gold", "Diamond"];
  const subcategories = ["All", "Ring", "Earring", "Jhumka", "Bracelet", "Bangle", "Necklace", "Nosepin"];

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;
    const subcategoryMatch = selectedSubcategory === "All" || product.subcategory === selectedSubcategory;
    return categoryMatch && subcategoryMatch;
  });

  return (
    <div className="shop-container">
      <h1>Shop</h1>

      {/* Filters */}
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

      {/* Product listing */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
