const gameResults = {
  playerHand: "",
  computerHand: "",
  winner: ""
};

const gameSummary = {
  numberOfGames: 0,
  wins: 0,
  losses: 0,
  draws: 0
};

const userName = prompt("Choose your name:");
const availableMoves = [...document.querySelectorAll("div[class*='img']")];
const startButton = document.querySelector("button");

function randomSelection() {
  const index = Math.floor(Math.random() * availableMoves.length);
  return availableMoves[index].dataset.option;
}

function handSelection() {
  availableMoves.forEach(hand => {
    hand.style.boxShadow = "";
    this.style.boxShadow = "0 0 0 4px yellow";
  });
  gameResults.playerHand = this.dataset.option;
  gameResults.computerHand = randomSelection();
}

function checkResult() {
  const player = gameResults.playerHand;
  const computer = gameResults.computerHand;
  gameSummary.numberOfGames++;
  if (player === computer) {
    gameResults.winner = "---";
    gameSummary.draws++;
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    gameResults.winner = userName;
    gameSummary.wins++;
  } else {
    gameResults.winner = "Computer";
    gameSummary.losses++;
  }
}

function showResults() {
  //left-panel
  document.getElementById("user").textContent = gameResults.playerHand;
  document.getElementById("computer").textContent = gameResults.computerHand;
  document.getElementById("winner").innerHTML = `<strong>${
    gameResults.winner
  }</strong>`;
  //right-panel
  document.getElementById("games").textContent = gameSummary.numberOfGames;
  document.getElementById("wins").textContent = gameSummary.wins;
  document.getElementById("losses").textContent = gameSummary.losses;
  document.getElementById("draws").textContent = gameSummary.draws;
}

function resetGame() {
  document.querySelector(`.img__${gameResults.playerHand}`).style.boxShadow =
    "";
  gameResults.playerHand = "";
  gameResults.computerHand = "";
  gameResults.winner = "";
}

function startGame() {
  if (!gameResults.playerHand) {
    return alert("Choose your hand ");
  }
  checkResult();
  showResults();
  resetGame();
}

availableMoves.forEach(hand => {
  hand.addEventListener("click", handSelection);
});

startButton.addEventListener("click", startGame);
