import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard .css";

const Dashboard = () => {
  const [purchases, setPurchases] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem("email");
    const username = localStorage.getItem("username");

    // Check if the email and username match the admin credentials
    if (email !== "admin@example.com" || username !== "admin") {
      alert("Access denied! Redirecting to home page.");
      navigate("/"); // Redirect to home page if not admin
      return;
    }

    // Fetch the purchases for admin
    fetch(`http://localhost:4000/api/purchases/get-purchases?email=${email}&username=${username}`)
      .then((response) => response.json())
      .then((data) => setPurchases(data))
      .catch((error) => console.error("Error fetching purchases:", error.message));
  }, [navigate]);

  return (
    <div>
      <h1>Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Product Title</th>
            <th>Username</th>
            <th>Email</th>
            <th>Price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {purchases.map((purchase) => (
            <tr key={purchase._id}>
              <td>{purchase.productTitle}</td>
              <td>{purchase.username}</td>
              <td>{purchase.email}</td>
              <td>{purchase.price}</td>
              <td>{new Date(purchase.date).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
