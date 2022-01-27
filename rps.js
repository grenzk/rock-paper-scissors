function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase();

  if (playerSelection === computerSelection) {
    return "Tie!";
  }

  if (playerSelection === choices[0]) {
    if (computerSelection === choices[2]) {
      playerScore++;
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
      computerScore++;
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
  } else if (playerSelection === choices[1]) {
    if (computerSelection === choices[0]) {
      playerScore++;
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
      computerScore++;
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
  } else if (playerSelection === choices[2]) {
    if (computerSelection === choices[1]) {
      playerScore++;
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
      computerScore++;
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
}

function game() {
  for (i = 0; i < 5; i++) {
    playerSelection = prompt("Rock, Paper, or Scissors?");
    computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }

  if (playerScore > computerScore) {
    console.log("Victory!");
  } else if (computerScore > playerScore) {
    console.log("You Lost! Game Over.");
  } else {
    console.log("It's a Tie!");
  }
}

const choices = ["Rock", "Paper", "Scissors"];
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
game();
