// routes/bikeRoutes.js

const express = require("express");
const router = express.Router();
const bikeController = require("../Controllers/bikeController");

router.post("/", bikeController.addBike);
router.get("/", bikeController.getAllBikes);
router.get("/:id", bikeController.getBikeById);
router.put("/:id", bikeController.updateBike);
router.delete("/:id", bikeController.deleteBike);

module.exports = router;
