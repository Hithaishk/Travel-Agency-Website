const express = require("express");
const router1 = express.Router();
const bikeController = require("../Controllers/bikeController");

router1.get("/", bikeController.getAllBikes);
router1.post("/", bikeController.addBikes);
router1.get("/:id", bikeController.getById);
router1.put("/:id", bikeController.updateBike);
router1.delete("/:id", bikeController.deleteBike);

module.exports = router1;