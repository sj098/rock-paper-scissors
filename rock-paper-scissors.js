function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

// 0 = rock
// 1 = paper
// 2 = scissors

let result = ''
function playRound(playerSelection) {

    let computerSelection = getComputerChoice();
    userChoice.textContent = "You chose " + playerSelection + ".";
    if (playerSelection == "Rock") {
        if (computerSelection == 0) {
            compChoice.textContent = "The opponent chose Rock. \nIt's a tie!";
            result = "tie";
        }
        else if (computerSelection == 1) {
            compChoice.textContent = "The opponent chose Paper. \nYou lose! Paper beats Rock!";
            result = "lose";
        }
        else if (computerSelection == 2) {
            compChoice.textContent = "The opponent chose Scissors. \nYou win! Rock beats Scissors!";
            result = "win";
        }
    }

    else if (playerSelection == "Paper") {
        if (computerSelection == 1) {
            compChoice.textContent = "The opponent chose Paper. \nIt's a tie!";
            result = "tie";
        }
        else if (computerSelection == 0) {
            compChoice.textContent = "The opponent chose Rock. \nYou win! Paper beats rock!";
            result = "win";
        }   
        else if (computerSelection == 2) {
            compChoice.textContent = "The opponent chose Scissors. \nYou lose! Scissors beats paper!";
            result = "lose";
        }
    }

    else if (playerSelection == "Scissors") {
        if (computerSelection == 2) {
            compChoice.textContent = "The opponent chose Scissors. \nIt's a tie!";
            result = "tie";
        }
        else if (computerSelection == 1) {
            compChoice.textContent = "The opponent chose Paper. \nYou win! Scissors beats paper!";
            result = "win";
        }   
        else if (computerSelection == 0) {
            compChoice.textContent = "The opponent chose Rock. \nYou lose! Rock beats scissors!";
            result = "lose";
        }
    }
    return result;
}

let userScore = 0
let compScore = 0
let finalWinner = ''
function winner() {
    if (userScore < 5 && compScore < 5) {
        if (result == "win") {
            userScore += 1;
        }
        else if (result == "lose") {
            compScore += 1;
        }
        console.log(userScore);
        console.log(compScore);
        scores.textContent = userScore + ":" + compScore;
    }
    if (userScore == 5 || compScore == 5) {
        if (userScore == 5) {
            finalWinner = 'Congratulations, you win!'
        }
        else {
            finalWinner = 'Sorry, you lose.'
        }
        console.log(finalWinner);
        final.textContent = finalWinner; 
        document.querySelector('.buttons').disabled = true;
    }
}

const body = document.querySelector('.body');
const div = document.createElement('div');
div.textContent = 'What is your selection?'
const buttons = document.createElement('div');
buttons.classList.add('buttons')
const rock = document.createElement('button');
rock.textContent = 'Rock'
const paper = document.createElement('button');
paper.textContent = 'Paper'
const scissors = document.createElement('button');
scissors.textContent = 'Scissors'
buttons.appendChild(rock);
buttons.appendChild(paper);
buttons.appendChild(scissors);
div.appendChild(buttons)
body.appendChild(div);

document.querySelector('.buttons').onclick = function(e) {
    var a = e.target.textContent;
    console.log(playRound(a));
    console.log(winner(a));
  }

const results = document.createElement('p');
const userChoice = document.createElement('div');
const compChoice = document.createElement('div');
userChoice.textContent = 'You chose'
compChoice.textContent = 'The opponent chose'
results.appendChild(userChoice);
results.appendChild(compChoice);
const score = document.createElement('p');
score.textContent = 'Score:'
const scores = document.createElement('div');
score.appendChild(scores);
results.appendChild(score);
body.appendChild(results);
const final = document.createElement('div');
results.appendChild(final);


// function game() {
//     // for (let i = 1; i <= 5; i++) {
//         let playerSelection = prompt("Enter your choice from rock, paper, or scissors.");
//         let computerSelection = getComputerChoice();
//         // console.log("Round " + i);
//         console.log(playRound(playerSelection, computerSelection));
//     }
// // }

// console.log(game());
