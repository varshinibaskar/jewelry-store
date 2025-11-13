import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="login-container">
        <form className="login-box">
          <h2>Login to LUMYN</h2>
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
