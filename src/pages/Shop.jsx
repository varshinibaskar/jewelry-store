import React from "react";
import ProductList from "../components/ProductList";
import { products } from "../data/products";

const Shop = () => <ProductList products={products} />;

export default Shop;
