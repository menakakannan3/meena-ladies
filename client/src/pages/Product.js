import React from "react";
import "../styles/product.css";

import tra from "../assests/tra.jpg"
import Custom from "../assests/Custom.jpg"
import modern from "../assests/modern.jpg"

const Productat = () => {
  const products = [
    {
      id: 1,
      title: "Traditional Wear",
      image: tra, // Replace with the actual image path
    },
    {
      id: 2,
      title: "Modern Wear",
      image: modern, // Replace with the actual image path
    },
    {
      id: 3,
      title: "Custom Wear",
      image: Custom, // Replace with the actual image path
    },
  ];

  return (
    <div className="container">
      <h1>PRODUCT</h1>
      <div className="line"></div>
      <div className="card-container">
        {products.map((productat) => (
          <div className="card" key={productat.id}>
            <img className="coverpic" src={productat.image} alt={productat.title} />
            <h2>{productat.title}</h2>
            <button className="newbtn">Explore</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productat;
