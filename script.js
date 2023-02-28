


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



const playerSelection = "Rock";
const computerSelection = getComputerChoice();



function singleRound (playerSelection, computerSelection) {

    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You Lose! Scissors beat Paper"; 
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win! Scissors beat Paper";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You Win! Rock beats Scissors";
    } else return "Draw!"
}

console.log(singleRound(playerSelection, computerSelection));
