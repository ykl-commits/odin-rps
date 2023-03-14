
// function getComputerChoice () {

//     let computerChoice = "";
//     const randomNum = Math.floor(Math.random() * 3);
//     if (randomNum === 0) {
//         computerChoice = "Rock";
//     } else if (randomNum === 1) {
//         computerChoice = "Paper";
//     } else computerChoice = "Scissors";

//     return computerChoice;
// }

//clean getComputerChoice
function getComputerChoice () {
    const choices = {
        0: 'Rock',
        1: 'Paper',
        2: 'Scissors',
    }

    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function playRound (playerSelection, computerSelection) {

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


//clean playRound
// function playRound (playerSelection, computerSelection) {
//     const playerChoice = playerSelection.toLowerCase();

//     switch (playerChoice) {
//         case 'rock':
//             if (computerSelection === 'paper') {
//                 return 'Lose';
//             } else if (computerSelection === 'Scissors') {
//                 return 'Win';
//             }
//             break;
//         case 'paper':
//             if (computerSelection === 'rock') {
//                 return 'Win';
//             } else if (computerSelection === 'scissors') {
//                 return 'Lose';
//             }
//             break;
//         case 'scissors':
//             if (computerSelection === 'rock') {
//                 return 'Lose';
//             } else if (computerSelection === 'paper') {
//                 return 'Win';
//             }
//             break;
//         default:
//             return 'Draw';
//     }
// }
const welcomeText = "Welcome to Yahya's awesome Rock Paper Scissors game!";
const typingSpeed = 50;

let i = 0;
const typingInterval = setInterval(() => {
    if (i >= welcomeText.length) {
        clearInterval(typingInterval);
        return;
    }

    const nextChar = welcomeText.charAt(i);

    const typingText = document.getElementById("welcome");
    typingText.innerHTML += nextChar;

    i++;
}, typingSpeed);


const containerDiv = document.querySelector('.container');
const buttons = containerDiv.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', buttonClicked)
});

let outcomeDiv = document.createElement("div")
outcomeDiv.setAttribute("id", "outcome-div");

let replybtn = document.createElement("button");
//replybtn.setAttribute("id", "replay-btn");
replybtn.textContent = "Play again";
replybtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    outcomeDiv.parentNode.removeChild(outcomeDiv);
    replybtn.parentNode.removeChild(replybtn);
    scoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
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
    let maxScore = 5;
    console.log(playerSelection);
    if (playerScore < maxScore && computerScore < maxScore) {
        if (playRound(playerSelection, getComputerChoice()) === "Win") {
            console.log("You win!");
            playerScore += 1;
        } else if (playRound(playerSelection, getComputerChoice()) === "Lose") {
            console.log("You lose!");
            computerScore += 1;
        } else console.log('draw');
    } else console.log("Game Over");

    if (playerScore === maxScore) {
        outcomeDiv.textContent = "You won!";
        document.body.appendChild(outcomeDiv);
        document.body.appendChild(replybtn);
    } else if (computerScore === maxScore) {
        outcomeDiv.textContent = "You lost!";
        document.body.appendChild(outcomeDiv);
        document.body.appendChild(replybtn);
    }


    scoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;

}




//game();