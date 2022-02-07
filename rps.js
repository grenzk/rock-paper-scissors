const choices = ["Rock", "Paper", "Scissors"];
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let i = 0;
game();

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie!";
  }

  if (playerSelection === choices[0]) {
    if (computerSelection === choices[2]) {
      playerScore++;
      return `You Win! ${playerSelection} beats ${computerSelection}!`;
    } else {
      computerScore++;
      return `You Lose! ${computerSelection} beats ${playerSelection}!`;
    }
  } else if (playerSelection === choices[1]) {
    if (computerSelection === choices[0]) {
      playerScore++;
      return `You Win! ${playerSelection} beats ${computerSelection}!`;
    } else {
      computerScore++;
      return `You Lose! ${computerSelection} beats ${playerSelection}!`;
    }
  } else if (playerSelection === choices[2]) {
    if (computerSelection === choices[1]) {
      playerScore++;
      return `You Win! ${playerSelection} beats ${computerSelection}!`;
    } else {
      computerScore++;
      return `You Lose! ${computerSelection} beats ${playerSelection}!`;
    }
  }
}

function getScore() {
  document.getElementById("p-score").textContent = playerScore;
  document.getElementById("c-score").textContent = computerScore;
}

function game() {
  // while (i < 5) {}
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playerSelection = button.textContent;
      computerSelection = computerPlay();
      playRound(playerSelection, computerSelection);
      getScore();
    });
  });
  /*if (playerScore > computerScore) {
    console.log("Victory!");
  } else if (computerScore > playerScore) {
    console.log("You Lost! Game Over.");
  } else {
    console.log("It's a Tie!");
  } */
}
