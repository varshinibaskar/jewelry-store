import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contact-container">
      <div className="contact-header">
        <h2>Get in Touch</h2>
        <p>Your journey to timeless elegance begins here.</p>
      </div>

      <div className="contact-grid">
        
        <div className="contact-info">
          <h3>Contact Details</h3>
          <p><strong>Email:</strong> info@jewelrystore.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> 123 Gold Street, Chennai, India</p>
        </div>

        <div className="contact-branches">
          <h3>Our Branches</h3>
          <ul>
            <li>Chennai – T Nagar</li>
            <li>Bangalore – MG Road</li>
            <li>Hyderabad – Banjara Hills</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;

