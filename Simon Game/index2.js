var rand;
var lvl = 0;
var comp_seq = [];
var user_seq = [];

//functions

//to choose a color from the given number and add to the given array
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

//to everytime choose a new number thus a new number
function new_color(){
    rand = Math.floor(Math.random()*4);
    color_picker(rand,comp_seq);
    $("#"+comp_seq[comp_seq.length-1]).addClass("pressed");
    setTimeout(function() {$("#"+comp_seq[comp_seq.length-1]).removeClass("pressed");}, 500);
}


//level 0
if(lvl==0){
    $("body").keypress(function(){
        lvl++;
        $("h1").text("Lvl 1");
        new_color();
    })
}

for (let i = 0; i < lvl; i++) {
    user_seq = [];
    $(".btn").click(function (){
        if(comp_seq[i] != this.id){
            $("h1").text("Game Over, Press Any Key to Restart");
            return;
        }
        user_seq.push(this.id);
    })
}
