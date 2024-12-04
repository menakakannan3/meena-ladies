const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./Routes/AuthRoute");

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "https://meena-ladies-client.onrender.com/", // React frontend URL
    credentials: true, // Allow credentials like cookies
    optionsSuccessStatus: 200,
  })
);
app.use(cookieParser());

// Routes
app.use("/api", userRoutes);

// MongoDB Connection
const mongoUri = "mongodb+srv://menakakannan3:Kannan@cluster0.jtgxs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

if (!mongoUri) {
  console.error("Error: MONGO_URL is not defined in the .env file.");
  process.exit(1);
}

mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  });
//model
const purchaseSchema = new mongoose.Schema({
  username: { type: String, required: true },
  productId: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Purchase = mongoose.model("Purchase", purchaseSchema);

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the Authentication API!");
});
//pur
app.post("/api/save-purchase", async (req, res) => {
  const { username, productId } = req.body;

  // Validate input
  if (!username || !productId) {
    return res.status(400).json({ error: "Username and Product ID are required" });
  }

  try {
    // Save purchase to the database
    const newPurchase = new Purchase({ username, productId });
    await newPurchase.save();

    res.status(201).json({ message: "Purchase saved successfully!" });
  } catch (error) {
    console.error("Error saving purchase:", error);
    res.status(500).json({ error: "An error occurred while saving the purchase." });
  }
});
// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
