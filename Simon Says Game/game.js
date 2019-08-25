// remember to encapulate

var colors = ["green", "red", "blue", "yellow"];
startNewGame();

function startNewGame() {
      newGame = true;
      level = 0;
      gamePattern = [];
      userClickedPattern = []
}

// start game on keydown
$(document).on('keydown', function() {
    if (newGame) {
      showNextColor();
      getLevel();
    }
    newGame = false;
})

// add event listener for any click
$(document).on("click", function() {
    var userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
    fadeButton(userChosenColor);
    playSound(userChosenColor);
    checkAnswer(level);
});


function getLevel() {
  $("#level-title").text("Level " + level);
}

function checkAnswer(currentLevel) {
    var currentClickedPatternLength = userClickedPattern.length;

    if (userClickedPattern[currentClickedPatternLength - 1] == gamePattern[currentClickedPatternLength - 1]) {
        if (currentClickedPatternLength == gamePattern.length) {
            userClickedPattern = []
            setTimeout( function () {
                showNextColor();
            }, 1000);
        }
    }
    else {
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();

        $("body").addClass("game-over");
        setTimeout( function() {
            $("body").removeClass("game-over");
        }, 200);

        $("h1").text("Game Over, Press Any Key to Restart");
        startNewGame();
    }
}


function showNextColor() {
    var randomNum = Math.floor(Math.random() * 4);
    var chosenColor = colors[randomNum];
    gamePattern.push(chosenColor);

    fadeButton(chosenColor);
    playSound(chosenColor);
    level++;
    getLevel();
}

function fadeButton(color) {
  $("#" + color).fadeOut();
  $("#" + color).fadeIn();
}

function playSound(color) {
    var audio = new Audio("sounds/" + color + ".mp3");
    //console.log(audio);
    audio.play();
}
