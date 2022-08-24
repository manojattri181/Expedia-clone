const authMiddleWare = require("../middlewares/authentication")
require("dotenv").config();
const express = require("express");
const router = express.Router();

router.get("/current-user", authMiddleWare,function (req,res){
    return res.status(200).send({
        message:"Current user data successfully fetched",
        data:req.user
    })
})

module.exports = router