const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("addUser");

router.get("/", (req, res) => {
    res.send("Hello Internshala..");
  });

  // Inserting Data into Collection 

  router.post("/collection", async (req, res) => {
    try {
      const { name,age} = req.body;
  
      const exist = await User.findOne({ name });
  
      if (!name || !age) {
        return res.status(422).json({ message: "Please fill all fields" });
      }

      if (exist) {
        return res.status(400).json({ message: "Name already exist" });
      }
  
     
      if (age<= 0) {
        return res
          .status(400)
          .json({ message: "Enter a Valid Age..." });
      }
      let user = new User({
          name,
        age
      });
      await user.save()
      res.json({message:"Details Added Successfully.."})
      
    } catch (error) {
      console.log("error in Adding user data", error);
      return res.status(400).json({error:"Unable to enter Data..."});
    }
     
    
  });

  //  1.   Getting query "Age" greater than value 20 ---- METHOD -> 1

  router.get('/newcollection',async(req,res)=>{
    try {
      const posts = await User.find({age:{$gt:20}}); //$lt for < ,,$lte for <= ,, $gte for >= ,,$gt for >
      res.json({posts})
       
      
    } catch (error) {
      console.log("error in Getting user data", error);
      return res.status(400).json({error:"Unable to Get Data..."});
    }
  })


  // 1.   Getting "Age" greater than the age given by USER from Params --- METHOD -> 2

  router.get('/newcollection/:age',async(req,res)=>{
    try {
      const posts = await User.find({age:{$gt:req.params.age}});//$lt for < ,,$lte for <= ,, $gte for >= ,,$gt for >
      res.json({posts})
       
      
    } catch (error) {
      console.log("error in Getting user data", error);
      return res.status(400).json({error:"Unable to Get Data..."});
    }
  })


  
  module.exports = router;