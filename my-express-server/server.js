//jshint esversion6
const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.send("hey");
})

app.get("/contact",function(req,res){
    res.send("Contact me at: avneets2103@gmail.com");
})

app.get("/about",function(req,res){
    res.send("Hi i am avneet, your freidnly neighourhood developer here to teach you some stuff and also learn some stuff from uh.")
})

app.get("/hobbies",function(req,res){
    res.send("<ul><li>Drawing</li><li>Clicking</li><li>Sleeping</li></ul>")
})

app.listen(3000,function(){
    console.log("Server started at port 3000.");
});