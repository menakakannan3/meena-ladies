import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import BestSelling from "./pages/BestSelling";
import ProductPage from "./pages/productpage";
import CustomizeClothes from "./pages/CustomizeClothes";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";

const App = () => {
  return (
    <div className="">
    <Router>
      <Navbar />
      <main className="main-content">
        <Home/>
        <Product/>
        <Routes>
          
          <Route path="/" element={<BestSelling />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Home />} />
        
        </Routes>
        
      </main>
    </Router>
    <Router>
      <Routes>
        <Route path="/" element={<CustomizeClothes />} />
      </Routes>
    </Router>
    </div>
    
  );
};

export default App;
