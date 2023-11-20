// routes/userRoutes.js

const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");

// Route to handle user registration (Signup)
router.post("/signup", userController.signup);

// Route to handle user login
router.post("/login", userController.login);

module.exports = router;
