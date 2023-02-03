let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const arryOfChoices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random()*3);
  const computerChoice = arryOfChoices[randomNumber];
  return computerChoice
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "rock"){
    return "You tied! You both picked rock"
  }
  else if (playerSelection === "paper" && computerSelection === "paper"){
    return "You tied! You both picked paper"
  }
  else if (playerSelection === "scissors" && computerSelection === "scissors"){
    return "You tied! You both picked scissors"
  }
  else if (playerSelection === "rock" && computerSelection === "paper"){
    computerScore++
    return "You lose! Paper beats rock"
  }
  else if (playerSelection === "rock" && computerSelection === "scissors"){
    playerScore++
    return "You win! Rock beats scissors"
  }
  else if (playerSelection === "scissors" && computerSelection === "rock"){
    computerScore++
    return "You lose! rock beats scissors"
  }
  else if (playerSelection === "scissors" && computerSelection === "paper"){
    playerScore++
    return "You win! scissors cuts paper"
  }
  else if (playerSelection === "paper" && computerSelection === "rock"){
    playerScore++
    return "You win! paper beats rock"
  }
  else if (playerSelection === "paper" && computerSelection === "scissors"){
    computerScore++
    return "You lose! scissors cuts paper"
  }
}

function game(){
  for (let i = 0; i < 5; i++){
    const playerSelection = prompt("Choose rock, paper, or scissors").toLowerCase()
    const computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection));
  }

  if (playerScore > computerScore) {
    return "You won the game!"
  }
  else if (playerScore < computerScore) {
    return "You lost!"
  }
  else if (playerScore === computerScore) {
    return "You tied with the computer!"
  }
}

console.log(game())