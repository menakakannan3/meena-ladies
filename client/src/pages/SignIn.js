import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/SignIn.css";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    address: "",
    number: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("https://meena-ladies-server.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message || "User signed up successfully!");
        setFormData({
          email: "",
          username: "",
          password: "",
          address: "",
          number: "",
        });
        navigate("/"); // Redirect to the home page
      } else {
        setError(data.message || "Sign-up failed. Please try again.");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      setError("An error occurred. Please check your network connection.");
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2>SignUp</h2>
        <p>Hello! Register to get started</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="signin-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            className="signin-input"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="signin-input"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Enter your Address"
            className="signin-input"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="number"
            placeholder="Enter your Number"
            className="signin-input"
            value={formData.number}
            onChange={handleChange}
            required
          />
          <button type="submit" className="signin-button">
            SignUp
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}
