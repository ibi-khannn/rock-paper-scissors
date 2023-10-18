let playerScore = 0;
let computerScore = 0;
let draws = 0;

game ();
displayScore();

function getComputerChoice () {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex];
    return computerChoice;
}

function getPlayerChoice () {
    let playerChoice = prompt("Enter an option from Rock, Paper, or Scissors.").toLowerCase();
    return playerChoice;
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
        console.log("It is a DRAW");
        draws++;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You win :) Rock beats Scissors.");
        playerScore++;
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lose :( Paper beats Rock.");
        computerScore++;
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        console.log("It is a DRAW");
        draws++;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win :) Paper beats Rock.");
        playerScore++;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You lose :( Scissors beat Paper.");
        computerScore++;

    }
    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        console.log("It is a DRAW.");
        draws++;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You win :) Scissors beat Paper.");
        playerScore++;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You lose :( Rock beats Scissors.");
        computerScore++;
    }
}

function game () {
/*     let playerScore = 0;
    let computerScore = 0;
    draws = 0;
    if (playRound (getPlayerChoice(), getComputerChoice()) === "Won") {
        playerScore++;
    }
    else if ((playRound (getPlayerChoice(), getComputerChoice()) === "Lost")) {
        computerScore++;
    }
    else {
        draws++;
    } */
    playRound (getPlayerChoice(), getComputerChoice());
    playRound (getPlayerChoice(), getComputerChoice());
    playRound (getPlayerChoice(), getComputerChoice());
    playRound (getPlayerChoice(), getComputerChoice());
    playRound (getPlayerChoice(), getComputerChoice());
}

function displayScore () {
    console.log("Player wins = " + playerScore + "\n" + "Computer wins = " + computerScore + "\n" + "Draws = " + draws);
}