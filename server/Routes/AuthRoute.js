const express = require("express");
const { signUp, login } = require("../Controllers/AuthController");

const router = express.Router();

// Route for user sign-up
router.post("/signin", signUp);

// Route for user login
router.post("/login", login);

module.exports = router;
