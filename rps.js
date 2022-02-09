const choices = ["Rock", "Paper", "Scissors"];
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
game();

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    alert("Tie!");
  } else if (playerSelection === choices[0]) {
    if (computerSelection === choices[2]) {
      playerScore++;
      alert(`You Win! ${playerSelection} beats ${computerSelection}!`);
    } else {
      computerScore++;
      alert(`You Lose! ${computerSelection} beats ${playerSelection}!`);
    }
  } else if (playerSelection === choices[1]) {
    if (computerSelection === choices[0]) {
      playerScore++;
      alert(`You Win! ${playerSelection} beats ${computerSelection}!`);
    } else {
      computerScore++;
      alert(`You Lose! ${computerSelection} beats ${playerSelection}!`);
    }
  } else if (playerSelection === choices[2]) {
    if (computerSelection === choices[1]) {
      playerScore++;
      alert(`You Win! ${playerSelection} beats ${computerSelection}!`);
    } else {
      computerScore++;
      alert(`You Lose! ${computerSelection} beats ${playerSelection}!`);
    }
  }
}

function getScore() {
  document.getElementById("p-score").textContent = playerScore;
  document.getElementById("c-score").textContent = computerScore;
}

function updateMoves(playerSelection, computerSelection) {
  document.getElementById("p-move").src = `./images/${playerSelection}.png`;
  document.getElementById("c-move").src = `./images/${computerSelection}.png`;
}

function returnWinner() {
  if (playerScore === 5) {
    document.getElementById("message").textContent = "You Win!";
    playerScore = computerScore = 0;
    return getScore();
  } else if (computerScore === 5) {
    document.getElementById("message").textContent = "You Lost! Game Over!";
    playerScore = computerScore = 0;
    return getScore();
  }
  document.getElementById("message").textContent = null;
}

function game() {
  const inputs = document.querySelectorAll("input");

  inputs.forEach((input) => {
    input.addEventListener("click", () => {
      playerSelection = input.value;
      computerSelection = computerPlay();
      updateMoves(playerSelection, computerSelection);
      playRound(playerSelection, computerSelection);
      getScore();
      returnWinner();
    });
  });
}
