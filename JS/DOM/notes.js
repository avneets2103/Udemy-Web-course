// inline JS
// using attributes like onload etc.

//internal JS
//inside script tag
{/* <script></script> */}

//External JS
{/* <script src=""></script> */}

//DOM
// Its a method to select any element on our page alter their properties
// It breaks the webpage into different elements and help us alter and access them individually.
// <body">
{/* <h1>Hello</h1>
<input type="checkbox">
<button class="btn">Click me</button>
<ul>
    <li class="list">
        <a href="https://www.google.com">Google</a>
    </li>
    <li class="list">Second</li>
    <li class="list">Third</li>
</ul>
<!-- It is the best practise to put the JS script tag at the end of the body so that it already has all the elements declared which JS was going to alter or-->
<script src="index.js" charset="utf-8"></script>
</body> */}

// say for this code then body tag contains h1, input, button, ul, script
// and then ul is the parent of tags i.e. li li li li
// and then li is the parent of the tag a
// this is called DOM hierarchy

// How to do this element selection and how to do this manipulation
// We use the dot operator

// Properties:

// These are things available to an object and we access them using the dot
// like:
// innerHTML, style, firstElementChild, lastElementChild etc.
// An example of this is:
document.firstElementChild.lastElementChild.firstElementChild; 
var heading = document.firstElementChild.lastElementChild.firstElementChild;
heading.innerHTML = "good bye"

// Query selector:
// It helps select an element by searching for the element in the range of search
parent.querySelector("tag_to_select") //Thats how uh select a specific element

// Methods:
// These are functions available so that we can m ake our objects do different things
// Like: click(), setAttriute() etc.
document.querySelector("input").click();

//MORE methods to select

// 1. 
document.getElementsByTagName("")
document.getElemenyByClass("")
document.getElementById("")

// Also this method dont just gives you one element but every element with the common shared property you mentioned 
// Thus what we recieve is the array of all the objects selected here in this case
// If you wanna go select a specific element then you have to traverse in the array using index here like:
document.getElementsByTagName("li")[1].innerHTML="Get help";
// Even if there is just one object with that tag name then also uh have to use the array method as it returns an array only and nothing else

// 2. querySelector and querySelectorAll
// You use it just like you refer in CSS by using selectors like tagname, .class, #id
// Normal querySelector gives the first element we are talking about in case of many possible onjects unlike getElements methods
// But if you want the array of all these possible objects then we use quwerySelectorAll method

document.querySelector(".btn"); //gives the first object with class==btn or basically it is: 
document.querySelectorAll("btn")[0]

document.querySelectorAll(".btn"); // give an array of all objects with class == btn 

// 3. Combining selectors acc to hierarchy
document.querySelector("li a")
//We will be using this for accessing the a within the li 
//Now if the hierarchy is different for both element we use spacebar
// If both elements are at same hierarchial level we use . opertaor
document.querySelector("#list.item") //id must be list and class must be item for tht element

// Preffered use is querySelector and querySelectorAll


// Accessing attributes of an object
// We have another method known as getAttributes("name_of_attribute) and setAttributes()
document.querySelector("a").getAttribute("href"); // this provides the value of the data stored for this attrubute
document.querySelector("a").setAttribute("href","www.bing.com"); // this is for seting the value of thy mentioned attribute to the value given for setting it

//CSS chnages using JS and DOM
document.querySelector(".btn").style.backgroundColor="red";
document.querySelector(".btn").style.paddingLeft="7px";
// Note: Use strings only even if uh wanna specify numbers
// etc. 

// Not using CSS in JS or seperating JS and CSS
// We can access the list of class of an element using classList method and we can then add, remove, toggle a specific class from an element
// Syntax:
document.querySelector("selector").classList.add("class_name");
document.querySelector("selector").classList.remove("class_name");
document.querySelector("selector").classList.toggle("class_name"); /* most used */

// Text manipulation and Text content property
// innerHTML: Gives all the HTML content inside the tags let it be another tags like strong, em, i etc.
// textContent : This just provides the text content from the inner most tag
document.querySelector("h1").innerHTML="<em>Bye bro</em>"; // actually deploy the em tags to work
document.querySelector("h1").textContent="<em>Bye bro</em>"; // this writes inside the h1 tag the exact string 
