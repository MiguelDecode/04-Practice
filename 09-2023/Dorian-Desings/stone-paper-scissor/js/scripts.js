const gameItemsElement = document.getElementById("game-items");
const userPickedElement = document.getElementById("user-picked");
const userPointsdElement = document.getElementById("points-user");
const pcPickedElement = document.getElementById("pc-picked");
const pcPointsElement = document.getElementById("points-pc");
const resultElement = document.getElementById("result");

const gameRules = {
  paper: {
    rock: true,
    scissors: false,
  },
  scissors: {
    paper: true,
    rock: false,
  },
  rock: {
    scissors: true,
    paper: false,
  },
};

const gameOptions = ["rock", "paper", "scissors"];
let userSelection = null;
let userPoints = 0;
let pcSelection = null;
let pcPoints = 0;

const printChoices = () => {
  userPickedElement.textContent = userSelection.toUpperCase();
  pcPickedElement.textContent = pcSelection.toUpperCase();
};

const playerWin = () => {
  resultElement.textContent = "YOU WIN";
  userPoints++;
  userPointsdElement.textContent = userPoints;
};

const pcWin = () => {
  resultElement.textContent = "YOU LOSE";
  pcPoints++;
  pcPointsElement.textContent = pcPoints;
};

const checkWinner = () => {
  if (userSelection === pcSelection) {
    resultElement.textContent = "TIE";
    return;
  }

  gameRules[userSelection][pcSelection] ? playerWin() : pcWin();

  // userSelection === "paper" && pcSelection === "rock" ? drawWin() : drawLose();
  // userSelection === "rock" && pcSelection === "paper" ? drawLose() : drawWin();
  // userSelection === "scissors" && pcSelection === "paper" ? drawWin() : drawLose();
};

const generateRandomPlay = () => {
  const randomPlay = Math.floor(Math.random() * gameOptions.length);
  pcSelection = gameOptions[randomPlay];
  checkWinner();
  printChoices();
};

const setUserSelection = (item) => {
  userSelection = item;
  generateRandomPlay();
};

gameItemsElement.addEventListener("click", (event) => {
  if (!event.target.classList.contains("game-item")) return;

  setUserSelection(event.target.dataset.item);
});
