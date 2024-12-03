const User = require("../models/UserModel");

const bcrypt = require('bcryptjs');


const signUp = async (req, res) => {
  try {
    const { email, username, password, address, number } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered." });
    }

    // Create a new user
    const user = new User({ email, username, password, address, number });
    await user.save();

    res.status(201).json({ message: "User signed up successfully!" });
  } catch (error) {
    console.error("Error during sign-up:", error.message);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};


// Controller for login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    // Successful login
    res.status(200).json({ message: "Successfully logged in!", username: user.username });
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

// Export the login function along with other controllers
module.exports = { login, signUp };



