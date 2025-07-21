function getComputerChoice() {
    const min = 1;
    const max = 3;
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);

    const num = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    if (num === 1) {
        return "rock";
    } else if (num === 2) {
        return "paper";
    } else {
        return "scissor"
    }
}

function getHumanChoice() {
    const choice = prompt("Enter your choice(rock, paper or scissor:");
    return choice.toLowerCase();    //To generalize the input
}

let humanScore = 0;
let computerScore = 0;
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function playRound(humanChoice, computerChoice()) {
    
    }