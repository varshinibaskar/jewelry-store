import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import ContactUs from "../components/ContactUs";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { img: "/slides/slide1.jpg", text: "Where Elegance Meets Perfection" },
    { img: "/slides/slide2.jpg", text: "Crafted with Love, Made to Shine" },
    { img: "/slides/slide3.jpg", text: "Luxury You Can Feel" },
    { img: "/slides/slide4.jpg", text: "Timeless Jewellery, Endless Beauty" },
    { img: "/slides/slide5.jpg", text: "Redefining Traditional Craftsmanship" },
    { img: "/slides/slide6.jpg", text: "Shine Brighter Every Day" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const subcategoryCollections = [
    { name: "Necklaces", img: "/categories/necklace.jpg" },
    { name: "Earrings", img: "/categories/earrings.jpg" },
    { name: "Rings", img: "/categories/rings.jpg" },
    { name: "Bangles", img: "/categories/bangle.jpg" },
    { name: "Bracelets", img: "/categories/bracelet.jpg" },
    { name: "Anklets", img: "/categories/anklet.jpg" },
    { name: "Chains", img: "/categories/chains.jpg" },
    { name: "Pendant Sets", img: "/categories/pendant.jpg" },
  ];

  return (
    <div className="home">

      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <img src={slide.img} className="slide-image" alt={`slide-${index}`} />

            <div className={`slide-text ${index === currentSlide ? "show" : ""}`}>
              <h2>{slide.text}</h2>
              <Link to="/shop" className="shop-btn">Shop Now</Link>
            </div>
          </div>
        ))}
      </div>
      <section className="about-content">
        <h2 className="section-heading">Our Story</h2>
        <p className="section-text">
          For more than a decade, <strong>Jewelry Store</strong> has been devoted to crafting extraordinary pieces that celebrate love, tradition, and the unique stories that connect people. What began as a small, passionate pursuit of creating fine jewelry has grown into a trusted destination for those who seek meaningful designs—pieces that don’t just adorn, but truly enrich life’s most cherished moments.At the heart of our brand is a commitment to <strong>authentic craftsmanship</strong>. Every piece we create is thoughtfully designed and meticulously handcrafted by skilled artisans who have inherited the art of jewelry making through generations. 
        </p>

        <p className="section-text">
          Our philosophy has always been rooted in <strong>ethical sourcing and responsible practices</strong>. We understand the importance of creating beauty without compromising values. That is why every piece is made using ethically sourced gold, conflict-free diamonds, and carefully selected precious stones. We work closely with trusted partners who uphold high standards of transparency and sustainability, because we believe luxury must go hand in hand with integrity.Over the years, Jewelry Store has embraced innovation while honoring the traditions of fine craftsmanship. We combine age-old jewelry techniques with advanced technology to bring life to intricate designs with exceptional accuracy. 
        </p>
      </section>

      <section className="main-category-section">
        <h2 className="section-heading">Explore Our Collections</h2>

        <div className="main-category-grid center-grid">

          <Link to="/shop?category=Gold Jewellery" className="main-category-card">
            <img src="/collections/gold.jpg" alt="Gold Jewellery" className="main-category-image" />
            <h3>Gold Jewellery</h3>
          </Link>

          <Link to="/shop?category=Diamond Jewellery" className="main-category-card">
            <img src="/collections/diamond.jpg" alt="Diamond Jewellery" className="main-category-image" />
            <h3>Diamond Jewellery</h3>
          </Link>

        </div>
      </section>
      <section className="collections">
        <h2 className="section-heading">Shop by Category</h2>

        <div className="collection-grid">
          {subcategoryCollections.map((col, index) => (
            <Link
              key={index}
              to={`/shop?subcategory=${encodeURIComponent(col.name)}`}
              className="collection"
            >
              <img src={col.img} alt={col.name} className="collection-image" />
              <h2>{col.name}</h2>
            </Link>
          ))}
        </div>
      </section>
      <section className="craft-section">
        <div className="craft-image"></div>
        <div className="craft-text-box">
          <h2 className="section-heading">Exceptional Craftsmanship</h2>
          <p className="section-text">
            Every step of our process is guided by passion—from hand–selecting gemstones to refining the smallest details. Our artisans treat each creation like a work of art, ensuring flawless finish, durability, and unmatched elegance.
          </p>
        </div>
      </section>
      <section className="values-section">
        <h2 className="section-heading">Our Values</h2>

        <div className="values-grid">
          <div className="value-card">
            <h3>✨ Ethical Sourcing</h3>
            <p>Only conflict-free diamonds...</p>
          </div>

          <div className="value-card">
            <h3>💛 Craftsmanship</h3>
            <p>Handcrafted with precision...</p>
          </div>

          <div className="value-card">
            <h3>🌿 Sustainability</h3>
            <p>Environment-friendly practices...</p>
          </div>

          <div className="value-card">
            <h3>🎁 Meaningful Design</h3>
            <p>Jewelry created to celebrate moments...</p>
          </div>
        </div>
      </section>

      <ContactUs />

    </div>
  );
};

export default Home;

