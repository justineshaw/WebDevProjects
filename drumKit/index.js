
// detect button press
var buttonsArray = document.querySelectorAll(".drum");

for (var i = 0; i < buttonsArray.length; i++) {
    buttonsArray[i].addEventListener("click", function() {
        makeSound(this.innerHTML);
        lightUp(this.innerHTML);
    })
};

// detect key press
document.addEventListener("keydown", function() {
  makeSound(event.key);
  lightUp(event.key);
})

function makeSound(key) {
    switch (key) {
      case 'w':
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
      case 'a':
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
      case 's':
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
      case 'd':
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
      case 'j':
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;
      case 'k':
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
      case 'l':
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;

      default: console.log(this.innerHTML);
    }
}

function lightUp(element) {
  var activeButton = document.querySelector("." + element)
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 1000);

}
