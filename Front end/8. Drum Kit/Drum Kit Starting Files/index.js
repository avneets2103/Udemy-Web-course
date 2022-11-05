class Sound {
  constructor(file_locant) {
    this.file_locant = file_locant;
  }
  play() {
    let audio = new Audio(this.file_locant);
    audio.play();
  }
}

function buttonAnimation(currentKey){
    var activeBtn = document.querySelector("."+currentKey);
    activeBtn.classList.add("pressed");
    function class_removal(){
        activeBtn.classList.remove("pressed");
    }
    setTimeout(class_removal,100);
}

function key_sound(sound){
    switch (sound) {
        case "w":
          var audio = new Sound("sounds\\crash.mp3");
          audio.play();
          break;
        case "a":
          var audio = new Sound("sounds\\kick-bass.mp3");
          audio.play();
          break;
        case "s":
          var audio = new Sound("sounds\\snare.mp3");
          audio.play();
          break;
        case "d":
          var audio = new Sound("sounds\\tom-1.mp3");
          audio.play();
          break;
        case "j":
          var audio = new Sound("sounds\\tom-2.mp3");
          audio.play();
          break;
        case "k":
          var audio = new Sound("sounds\\tom-3.mp3");
          audio.play();
          break;
        case "l":
          var audio = new Sound("sounds\\tom-4.mp3");
          audio.play();
          break;
        default:
          break;
      }
}

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var sound = this.innerHTML; // "this" basically gets the location of the element that was triggered in the process
    key_sound(sound);
    buttonAnimation(sound);
    })
}

document.addEventListener("keypress", function (event) {
  var sound = event.key;
  key_sound(sound);
  buttonAnimation(sound); 
});

