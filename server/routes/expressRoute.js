const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("addUser");

// 2 .  Express Route 

// Takes In a Parameter from the url and returning it's value directly as a response 

router.get('/getparamvalue/:anyvalue',async(req,res)=>{
    try {
      res.json({paramValue:req.params.anyvalue})
       
    
    } catch (error) {
      console.log("error in Getting user data", error);
      return res.status(400).json({error:"Unable to Get Data..."});
    }
  })


  // Takes In a Parameter from the url and return it's collection from DATABASE as a response 

  router.get('/getparam/:name',async(req,res)=>{
    try {
      const posts1 = await User.find({name:req.params.name});
      res.send(posts1)
       
    
    } catch (error) {
      console.log("error in Getting user data", error);
      return res.status(400).json({error:"Unable to Get Data..."});
    }
  })


  module.exports = router;