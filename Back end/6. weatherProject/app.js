const express =  require("express");
const app = express();

const bodyParser =  require("body-parser"); // to take the form data from the user  
app.use(bodyParser.urlencoded({extended:true})); //making it to use

const https = require("https"); // to take in data from the API we use https

app.get("/",function(req,res){ //when this site is requested 
    res.sendFile(__dirname+"\\index.html");
})

app.post("/",function(req,res){ //when form is submitted
    const cityName= req.body.city;
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=8bcf2659f19902925467b04c7984ee79&units=metric"
    https.get(url,function(response){
        response.on("data",function(data){
            const weatherData =  JSON.parse(data);
            const temp =  weatherData.main.temp;
            const descr =  weatherData.weather[0].description;
            res.write("<p>The weather is currently "+descr+"</p>");
            res.write("<h1>The temp in "+cityName+" is "+temp+" degree Celsius</h1>");
            res.send();
        })
    })
})

app.listen(3000,function(){ //when server is started
    console.log("Server has started at 3000.");
})