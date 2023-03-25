const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { validationResult } = require("express-validator");
const User = require("../models/user.model");
const validationRegister = require("../middlewares/validation.register");
const validateLogin = require("../middlewares/validation.login");

const router = express.Router();

const newtoken = (user) => {
  return jwt.sign(
    {
      data: user,
    },
    process.env.SECRET_KEY,
    { expiresIn: "12h" }
  );
};

router.post("/register", validationRegister(), async function (req, res) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const user = await User.create(req.body);
    return res.status(201).send({
      message: "Registration successfull",
      data: user,
    });
  } catch (err) {
    return res.status(500).send({ message: err.message, data: err });
  }
});

router.post(
  "/login",
  validateLogin(),
  async function (req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
      }
      const user = await User.findOne({ email: req.body.email });
      if (user){
        // check Password
        const match = user.checkPassword(req.body.password);
        if (match) {
          let token = newtoken(user);
          return res.status(200).send({
            message: "Login successfull",
            data: {email:user.email,firstName:user.firstName},
            token: token,
          });
        } else {
          return res.status(400).send({
            message: "Incorrect credentials",
            data: {},
          });
        }
      } else {
        return res.status(400).send({
          message: "User is not Registered",
          data: {},
        });
      }
    } catch (err) {
      return res.status(500).send({ message: err.message, data: err });
    }
  }
);

module.exports = router;
