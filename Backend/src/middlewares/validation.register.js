const { body } = require("express-validator");
const User = require("../models/user.model");
const validateRegister = () => {
  return [
    body("email")
      .isEmail()
      .custom(async (value) => {
        const user = await User.findOne({ email: value });
        if (user) {
          throw new Error("Email is already taken");
        }
        return true;
      }),
    body("firstName")
      .trim()
      .not()
      .isEmpty()
      .bail()
      .withMessage("First Name cannot be empty")
      .isLength({ min: 4 })
      .withMessage("First Name must be at least 4 characters"),
    body("password")
      .not()
      .isEmpty()
      .withMessage("Password is required")
      .custom((value) => {
        const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,15}$/;
        if (!value.match(passw)) {
          throw new Error("Password must be strong");
        }
        return true;
      }),
  ];
};

module.exports = validateRegister;
