import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import blue from "../assests/blue.jpg";
import red from "../assests/red'.jpg";
import "../styles/ProductPage.css";

const products = [
  {
    id: 1,
    title: "Blue gown with white tops",
    description: "This 2 piece set is an outfit for both male and female. It is also available in different sizes and colors.",
    image: blue,
    price: "$50",
  },
  {
    id: 2,
    title: "Red gown with white tops",
    description: "This 2 piece set is an outfit for both male and female. It is also available in different sizes and colors.",
    image: red,
    price: "$50",
  },
  {
    id: 3,
    title: "Blue gown with white tops",
    description: "This 2 piece set is an outfit for both male and female. It is also available in different sizes and colors.",
    image: blue,
    price: "$50",
  },
  {
    id: 4,
    title: "Red gown with white tops",
    description: "This 2 piece set is an outfit for both male and female. It is also available in different sizes and colors.",
    image: red,
    price: "$50",
  },
];

const ProductPage = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate();

  // Find the product by ID
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h1>Product not found!</h1>; // Handle invalid product IDs
  }
  const handleBuyNow = async () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const username = localStorage.getItem("username");
  
    if (isLoggedIn && username) {
      try {
        const response = await fetch("http://localhost:4000/api/save-purchase", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            productId: product.id,
          }),
        });
  
        if (response.ok) {
          const data = await response.json();
          alert(`Purchase successful! ${data.message}`);
        } else {
          const error = await response.json();
          alert(`Error: ${error.error}`);
        }
      } catch (err) {
        console.error("Error making purchase:", err);
        alert("An error occurred while processing your purchase.");
      }
    } else {
      alert("You need to log in to purchase this product.");
      navigate("/login"); // Redirect to login page
    }
  };
  

  return (
    <div className="product-page">
      <img src={product.image} alt={product.title} className="product-image" />
      <h1 className="product-title">{product.title}</h1>
      <p className="product-description">{product.description}</p>
      <p className="product-price">Price: {product.price}</p>
      <button className="buy-now-button" onClick={handleBuyNow}>
        Buy Now
      </button>
      <button className="back-button" onClick={() => navigate("/")}>
        Back to Products
      </button>
    </div>
  );
};

export default ProductPage;
