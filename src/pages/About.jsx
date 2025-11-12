import React from "react";

const About = () => {
  return (
    <div className="about-page" style={{ padding: "40px", textAlign: "center" }}>
      <h2>About Our Jewelry Store</h2>
      <p style={{ maxWidth: "700px", margin: "20px auto", lineHeight: "1.6" }}>
        At <strong>Jewelry Store</strong>, we believe every piece of jewelry tells a story.
        For over a decade, our mission has been to bring elegance, beauty, and craftsmanship
        to your most cherished moments.  
      </p>
      <p style={{ maxWidth: "700px", margin: "20px auto", lineHeight: "1.6" }}>
        Each item in our collection is handcrafted with precision and passion, using
        ethically sourced materials and exquisite gemstones. Whether it’s a diamond ring
        for a proposal or a gold necklace to celebrate love — we’re honored to be part
        of your journey.
      </p>
      <h3>Our Values</h3>
      <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
        <li>💎 Exceptional Quality</li>
        <li>🌿 Ethical Sourcing</li>
        <li>💖 Customer Satisfaction</li>
        <li>✨ Timeless Design</li>
      </ul>
    </div>
  );
};

export default About;
