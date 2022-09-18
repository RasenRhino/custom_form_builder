const express = require("express");
const mongoose = require('mongoose');

let router = express.Router();
router
  .route("/sheet")
  .post((req, res) => {
    mongoose.connect('mongodb+srv://rhino:ridham@cluster0.rv0s8cq.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true})
.then(()=> console.log('Connected to MongoDB...'))
.catch((err) => console.error('Could not connect to MongoDB...', err));
    let a=req.body
    console.log(a);
    res.send("h");
  });
module.exports = router; 
