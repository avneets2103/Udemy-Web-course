const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

const request =  require("request");

const https =  require("https");
const { dirname } = require("path");

app.get("/",function(req,res){
    app.use(express.static("public"));
    res.sendFile(__dirname+"\\signUp.html");
});

app.post("/",function(req,res){
    const firstName = req.body.firstName;
    const secondName = req.body.lastName;
    const email =  req.body.email;

    const data = { 
        members:[
        {
            email_address:email,
            status:"subscribed",
            merge_feild:{
                FNAME: firstName,
                LNAME: secondName
            }
        }
    ]}

    const jsonData = JSON.stringify(data);

    const url = "https://us13.api.mailchimp.com/3.0/lists/d63ac17c7f";
    const options ={
        method:"POST",
        auth: "avneets2103:b15e9f74a09f033fdfd610f7ae5dcf8e-us13"
    }

    const request = https.request(url,options,function(response){
        const status = response.statusCode;
        if(status==200){
            res.sendFile(__dirname+"\\success.html");}
        else{
            res.sendFile(__dirname+"\\failure.html");
        }

        response.on("data",function(data){
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();
});

app.listen(3000,function(){
    console.log("Server started at 3000");
})