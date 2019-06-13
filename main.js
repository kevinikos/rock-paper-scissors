const startButton = document.querySelector("button");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const userChoice = document.getElementById("user");
const computerChoice = document.getElementById("computer");
const winner = document.getElementById("winner");
const numberOfGames = document.getElementById("games");
const numberOfWins = document.getElementById("wins");
const numberOfLosses = document.getElementById("losses");
const numberOfDraws = document.getElementById("draws");
const options = ["rock", "paper", "scissors"];
let choiceStatus = true;
let rockStatus = false;
let paperStatus = false;
let scissorsStatus = false;
let games = 0;
let wins = 0;
let losses = 0;
let draws = 0;
const userName = prompt("Type your nickname:");
userChoice.textContent = `Your choice:`;
computerChoice.textContent = "Computer choice:";
winner.textContent = "Winner:";
numberOfGames.textContent = `Number of games: ${games}`;
numberOfWins.textContent = `Wins: ${wins}`;
numberOfLosses.textContent = `Losses: ${losses}`;
numberOfDraws.textContent = `Draws: ${draws}`;

const randomChoice = () => {
  const index = Math.floor(Math.random() * options.length);
  return options[index];
};

const gameplay = () => {
  const computer = randomChoice();
  console.log(`computer choice: ${computer}`);
  switch (choiceStatus) {
    case rockStatus:
      switch (computer) {
        case "rock":
          userChoice.textContent = "Your choice: rock";
          computerChoice.textContent = `Computer choice: ${computer}`;
          winner.textContent = "Winner: ---";
          draws++;
          break;
        case "paper":
          userChoice.textContent = "Your choice: rock";
          computerChoice.textContent = `Computer choice: ${computer}`;
          winner.innerHTML = "Winner: <strong>Computer</strong>";
          losses++;
          break;
        case "scissors":
          userChoice.textContent = "Your choice: rock";
          computerChoice.textContent = `Computer choice: ${computer}`;
          winner.innerHTML = `Winner: <strong>${userName}</strong>`;
          wins++;
          break;
      }
      rockStatus = !rockStatus;
      rock.classList.toggle("square__border");
      games++;
      break;
    case paperStatus:
      switch (computer) {
        case "rock":
          userChoice.textContent = "Your choice: paper";
          computerChoice.textContent = `Computer choice: ${computer}`;
          winner.innerHTML = `Winner: <strong>${userName}</strong>`;
          wins++;
          break;
        case "paper":
          userChoice.textContent = "Your choice: paper";
          computerChoice.textContent = `Computer choice: ${computer}`;
          winner.textContent = "Winner: ---";
          draws++;
          break;
        case "scissors":
          userChoice.textContent = "Your choice: paper";
          computerChoice.textContent = `Computer choice: ${computer}`;
          winner.innerHTML = `Winner: <strong>Computer</strong>`;
          losses++;
          break;
      }
      paperStatus = !paperStatus;
      paper.classList.toggle("square__border");
      games++;
      break;
    case scissorsStatus:
      switch (computer) {
        case "rock":
          userChoice.textContent = "Your choice: scissors";
          computerChoice.textContent = `Computer choice: ${computer}`;
          winner.innerHTML = `Winner: <strong>Computer</strong>`;
          losses++;
          break;
        case "paper":
          userChoice.textContent = "Your choice: scissors";
          computerChoice.textContent = `Computer choice: ${computer}`;
          winner.innerHTML = `Winner: <strong>${userName}</strong>`;
          wins++;
          break;
        case "scissors":
          userChoice.textContent = "Your choice: scissors";
          computerChoice.textContent = `Computer choice: ${computer}`;
          winner.textContent = "Winner: ---";
          draws++;
          break;
      }
      scissorsStatus = !scissorsStatus;
      scissors.classList.toggle("square__border");
      games++;
      break;
    default:
      userChoice.textContent = `Your choice:`;
      computerChoice.textContent = "Computer choice:";
      winner.textContent = "Winner:";
      alert("Pick your weapon");
  }
  numberOfGames.textContent = `Number of games: ${games}`;
  numberOfWins.textContent = `Wins: ${wins}`;
  numberOfLosses.textContent = `Losses: ${losses}`;
  numberOfDraws.textContent = `Draws: ${draws}`;
};

rock.addEventListener("click", () => {
  if (paperStatus) {
    paperStatus = !paperStatus;
    paper.classList.toggle("square__border");
  } else if (scissorsStatus) {
    scissorsStatus = !scissorsStatus;
    scissors.classList.toggle("square__border");
  }
  rockStatus = !rockStatus;
  rock.classList.toggle("square__border");
});

paper.addEventListener("click", () => {
  if (rockStatus) {
    rockStatus = !rockStatus;
    rock.classList.toggle("square__border");
  } else if (scissorsStatus) {
    scissorsStatus = !scissorsStatus;
    scissors.classList.toggle("square__border");
  }
  paperStatus = !paperStatus;
  paper.classList.toggle("square__border");
});

scissors.addEventListener("click", () => {
  if (rockStatus) {
    rockStatus = !rockStatus;
    rock.classList.toggle("square__border");
  } else if (paperStatus) {
    paperStatus = !paperStatus;
    paper.classList.toggle("square__border");
  }
  scissorsStatus = !scissorsStatus;
  scissors.classList.toggle("square__border");
});

startButton.addEventListener("click", gameplay);
