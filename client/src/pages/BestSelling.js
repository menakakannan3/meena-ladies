import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/Bestselling.css";
import red from "../assests/red'.jpg";
import blue from "../assests/blue.jpg";

const BestSelling = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const products = [
    {
      id: 1,
      title: "Blue gown with white tops",
      description: "This 2 piece set is an outfit for both male and female. It is also available in different sizes and colors.",
      image: blue,
      price: "$50",
      route: "/product/1", // Add unique route for each product
    },
    {
      id: 2,
      title: "Red gown with white tops",
      description: "This 2 piece set is an outfit for both male and female. It is also available in different sizes and colors.",
      image: red,
      price: "$50",
      route: "/product/2",
    },
    {
      id: 3,
      title: "Blue gown with white tops",
      description: "This 2 piece set is an outfit for both male and female. It is also available in different sizes and colors.",
      image: blue,
      price: "$50",
      route: "/product/3",
    },
    {
      id: 4,
      title: "Red gown with white tops",
      description: "This 2 piece set is an outfit for both male and female. It is also available in different sizes and colors.",
      image: red,
      price: "$50",
      route: "/product/4",
    },
  ];

  return (
    <div className="best-selling">
      <h1>Best Selling</h1>
      <div className="divider"></div>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <button
              className="buy-now-button"
              onClick={() => navigate(product.route)} // Redirect to the specific route
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
