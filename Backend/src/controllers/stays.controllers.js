const express = require("express");


const Stays = require("../models/stays.models");

const router = express.Router();

router.post("",async (req,res)=>{
    try {
        const stay=await Stays.create(req.body);
        
        return res.status(201).send(stay)
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
});

router.get("",async (req,res)=>{
  try {
      const stays=await Stays.find().lean().exec();
      
      return res.status(200).send(stays)
  } catch (error) {
      return res.status(500).send({message:error.message})
  }
});

router.get("/:id",async (req,res)=>{
  try {
      const stay=await Stays.findById(req.params.id).lean().exec();
      
      return res.status(200).send(stay)
  } catch (error) {
      return res.status(500).send({message:error.message})
  }
});

router.patch("/:id",async (req,res)=>{
  try {
      const stay=await Stays.findByIdAndUpdate(req.params.id,req.body,{
          new:true,
      }).lean().exec()
      
      return res.status(200).send(stay)
  } catch (error) {
      return res.status(500).send({message:error.message})
  }
});

router.delete("/:id",async (req,res)=>{
  try {
      const stay=await Stays.findByIdAndDelete(req.params.id).lean().exec()
      
      return res.status(200).send(stay)
  } catch (error) {
      return res.status(500).send({message:error.message})
  }
});
module.exports = router;