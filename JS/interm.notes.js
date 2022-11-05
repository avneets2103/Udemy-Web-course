// random number generator in JS
// there is a library called Math and it has a function called random() which can generate numbers between 0 to 0.99...9 (upto 16 decimals)
// So when we want a number in range 1 to n
// We multiply our generated number to n and take the floor value fo the generated number and add 1 to it

// code for generating numbers between 1 to 6
var n = Math.random();
n=n*6;
n=Math.floor(n)+1;
console.log(n);

//code for love calculator
var name1 = prompt("Enter name of first person: ");
var name2 = prompt("Enter name of second person: ");
var num = Math.random();
num = Math.floor(num * 101);
if(num>=80){
    alert("Are you made for each other or smth ?. its a score of "+num+"%");
}
else if(num>=50){
    alert("Well you should give a try. The score is "+num+"%");
}
else{
    alert("You are gonna kill each other, run. Percentage is: "+num+"%");
}

//In JS we have diiferent equality operators
// == and ===
// == checks for the net value of the variables
// === also compares the data types of the data we r comparing
// !+ and !== also exsist similary and all

// Arrays: More a list as it can contain elements of different data types together
var names = ["jack","samantha","lily","havier","harry"];
console.log(names);

// also we have some predefined functions in JS like
console.log(names.includes("avneet")) // returns true or false
console.log(names.length)

var output = [];
var count = 1;

function fizzBuzz(){
    if(count%15==0){
        output.push("fizzBuzz");
    }
    else if(count%5==0){
        output.push("Buzz");
    }
    else if(count%3==0){
        output.push("fizz");
    }
    else{
    output.push(count);}
    count++;
}

var n = prompt("Enter number of elements in your fizzBuzz game: ");
for (let i = 0; i <n; i++) {
    fizzBuzz();    
}
console.log(output);

//fibonacci
var n1 = prompt("Enter number 1: ");
var n2 = prompt("Enter number 2: ");
var n = prompt("How many numbers do you want");
var cnt = 2;
function fib(n,n1,n2){
    if(n==n1 || n==n2){
        return n;
    }
    console.log(fib(n-1,n1,n2)+fib(n-2,n1,n2));
    return fib(n-1,n1,n2)+fib(n-2,n1,n2);
}