import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // <-- import Link
import "./Home.css";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/slides/slide1.jpg",
    "/slides/slide2.jpg",
    "/slides/slide3.jpg",
    "/slides/slide4.jpg",
    "/slides/slide5.jpg",
    "/slides/slide6.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const categories = [
    { name: "Bracelet", img: "/categories/bracelet.jpg" },
    { name: "Bangle", img: "/categories/bangle.jpg" },
    { name: "Rings", img: "/categories/rings.jpg" },
    { name: "Earrings", img: "/categories/earrings.jpg" },
    { name: "Pendant", img: "/categories/pendant.jpg" },
    { name: "Anklet", img: "/categories/anklet.jpg" },
    { name: "Nosepin", img: "/categories/nosepin.jpg" },
    { name: "Necklace", img: "/categories/necklace.jpg" },
    { name: "Jhumka", img: "/categories/jhumka.jpg" },
  ];

  const collections = [
    { name: "Gold Collection", img: "/collections/gold.jpg" },
    { name: "Diamond Collection", img: "/collections/diamond.jpg" },
  ];

  const featuredItems = [
    { name: "Item 1", img: "/featured/feat1.jpg" },
    { name: "Item 2", img: "/featured/feat2.jpg" },
    { name: "Item 3", img: "/featured/feat3.jpg" },
    { name: "Item 4", img: "/featured/feat4.jpg" },
    { name: "Item 5", img: "/featured/feat5.jpg" },
    { name: "Item 6", img: "/featured/feat6.jpg" },
  ];

  return (
    <div className="home">
      {/* HERO SLIDER */}
      <div className="slider">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={index === currentSlide ? "active" : ""}
          />
        ))}
      </div>

      {/* CATEGORIES */}
      <section className="categories">
        {categories.map((cat, index) => (
          <div key={index} className="category">
            <img src={cat.img} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}
      </section>

      {/* COLLECTIONS */}
      <section className="collections">
        {collections.map((col, index) => (
          <Link
            key={index}
            to={`/shop?collection=${encodeURIComponent(col.name)}`} // <-- pass collection in query
            className="collection"
          >
            <img src={col.img} alt={col.name} />
            <h2>{col.name}</h2>
          </Link>
        ))}
      </section>

      {/* FEATURED */}
      <section className="featured">
        <h2>Featured Jewellery</h2>
        <div className="featured-items">
          {featuredItems.map((item, index) => (
            <div key={index} className="item">
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;


