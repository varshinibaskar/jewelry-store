import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-page">
      <div className="signup-container">
        <form className="signup-box">
          <h2>Create Your LUMYN Account</h2>

          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />

          <button type="submit">Sign Up</button>

          <p className="login-link">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;

