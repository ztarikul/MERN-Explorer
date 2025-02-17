const express = require("express");
const placesControllers = require("../controllers/places-controller");

const router = express.Router();

router.get("/:placeId", placesControllers.getuserById);

router.get("/user/:uid", placesControllers.getUserByuserId);

router.post("/", placesControllers.createPlace);

module.exports = router;
