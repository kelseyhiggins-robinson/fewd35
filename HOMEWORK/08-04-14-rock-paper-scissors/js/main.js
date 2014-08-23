// create humanTotal and compTotal variables
// set them to 0
var humanTotal = 0;
var compTotal = 0;

// create rock, paper, scissors variables 
var rock = "rock";
var paper = "paper";
var scissors = "scissors";

//create human, computer and tie result variables
var human = "human";
var computer = "computer";
var tie = "tie";

// create gameOptions array containing variables
var gameOptions = [rock, paper, scissors];

function generateComputerPlay() {
    // generate a random # 0, 1 or 2
    var randomPlay = Math.floor(Math.random() * 3);

    // get the game option with that index
    return gameOptions[randomPlay];
}

// if human win, return "human", if tie return "tie", if computer win return "computer";
function determineWinner(humanPlay, computerPlay) {

    //if, else if,
    //if humanPlay == (whatever) && computerPlay == (whatever) then return winner

    // if rock && rock
    if (humanPlay == rock && computerPlay == rock) {
        return tie;
    }
    // if rock && paper
    else if (humanPlay == rock && computerPlay == paper) {
        return computer;
    }

    // if rock && scissors
    else if (humanPlay == rock && computerPlay == scissors) {
        return human;
    }

    // if paper && paper
    else if (humanPlay == paper && computerPlay == paper) {
        return tie;
    }

    // if paper && rock
    else if (humanPlay == paper && computerPlay == rock) {
        return human;
    }

    // if paper && scissors
    else if (humanPlay == paper && computerPlay == scissors) {
        return computer;
    }

    //if scissors && scissors
    else if (humanPlay == scissors && computerPlay == scissors) {
        return tie;
    }

    // if scissors && rock
    else if (humanPlay == scissors && computerPlay == rock) {
        return computer;
    }

    // if scissors && paper
    else if (humanPlay == scissors && computerPlay == paper) {
        return human;
    }

}


function updateResults(winner, humanPlay, computerPlay) {
    // generate a string that says "Human: rock  Computer: scissor  You Won!"
    var status = "<h3>Human: " + humanPlay + "</h3>";

    status = status + "<h3>Computer: " + computerPlay + "</h3>";

    status = status + "<h2>";
    if (winner == human) {
        status = status + "You Won!";
        humanTotal = humanTotal + 1;
    } else if (winner == computer) {
        status = status + "Computer Won :(";
        compTotal = compTotal + 1;
    } else if (winner == tie) {
        status = status + "It's a tie!";
    }
    status = status + "</h2>";

    $('#status').html(status);
    $('#humanScore').html(humanTotal);
    $('#computerScore').html(compTotal);
}


$(function() {
    // upon button click, fire a function
    $('button').click(function(event) {

        var buttonClicked = event.target;

        // figure out humanPlay selection
        var humanPlay = $(buttonClicked).attr('id');

        // determine computerPlay selection
        var computerPlay = generateComputerPlay();

        // determine winner
        var winner = determineWinner(humanPlay, computerPlay);

        // update page with result by calling updateResults function
        updateResults(winner, humanPlay, computerPlay);
    });

});