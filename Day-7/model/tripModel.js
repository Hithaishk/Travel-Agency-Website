// models/tripRegistrationModel.js

const mongoose = require("mongoose");

const tripRegistrationSchema = new mongoose.Schema({
  user: String, // Reference to the User model
  selectedDate: Date,
  name: String,
  age: Number,
  gender: String,
  selectedPackage: String,
});

module.exports = mongoose.model("TripRegistration", tripRegistrationSchema);
