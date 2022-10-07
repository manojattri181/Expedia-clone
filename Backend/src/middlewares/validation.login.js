const { body } = require("express-validator");
const validateLogin = () => {
  return [
    body("email").not().isEmpty().isEmail().withMessage("Email is required"),
    body("password").not().isEmpty().withMessage("Password is required"),
  ];
};

module.exports = validateLogin;
