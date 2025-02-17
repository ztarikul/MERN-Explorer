const uuid = require("uuid");
const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const DUMMY_USERS = [
  {
    id: "u1",
    name: "TIZ",
    email: "tiz@email.com",
    password: "123456",
  },
];

const getUsers = (req, res, nex) => {
  res.json({ users: DUMMY_USERS });
};

const signup = (req, res, nex) => {
  const error = validationResult(req);
  if (error) {
    res.status(422).json(error);
  }
  const { name, email, password } = req.body;

  const hasUser = DUMMY_USERS.find((u) => u.email === email);
  if (hasUser) {
    throw new HttpError("Could not create user, email already exists.", 422);
  }

  const createdUser = {
    id: uuid.v4(),
    name,
    email,
    password,
  };
  DUMMY_USERS.push(createdUser);
  res.status(201).json({ user: createdUser });
};

const login = (req, res, nex) => {
  const { email, password } = req.body;

  const identified = DUMMY_USERS.find((u) => u.email === email);
  if (!identified || identified.password !== password) {
    throw new HttpError(
      "Could not identify the user, credentials seen to be wrong.",
      401
    );
  }
  res.json({ message: "Logged in!" });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
