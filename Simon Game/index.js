var level = 0;
var comp_seq = [];
var user_seq = [];

function color_picker(n,arr){
    switch (n) {
        case 0:
            arr.push("green");
            break;

        case 1:
            arr.push("red");
            break;

        case 2:
            arr.push("yellow");
            break;

        case 3:
            arr.push("blue");
            break;

        default:
            break;
    }
}

// new_color
function new_color(){
    color_picker(rand,comp_seq);
    $("#"+comp_seq[comp_seq.length-1]).addClass("pressed");
    setTimeout(function() {$("#"+comp_seq[comp_seq.length-1]).removeClass("pressed");}, 500);
}

// for level 0
if(level==0){
    $("body").keypress(function(){
        level++;
        $("h1").text("Lvl 1");
        var rand =  Math.floor(Math.random()*4);
        new_color();
    })
}

while(comp_seq[user_seq.length-1]==user_seq[user_seq.length-1]){

}
//user_seq generation
$(".btn").click(function(){
    console.log(this.id);
    var user_seq=[];
    user_seq.push =  this.id;
})

//cases for checking
if(user_seq.length>0){
if(comp_seq[user_seq.length-1]==user_seq[user_seq.length-1]){
    if(user_seq.length==comp_seq.length){
        level++;
        $("h1").text("Lvl "+level);
        color_picker(rand,comp_seq);
        $("#"+comp_seq[comp_seq.length-1]).addClass("pressed");
        setTimeout(function() {$("#"+comp_seq[comp_seq.length-1]).removeClass("pressed");}, 500);
    }
}
else{
    $("h1").text="Game Over, Press Any Key to Restart";
}
}
if(level==0){
    $(document).click(function(){
        level++;
        $("h1").text("Lvl "+level);
    })
}


if(comp_seq[user_seq.length-1]!=user_seq[user_seq.length-1]){
    $("h1").text="Game Over, Press Any Key to Restart";
}