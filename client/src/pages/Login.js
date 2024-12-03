import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("https://meena-ladies-server.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(`Successfully logged in! Welcome, ${data.username}`);
        // Save login status and username in localStorage
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("username", data.username);
        navigate("/"); // Redirect to the home page
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred. Please check your network connection.");
    }
  };

  return (
    <div className="login-modal">
      <div className="login-container">
        <h2>Login</h2>
        <p>Welcome back! Glad to see you again!</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input-field"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="input-field"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="login-button">Login</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <p className="register-text">
          Don’t have an account? <a href="/Signin">Register Now</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
