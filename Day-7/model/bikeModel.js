// models/bikeModel.js

const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to the User model
  name: String,
  description: String,
  rent: Number,
  contact: String,
  image: String,
});

module.exports = mongoose.model("Bike", bikeSchema);
