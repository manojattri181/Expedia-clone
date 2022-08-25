const express = require("express");
const authController = require("./controllers/auth-controller")
const currentProfileController = require("./controllers/current_profilecontroller")
const staysController = require("./controllers/stays.controllers")
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: false,limit :'50mb' }));
app.use(express.json());
app.get("/", (req,res)=> {
    res.send({
        "message":"Home Page"
    })
})
app.use("/auth",authController);
app.use("/profile",currentProfileController)
app.use("/stays",staysController)






module.exports = app;
