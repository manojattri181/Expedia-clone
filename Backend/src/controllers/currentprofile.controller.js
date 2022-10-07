const express = require("express");
require("dotenv").config();

const router = express.Router();

router.get("/current-user", function (req, res) {
  return res.status(200).send({
    message: "Current user data successfully fetched",
    data: req.user,
  });
});

module.exports = router;
