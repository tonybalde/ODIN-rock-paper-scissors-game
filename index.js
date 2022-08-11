
var myArray = ['Rock', 'Paper', 'Scissors']; 

var rand = "";

function getComputerChoice(){
    rand = myArray[(Math.random() * myArray.length) | 0];    
    return rand;
};  // function that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.


// var computerSelection = getComputerChoice();

// var playerSelection = prompt("Choose: 'Rock', 'Paper' or 'Scissors': ");

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters:
// - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so:
// "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

// playerSelection = playerSelection.toLowerCase();
// computerSelection = computerSelection.toLowerCase();

var playerWins = 0;
var computerWins = 0;
var wins = 5;
var round = 0;
var ties = 0;

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        ties++;
        alert ("Game Tie");  // change the alert's for return's later on css
    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        computerWins++;
        alert("You Lose! Paper beats Rock");
    } else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        playerWins++;
        alert("You WIN! Rock beats Scissors");
    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        computerWins++;
        alert("You Lose! Scissors beats Paper");
    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        playerWins++;
        alert("You WIN! Paper beats Rock");
    } else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        computerWins++;
        alert("You Lose! Rock beats Scissors");
    } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        playerWins++;
        alert("You WIN! Scissors beats Paper");
        
    } 
};

function game(){
    for  (let i = 0; i < 5; i++){

        var computerSelection = getComputerChoice();
        var playerSelection = prompt("Choose: 'Rock', 'Paper' or 'Scissors': ");
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();
        if (playerSelection == ""){  // solo para ver como va contando
            alert("You should write Rock, Paper or Scissors");
        } else {
            playRound(playerSelection, computerSelection);
            round++;
            console.log("This is the round number: " + round);
            
            
        }
        
    }
    
    if (playerWins > computerWins){
        alert("Player WIN");
    } else if (playerWins < computerWins){
        alert("Computer BEATS you!");
    } else if (playerWins == computerWins){
        alert("GAME TIE!");
    }
    alert("Player Wins: " + playerWins + ", Computer Wins: " + computerWins + ", Games Ties: " + ties);
}

game();

