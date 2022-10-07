const express = require("express");
const cors = require("cors");
const authController = require("./controllers/auth.controller");
const currentProfileController = require("./controllers/currentprofile.controller");
const staysController = require("./controllers/stays.controller");
const carsController = require("./controllers/cars.controller");
const authenticate = require("./middlewares/authentication")

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    message: "Home Page",
  });
});
app.use("/auth", authController);
app.use("/profile",authenticate, currentProfileController);
app.use("/stays", staysController);
app.use("/cars", carsController);

module.exports = app;
