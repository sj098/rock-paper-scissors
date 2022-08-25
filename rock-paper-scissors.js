function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

// 0 = rock
// 1 = paper
// 2 = scissors

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase()
    if (playerChoice == "rock") {
        if (computerSelection == 0) {
            return "The opponent chose rock. \nIt's a tie!"
        }
        else if (computerSelection == 1) {
            return "The opponent chose paper. \nYou lose! Paper beats Rock!"

        }
        else if (computerSelection == 2) {
            return "The opponent chose scissors. \nYou win! Rock beats Scissors!"
        }
    }

    else if (playerChoice == "paper") {
        if (computerSelection == 1) {
            return "The opponent chose paper. \nIt's a tie!"
        }
        else if (computerSelection == 0) {
            return "The opponent chose rock. \nYou win! Paper beats rock!"
        }   
        else if (computerSelection == 2) {
            return "The opponent chose scissors. \nYou lose! Scissors beats paper!"
        }
    }

    else if (playerChoice == "scissors") {
        if (computerSelection == 2) {
            return "The opponent chose scissors. \nIt's a tie!"
        }
        else if (computerSelection == 1) {
            return "The opponent chose paper. \nYou win! Scissors beats paper!"
        }   
        else if (computerSelection == 0) {
            return "The opponent chose rock. \nYou lose! Rock beats scissors!"
        }
    }
}


function game() {
    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt("Enter your choice from rock, paper, or scissors.");
        let computerSelection = getComputerChoice();
        console.log("Round " + i);
        console.log(playRound(playerSelection, computerSelection));
    }
}

console.log(game());
