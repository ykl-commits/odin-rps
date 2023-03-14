
function getComputerChoice () {

    let computerChoice = "";
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        computerChoice = "Rock";
    } else if (randomNum === 1) {
        computerChoice = "Paper";
    } else computerChoice = "Scissors";

    return computerChoice;

    // switch (randomNum) {
    //     case 0: 
    //         computerChoice = "Rock";
    //         return computerChoice;
    //     case 1:
    //         computerChoice = "Paper";
    //         return computerChoice;
    //     case 2:
    //         computerChoice = "Scissors";
    //         return computerChoice 
    // }
}

// const playerSelection = "Rock";


function singleRound (playerSelection, computerSelection) {

    console.log(computerSelection);

    if (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") {
        return "Lose";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") {
        return "Win";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors") {
        return "Lose"; 
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper") {
        return "Win";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock") {
        return "Lose";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") {
        return "Win";
    } else return "Draw"
}

//console.log(singleRound(playerSelection, computerSelection));


// function score (winner) {
//     let computerScore = 0;
//     let playerScore = 0;
//     if (winner === "")
// }

function isValidInput(playerSelection) {
    if (playerSelection.toLowerCase() === 'rock' || playerSelection.toLowerCase() === 'paper' ||
    playerSelection.toLowerCase() === 'scissors') {
        return true;
    } else return false;
}

function game () {

    let playerScore = 0;
    let computerScore = 0;
    let outcome = "";

    //play 5 rounds
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        let playerSelection = "";

        //get player selection if it's valid
        while (!playerSelection || !isValidInput(playerSelection)) {
            playerSelection = prompt("Rock, paper, or scissors?");
            if (!playerSelection) {
                alert('Input cannot be empty!');
            } else if (!isValidInput(playerSelection)) {
                alert('Invalid input! Please try again.');
            }
        }

        
        outcome = singleRound(playerSelection, computerSelection);
        if (outcome.includes("Win")) {
            playerScore += 1;
        }
        if (outcome.includes("Lose")) {
            computerScore += 1;
        }

        //console.log(outcome);
        alert(outcome + "\nPlayer: " + playerScore + "\n" + "Computer: " + computerScore);

        //console.log(singleRound(playerSelection, computerSelection));
    }

    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);

    if (playerScore > computerScore) {
        console.log("You win!");
    } else if (computerScore > playerScore) {
        console.log("You Lose!")
    } else console.log("It's a Tie!");
    
    if (playerScore > computerScore) {
        alert("Game Over! You win!");
    } else if (computerScore > playerScore) {
        alert("Game Over! You Lose!")
    } else alert("Gamer Over! It's a Tie!");
}

const containerDiv = document.querySelector('.container');
const buttons = containerDiv.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', buttonClicked)
});

let scoreDiv = document.createElement("div");
scoreDiv.setAttribute("id", "score-div");
scoreDiv.textContent = "Your Score: ";

let scoreText = document.createElement("span");
scoreText.textContent = "0";
scoreDiv.appendChild(scoreText);
document.body.appendChild(scoreDiv);

let computerScoreDiv = document.createElement("div");
computerScoreDiv.setAttribute("id", "computer-score-div");
computerScoreDiv.textContent = "Computer Score: ";

let computerScoreText = document.createElement("span");
computerScoreText.textContent = "0";
computerScoreDiv.appendChild(computerScoreText);
document.body.appendChild(computerScoreDiv);
let playerScore = 0;
let computerScore = 0;

function buttonClicked(event) {


    const clickedButton = event.target;
    const playerSelection = clickedButton.textContent;
    console.log(playerSelection);
    if (singleRound(playerSelection, getComputerChoice()) === "Win") {
        console.log("You win!");
        playerScore += 1;
    } else if (singleRound(playerSelection, getComputerChoice()) === "Lose") {
        console.log("You lose!");
        computerScore += 1;
    } else console.log('draw');

    scoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
}




//game();