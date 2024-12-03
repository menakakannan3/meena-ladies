import React from "react";
import "../styles/CustomizeClothes.css"; // Import the CSS file
import sewingMachine from "../assests/sewingMachine.jpg"; // Replace with your image path

const CustomizeClothes = () => {
  return (
    <div className="enter">
    <div class="customize-container">
  <img src={sewingMachine} alt="Sewing Machine" class="customize-image" />
  <div class="customize-text">
    <h1>Customize the Clothes</h1>
    <p>Style it your way, wear it your story.</p>
    <p>Personalized fashion, tailored for you!</p>
    <button class="connect-button">Connect</button>
  </div>
</div>
</div>
  );
};

export default CustomizeClothes;
