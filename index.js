
var myArray = ['Rock', 'Paper', 'Scissors']; 

var rand = "";

function getComputerChoice(){
    rand = myArray[(Math.random() * myArray.length) | 0];    
    return rand;
};  // function that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.


var computerSelection = getComputerChoice();

// var playerSelection = prompt("Choose: 'Rock', 'Paper' or 'Scissors': ");
// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters:
// - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so:
// "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
// playerSelection = playerSelection.toLowerCase();

computerSelection = computerSelection.toLowerCase();

var playerWins = 0;
var computerWins = 0;
var wins = 5;
var round = 0;
var ties = 0;

let roundMarker = document.getElementById('round-marker');
let userScore = document.getElementById('user_score');
let pcScore = document.getElementById('pc_score');
let roundWinnder = document.getElementById('round-winner-marker');

const newDiv = document.createElement("div");
newDiv.className = "final_msg";
document.body.appendChild(newDiv);
const playAgainBtn = document.createElement("button");
playAgainBtn.className = "play_again_btn";
playAgainBtn.addEventListener('click', () => location.reload());

var playerSelection = "";

const buttonRock = document.getElementById('btn-r');
const buttonPaper = document.getElementById('btn-p');
const buttonScissors = document.getElementById('btn-s');

buttonRock.addEventListener('click', funRock);
buttonPaper.addEventListener('click', funPaper);
buttonScissors.addEventListener('click', funScissors);

function funRock(){
    playerSelection = 'rock';
    game();
}

function funPaper(){
    playerSelection = 'paper';
    game();
}

function funScissors(){
    playerSelection = 'scissors';
    game();
}


function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        ties++;
    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        computerWins++;
        pcScore.innerHTML = computerWins;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        playerWins++;
        userScore.innerHTML = playerWins;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        computerWins++;
        pcScore.innerHTML = computerWins;
    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        playerWins++;
        userScore.innerHTML = playerWins;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        computerWins++;
        pcScore.innerHTML = computerWins;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        playerWins++;
        userScore.innerHTML = playerWins;
    } 
};

function game(){
        if (playerWins >= 5 || computerWins >= 5) {
            checkWinner();
            return;
        } else {
            var computerSelection = getComputerChoice();
            computerSelection = computerSelection.toLowerCase();
            playRound(playerSelection, computerSelection);
            round++;
            roundMarker.innerHTML = round;
            
            if (playerWins > computerWins){
                roundWinnder.innerHTML = "PLAYER";
            } else if (playerWins < computerWins){
                roundWinnder.innerHTML = "CPU";
            } else if (playerWins == computerWins){
                roundWinnder.innerHTML = "TIE";

            }
            checkWinner();
        } 
}       

function checkWinner(){
    if (playerWins >= 5 && computerWins < 5){
        newDiv.innerText = "¡You WIN the game!";
        playAgainBtn.innerText = "Play Again";
        document.body.appendChild(playAgainBtn);
    } else if (computerWins >=5 && playerWins < 5){
        newDiv.innerText = "You LOSE the game!!";
        playAgainBtn.innerText = "Play Again";
        document.body.appendChild(playAgainBtn);
    }
}


