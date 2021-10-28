const express = require("express");
const router = express.Router();

const ctrlLocations = require("../controllers/locations");

/* Locations pages */
router.get("/", ctrlLocations.index);
router.get("/register", ctrlLocations.register);
router.get("/content", ctrlLocations.content);
router.get("/about", ctrlLocations.about);

module.exports = router;
