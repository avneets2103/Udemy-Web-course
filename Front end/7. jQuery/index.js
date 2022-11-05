// CSS manipulation
$("h1").css("color","red");
$("h1").addClass("big_title margin");
console.log($("h1").hasClass("margin"));
$("h1").removeClass("margin big_title");
console.log($("h1").hasClass("margin"));

// text man.
$("h1").text("Bye");
$("button").html("<em>Hahah</em>")

// Attribute manipulation
$("img").attr("src"); //Printing value //Getting value
$("img").attr("href","https://www.yahoo.com");//Setting value

//Event listeners
$("h1").click(function(){
    $("h1").css("color","purple");
})
$("button").click(function(){
    $("button").css("background-color","purple");
})
$("input").keypress(function(event){
    console.log(event.key);
    $("h1").html(event.key);
})

//on method for event listener
$("h1").on("mouseover",function(){
    $("h1").css("color","purple");
})
// on("action",function)
// there are many options available for action in the MDN docs for sensing an action by the user.

//adding new element 
$("h1").before("<button>New<button>"); // before the element in the above line
$("h1").after("<button>New<button>"); // after the element in the later line
$("h1").prepend("<button>New<button>"); // immediately before the element tag starts 
$("h1").append("<button>New<button>"); // immediately after the element tag ends
//remove new element
// $("button").remove(); //removes all the buttons

//animations in JS
$("button").click(function(){
    $("h1").fadeToggle();
    // similarly we have fadeIn() fadeOut() etc.
    // We hace slideIn() slideOut() slideToggle() etc.
    $("button").animate({opacity:0.5, margin:"10px"})
    // This is the animate method where you can provide jQuery custom CSS to animate. 
    // Remember that you can only add CSS property which works in numbers for animation here and not others.
    //also if you wanna add with units like px,% then use it as strings.
    
})