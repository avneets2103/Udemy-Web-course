// jshint esversion6
const express = require("express");
const app = express();
const body_parser =  require("body-parser");
app.use(body_parser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html"); //absolute path using __dir
})

app.post("/",function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    res.send("The result is " +(num1+num2));
    res.send("Thanks for posting this");
})

app.listen(3000,function(){
    console.log(__dirname);
    console.log(__filename);
})