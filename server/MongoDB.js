const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const cors = require("cors");
require('./models/addUser');

app.use(cors({ origin: "*" }));

const PORT = process.env.PORT;

/*****************  MONGOOSE CONNECTION  ********************************************  */

mongoose.connect(process.env.MONGO_URI);

mongoose.connection.on('connected',()=>{
    console.log("db connected");
})
mongoose.connection.on('error',(err)=>{
    console.log("error in connecting...",err);
})


/*****************  ROUTES  ********************************************  */

app.use(require('./routes/addUser'));
app.use(require('./routes/expressRoute'));




app.get("/", (req, res) => {
    return res.send("Hello World..");
  });
  

  app.listen(PORT || 3003, () =>
    console.log(`Listening on Port ${process.env.PORT}`)
  );
  
