let humanScore = 0;
let computerScore = 0;

// function to get computer's choice
function getComputerChoice() {
    const min = 1;
    const max = 3;
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);

    let num = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    if (num === 1) {
        return "rock";
    } else if (num === 2) {
        return "paper";
    } else {
        return "scissors"
    }
}
// function to get users choice
function getHumanChoice() {
    let choice = prompt("Enter your choice(rock, paper or scissor):");
    return choice.toLowerCase();
}
// function to play a single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper covers Rock");
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper covers Rock");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors cut Paper");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors cut Paper");
        computerScore++;
    } else if (humanChoice === "scissor" && computerChoice === "rock") {
        console.log("You lose! Rock crushes Scissors");
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock crushes Scissors");
        humanScore++;
    } else if (humanChoice === computerChoice) {
        console.log("It's a draw!!!");
    }

}
// function to play the game
function playGame() {
    for (let i = 0; i < 5; ++i) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();       
        playRound(humanSelection, computerSelection);
    }
    if (computerScore > humanScore) {
        console.log("Computer Wins!!!");
    } else if (humanScore > computerScore) {
        console.log("You win!!!");
    } else {
        console.log("It's a draw!!!");
    }
}
playGame();