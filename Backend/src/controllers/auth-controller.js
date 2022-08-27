const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const User = require("../models/user-model");
require("dotenv").config();
const express = require("express");
const router = express.Router();

router.post(
  "/register",
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

  async function (req, res) {
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
  }
);

const newtoken = (user) => {
  return jwt.sign(
    {
      data: user,
    },
    process.env.SECRET_KEY,
    { expiresIn: "12h" }
  );
};

router.post(
  "/login",
  body("email").not().isEmpty().isEmail().withMessage("Email is required"),
  body("password").not().isEmpty().withMessage("Password is required"),
  async function (req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
      }

      const user = await User.findOne({ email: req.body.email });
      if (user) {
        //check Password
        const match = user.checkPassword(req.body.password);
        if (match) {
          let token = newtoken(user);
          return res.status(200).send({
            message: "Login successfull",
            data: user,
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

// var logger;
// const newtoken = (user)=>{
//     // console.log(process.env.SECRET_KEY)
//     return jwt.sign({ user }, "masai");
// }

// //Register
// const register = async(req,res)=>{
//     try{

//         let user = await User.findOne({email:req.body.email})
//         if(user){
//             return res.status(400).send({message:"Email already exits"})
//         }
//         user = await User.create(req.body)
//          const token = newtoken(user);
//         // const token = jwt.sign({ user }, 'mernstack');
//         return res.status(200).send({user:user,token:token})

//     }
//     catch(err){
//        res.status(500).send(err.message)
//     }
// }

// //login

// const login = async(req,res)=>{
//     try{

//         const  user = await User.findOne({email:req.body.email})
//         if(!user){
//             return res.status(400).send({message:"Wrong number or password"})
//         }

//         //check Password
//         const match = user.checkPassword(req.body.password)
//         if(!match){
//             return res.status(400).send({message:"Wrong number or password"})
//         }
//         const token = newtoken(user)
//         // const token = jwt.sign({ user }, 'mernstack');
//         logger=user;
//         loginUserInfo()
//         return res.status(200).send({user:user,token:token})

//     }
//     catch(err){
//         res.status(500).send(err.message)
//     }
// }

// async function loginUserInfo(){
//    logger =await logger
//  return logger
// }

// module.exports= {register,login, newtoken,loginUserInfo}
