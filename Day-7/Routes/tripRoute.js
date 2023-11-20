// routes/tripRegistrationRoutes.js

const express = require("express");
const router = express.Router();
const tripRegistrationController = require("../Controllers/tripController");

router.post("/register", tripRegistrationController.register);
router.get("/registrations", tripRegistrationController.getAllRegistrations);
router.get("/registrations/:id", tripRegistrationController.getRegistrationById);
router.put("/registrations/:id", tripRegistrationController.updateRegistration);
router.delete("/registrations/:id", tripRegistrationController.deleteRegistration);

module.exports = router;
