import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="price">${product.price}</p>
        <p>{product.description}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;

