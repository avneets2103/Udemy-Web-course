const express = require("express");
const app = express();
const bodyParser =  require("body-parser");
app.use(bodyParser.urlencoded({extended : true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/BMIcalculator.html");
})

app.post("/",function(req,res){
    var height = req.body.height/100;
    var weight =  req.body.weight;
    var bmi = weight/(height*height);
    res.send("The BMI of your body is: "+bmi);
})

app.listen(3000,function(){
    console.log("Server was started at 3000");
})