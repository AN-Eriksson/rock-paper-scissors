// User interface

const container = document.querySelector('#container')

const btnRock = document.createElement('button')
btnRock.textContent = 'Rock'
btnRock.addEventListener('click', (event) => {
    playRound(event.target.textContent.toLowerCase(), getComputerChoice())
})
container.appendChild(btnRock)

const btnPaper = document.createElement('button')
btnPaper.textContent = 'Paper'
btnPaper.addEventListener('click', (event) => {
    playRound(event.target.textContent.toLowerCase(), getComputerChoice())
})
container.appendChild(btnPaper)

const btnScissors = document.createElement('button')
btnScissors.textContent = 'Scissors'
btnScissors.addEventListener('click', (event) => {
    playRound(event.target.textContent.toLowerCase(), getComputerChoice())
})
container.appendChild(btnScissors)

const resultDiv = document.createElement('div')
resultDiv.textContent = ''
container.appendChild(resultDiv)

// Functionality


function getHumanChoice() {
	let humanInput = prompt('Rock, paper or scissors?')
	let lowerCaseHumanInput = humanInput.toLowerCase()
	return lowerCaseHumanInput
}

function getComputerChoice() {
	const choices = ['rock', 'paper', 'scissors']
	const randomIndex = Math.floor(Math.random() * choices.length)
	return choices[randomIndex]
}

let humanScore = 0
let computerScore = 0

const scoreDiv = document.createElement('div')
scoreDiv.textContent = `Human: ${humanScore} Computer: ${computerScore}`
container.appendChild(scoreDiv)

// Function to play a round of rock, paper, scissors

function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'rock' && computerChoice == 'scissors') {
        humanScore++
        resultDiv.textContent = 'You win! Rock beats scissors'
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
        computerScore++
        resultDiv.textContent = 'You lose! Paper beats rock!'
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        humanScore++
        resultDiv.textContent = 'You win! Paper beats rock!'
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        computerScore++
        resultDiv.textContent = 'You lose! Scissors beats paper!'
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        computerScore++
        resultDiv.textContent = 'You lose! Rock beats scissors!'
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        humanScore++
        resultDiv.textContent = 'You win! Scissors beats paper!'
    } else {
        resultDiv.textContent = "It's a tie!"
    }
    scoreDiv.textContent = `Human: ${humanScore} Computer: ${computerScore}`

    if (humanScore === 5) {
        resultDiv.textContent = 'You win the game!'
        resultDiv.style.color = 'white'
        resultDiv.style.backgroundColor = 'green'
    } else if (computerScore === 5) {
        resultDiv.textContent = 'You lose the game!'
        resultDiv.style.color = 'white'
        resultDiv.style.backgroundColor = 'red'
    }
}





