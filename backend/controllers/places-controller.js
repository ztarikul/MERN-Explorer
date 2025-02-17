const uuid = require("uuid");
const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
let DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scraper in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484445,
      lng: -73.9905353,
    },
    creator: "u1",
  },
];

const getuserById = (req, res, next) => {
  const placeId = req.params.placeId; // {placeId: 'p1'}
  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });

  if (!place) {
    throw new HttpError("Could not find a place for the provided id.", 404);
  }
  res.json({ place }); // => {place} => {place: 'place'}
};

const getPlacesByuserId = (req, res, next) => {
  const userId = req.params.uid;
  const places = DUMMY_PLACES.filter((p) => {
    return p.creator === userId;
  });
  if (!places || places.length === 0) {
    return next(
      new HttpError("Could not find places for the provided user id.", 404)
    );
  }
  res.json({ places }); // => {place} => {place: 'place'}
};

const createPlace = (req, res, next) => {
  const error = validationResult(req);
  if (error) {
    res.status(422).json(error);
  }

  const { title, description, coordinates, address, creator } = req.body;
  const createdPlace = {
    id: uuid.v4(),
    title,
    description,
    location: coordinates,
    address,
    creator,
  };
  DUMMY_PLACES.push(createdPlace);
  res.status(201).json({ place: createdPlace });
};

const updatePlace = (req, res, next) => {
  const error = validationResult(req);
  if (error) {
    res.status(422).json(error);
  }
  const { title, description } = req.body;
  const placeId = req.params.placeId;
  const updatedPlace = { ...DUMMY_PLACES.find((p) => p.id === placeId) };
  const placeIndex = DUMMY_PLACES.findIndex((p) => p.id === placeId);

  updatedPlace.title = title;
  updatedPlace.description = description;

  DUMMY_PLACES[placeIndex] = updatedPlace;

  res.status(201).json({ place: updatedPlace });
};

const deletePlace = (req, res, next) => {
  const placeId = req.params.placeId;
  if (!DUMMY_PLACES.find((p) => p.id === placeId)) {
    throw new HttpError("Could not find the place for that id.", 404);
  }
  DUMMY_PLACES = DUMMY_PLACES.filter((p) => p.id !== placeId);
  res.status(200).json({ message: "Deleted Place." });
};

exports.getuserById = getuserById;
exports.getPlacesByuserId = getPlacesByuserId;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;
