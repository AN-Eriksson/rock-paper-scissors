function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber <= 0.33) {
        return "rock";
        } else if (randomNumber <= 0.66) {
            return "paper";
        } else {
            return "scissors";
        }
}

function getHumanChoice() {
    let humanInput = prompt("Rock, paper or scissors?");
    let lowerCaseHumanInput = humanInput.toLowerCase();
    return lowerCaseHumanInput;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {  
        if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore++,
            console.log("You win! Rock beats scissors");

        } else if (humanChoice == "rock" && computerChoice == "paper") {
            computerScore++;
            console.log("You lose! Paper beats rock!")

        } else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore++;
            console.log("You win! Paper beats rock!")

        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            computerScore++;
            console.log("You lose! Scissors beats paper!")

        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            computerScore++;
            console.log("You lose! Rock beats scissors!")

        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore++;
            console.log("You win! Scissors beats paper!")

        } else {
            console.log("It's a tie!");
        }               
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    console.log("humanScore: " + humanScore);
    console.log("computerScore: " + computerScore);
}

playGame();





