// controllers/bikeController.js

const Bike = require("../Model/bikeModel");
const { validationResult } = require('express-validator');

// const User = require("../Model/userModel");

// Create a new bike associated with the authenticated user
exports.addBike = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, description, rent, contact, image } = req.body;
  let bike;
  try {
    bike = new Bike({
      name,
      description,
      rent,
      contact,
      image,
    });
    await bike.save();
  } catch (err) {
    console.log(err);
  }
  if (!bike) {
    return res.status(500).json({ message: "Unable to add" });
  }
  return res.status(201).json({ bike });
};

// Retrieve all bikes
exports.getAllBikes = async (req, res) => {
  let bikes;
  try {
    bikes = await Bike.find();
  } catch (err) {
    console.log(err);
  }

  if (!bikes) {
    return res.status(404).json({ message: "No bikes found" });
  }
  return res.status(200).json({ bikes });
};

// Retrieve a bike by ID
exports.getBikeById = async (req, res) => {
  const id = req.params.id;
  let bike;
  try {
    bike = await Bike.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!bike) {
    return res.status(404).json({ message: "No bike found" });
  }
  return res.status(200).json({ bike });
};

// Update a bike by ID
exports.updateBike = async (req, res) => {
  const id = req.params.id;
  const { name, description, rent, contact, image } = req.body;
  let bike;
  try {
    bike = await Bike.findByIdAndUpdate(id, {
      name,
      description,
      rent,
      contact,
      image,
    });
    if (!bike) {
      return res.status(404).json({ message: "Unable to update" });
    }
    return res.status(201).json({ bike });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete a bike by ID
exports.deleteBike = async (req, res) => {
  const id = req.params.id;
  let bike;
  try {
    bike = await Bike.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!bike) {
    return res.status(404).json({ message: "Unable to delete by this id" });
  }
  return res.status(200).json({ message: "Bike deleted sucessfully" });
};
