import "./about.css";
import ContactUs from "../components/ContactUs";

export default function About() {
  return (
    <div className="about-container">
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <h1 className="hero-title">Crafting Timeless Elegance</h1>
        <p className="hero-subtitle">Where tradition meets modern artistry</p>
      </section>

      <section className="about-content">
        <h2 className="section-heading">Our Story</h2>
        <p className="section-text">
          For over a decade, <strong>Jewelry Store</strong> has been creating 
          timeless pieces that celebrate love, tradition, and individuality. 
          Each design is handcrafted with ethically sourced gold, diamonds, 
          and precious stones—reflecting both beauty and responsibility.
        </p>

        <p className="section-text">
          Our master artisans blend age-old craftsmanship with modern precision, 
          ensuring every piece tells its own unique story. More than jewelry, 
          our creations are heirlooms—crafted to be treasured for a lifetime 
          and passed on for generations.
        </p>
      </section>
      <section className="craft-section">
        <div className="craft-image"></div>
        <div className="craft-text-box">
          <h2 className="section-heading">Exceptional Craftsmanship</h2>
          <p className="section-text">
            Every step of our process is guided by passion—from hand–selecting 
            gemstones to refining the smallest details. Our artisans treat each 
            creation like a work of art, ensuring flawless finish, durability, 
            and unmatched elegance.
          </p>
        </div>
      </section>

      <section className="values-section">
        <h2 className="section-heading">Our Values</h2>

        <div className="values-grid">
          <div className="value-card">
            <h3>✨ Ethical Sourcing</h3>
            <p>Only conflict-free diamonds and responsibly sourced materials.</p>
          </div>

          <div className="value-card">
            <h3>💛 Craftsmanship</h3>
            <p>Handcrafted with precision by skilled artisans.</p>
          </div>

          <div className="value-card">
            <h3>🌿 Sustainability</h3>
            <p>Environment-friendly practices with minimal waste.</p>
          </div>

          <div className="value-card">
            <h3>🎁 Meaningful Design</h3>
            <p>Jewelry created to celebrate moments, stories, and love.</p>
          </div>
        </div>
      </section>
      <ContactUs />

    </div>
  );
}

