const express = require("express");
const HttpError = require("../models/http-error");
const placesControllers = require("../controllers/places-controller");

const router = express.Router();

router.get("/:placeId", placesControllers.getuserById);

router.get("/user/:uid", placesControllers.getUserByuserId);

module.exports = router;
