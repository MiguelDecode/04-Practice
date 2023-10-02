import "../style.css";
import { getRandomQuote } from "./helpers/getRandomQuote";
import { quoteToHTML } from "./helpers/quoteToHTML";

const startBtn = document.getElementById("start-btn");
const progressIndicator = document.getElementById("progress-indicator");
const correctElement = document.getElementById("correct-letters");
const wrongElement = document.getElementById("wrong-letters");
const wpmElement = document.getElementById("wpm");
const resultsElement = document.getElementById("results-container");
const restartBtn = document.getElementById("restart-btn");

let correctLetters;
let wrongLetters;
let wpm;

// Set Timer
let time = 5;
document.documentElement.style.setProperty("--playtime", time + "s");

const startGame = async () => {
  startBtn.classList.toggle("none", true);

  progressIndicator.classList.toggle("progress__indicator--run", true);

  const quote = await getRandomQuote();

  const quoteElement = quoteToHTML(quote);
};

const finishTime = () => {
  progressIndicator.classList.toggle("progress__indicator--run", false);

  correctElement.textContent = correctLetters;
  wrongElement.textContent = wrongLetters;
  wpmElement.textContent = wpm;

  resultsElement.classList.toggle("none", false);
};

const restartGame = () => {
  correctLetters = 0;
  wrongLetters = 0;
  wpm = 0;

  resultsElement.classList.toggle("none", true);
  startBtn.classList.toggle("none", false);
};

// Listeners
startBtn.addEventListener("click", startGame);

restartBtn.addEventListener("click", restartGame);

progressIndicator.addEventListener("animationend", finishTime);
