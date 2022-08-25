function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

// 0 = rock
// 1 = paper
// 2 = scissors

//let playerSelection = prompt("Enter your choice from rock, paper, or scissors.");

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase()
    if (playerChoice = "rock") {
        if (computerSelection == 0) {
            return "It's a tie!"
        }
        else if (computerSelection == 1) {
            return "You lose! Paper beats Rock!"

        }
        else if (computerSelection == 2) {
            return "You win! Rock beats Scissors!"
        }
    }

    else if (playerChoice = "paper") {
        if (compChoice == 1) {
            return "It's a tie!"
        }
        else if (compChoice == 0) {
            return "You win! Paper beats rock!"
        }   
        else if (compChoice == 2) {
            return "You lose! Scissors beats paper!"
        }
    }

    else if (playerChoice = "scissors") {
        if (compChoice == 2) {
            return "It's a tie!"
        }
        else if (compChoice == 1) {
            return "You win! Scissors beats paper!"
        }   
        else if (compChoice == 0) {
            return "You lose! Rock beats scissors!"
        }
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));