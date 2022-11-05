// In JS we use functions like alert for doing some work by the browser
alert("Hello world");
// function(parameter)


//Data types
//They are numbers, string, bool
alert(2+3);
typeof("hey");

//variables
// var here is a type and it calls variable
var myName = "Avneet";
alert(myName);

//taking a basic input using prompt
var yourName = prompt("What is your name ?");
alert(yourName);

//concatenating strings
alert("my name is "+myName+", welcome to the course "+yourName);

//variable rules in JS
// 1. Dont begin with numbers but can contain numbers
// 2. Cant contian space

//concatenation of strings
var greet = "Welcome";
var theName = prompt("Enter your name: ");
alert(greet +" "+ theName);

//number of character or length of string
var name = "avneet";
name.length;

var tweet = prompt("Enter tweet here: ");
if (tweet.length>140) {
    alert("your word limit exceeds by: "+(tweet.length-140));
}
else{
    alert("you can still type in: "+(140-tweet.length));
}

//slice function in string
var name2 =  "avneet";
name2.slice(0,2); //"av"
name2[3]//'e'
name2.slice(2,4); //"ne"

tweet = tweet.slice(0,140);
alert(tweet);

// toUpperCase
// It is a function in JS which turns the comlpete string to uppercase
// string.toUpperCase();
// and if yiu want it to be saved then we have to reassign it to same variable
var string1 = "Avneet";
string1.toUpperCase();
string1=string1.toUpperCase();
alert(string1);
string1.toLowerCase();
string1=string1.toLowerCase();
alert(string1);

// Example:
var name = prompt("Enter your name: ");
var first = name[0];
var remain = name.slice(1,);
first=first.toUpperCase();
remain=remain.toLowerCase();
alert("Hello "+first+remain);

// Numbers
// here / (division) gives exact value and not floor division
// but we can get floor val by Math.floor(number) and it returns the floor value of number
// more like int 
var dog = prompt("Enter dog age: ");
var human = (4*(dog-2))+21;
alert("Your dog's human age is "+human);

//functions in JS
function fib(n) {
    if (n==0) {
        return 1;
    }
    return fib(n-1)*n;
}
var n = prompt("Enter n: ");
alert("Fibonacci of the n is: "+fib(n));

var money = prompt("Enter the money you give: ");
var cost = prompt("Cost per bottle is ?");
function getMilk(money,cost){
    return Math.floor(money/cost);
}
alert("The number of bottles "+getMilk(money,cost))
// console.log()
//Using this we can put any data to the console rather than throwing alerts

