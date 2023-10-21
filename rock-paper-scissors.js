let playerScore = 0;
let computerScore = 0;
let draws = 0;
let playerChoice;

const div1 = document.createElement("div");
const div2 = document.createElement("div");
const body = document.querySelector("body");
const rock = document.createElement("button");
const scissors = document.createElement("button");
const paper = document.createElement("button");
rock.textContent = "Rock";
scissors.textContent = "Scissors";
paper.textContent = "Paper";
div1.style.display = "flex";
div1.style.justifyContent = "center";
div1.style.padding = "100px";
div2.style.display = "flex";
div2.style.justifyContent = "center";
body.appendChild(div1);
body.appendChild(div2);
div1.appendChild(rock);
div1.appendChild(scissors);
div1.appendChild(paper);
const btns = document.querySelectorAll("button");
    
    for (i = 0; i < btns.length; i++) {
        btns[i].style.padding = "50px"; // can also work inside the forEach block like the statement ahead, both ways work
        // btns[i].style.margin = "50px";
    }
    btns.forEach ((button) => {
        button.addEventListener ("mouseenter", () => {
            button.style.backgroundColor = "yellow";
        })
        button.addEventListener ("mouseleave", () => {
            button.style.backgroundColor = "";
        })
        button.addEventListener ("click", () => {
            button.style.backgroundColor = "#4ef542";
            playerChoice = button.textContent.toLowerCase();
            playRound(playerChoice, getComputerChoice());
            displayScore();
        })
        button.style.margin = "50px";
    })

function getComputerChoice () {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length); // choices.length because Math.floor rounds as Math.floor(2.99) to 2
    let computerChoice = choices[randomIndex];
    return computerChoice;
}

// function getPlayerChoice () {
//     let playerChoice = prompt("Enter an option from Rock, Paper, or Scissors.").toLowerCase();
//     return playerChoice;
// }

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

// function game () {
//     playRound (getPlayerChoice(), getComputerChoice());
//     playRound (getPlayerChoice(), getComputerChoice());
//     playRound (getPlayerChoice(), getComputerChoice());
//     playRound (getPlayerChoice(), getComputerChoice());
//     playRound (getPlayerChoice(), getComputerChoice());
// }

function displayScore () {
    let winner;
    if (playerScore > computerScore) {
        winner = "Player wins.";
    }
    else if (computerScore > playerScore) {
        winner = "Computer wins.";
    }
    else {
        winner = "It is a Draw.";
    }
    div2.style.whiteSpace = "pre-line"; // displays content with line breaks
    div2.textContent = "Player wins = " + playerScore + "\n" + "Computer wins = " + computerScore + "\n" + "Draws = " + draws;
    if (playerScore >= 5 || computerScore >= 5) {
    div2.textContent = div2.textContent + "\n" + winner;
    }
}