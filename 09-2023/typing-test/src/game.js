import "../style.css";
import { getRandomQuote } from "./helpers/getRandomQuote";

const startBtn = document.getElementById("start-btn");
const progressIndicator = document.getElementById("progress-indicator");
const correctElement = document.getElementById("correct-letters");
const wrongElement = document.getElementById("wrong-letters");
const wpmElement = document.getElementById("wpm");
const resultsElement = document.getElementById("results-container");
const restartBtn = document.getElementById("restart-btn");
const displayQuotes = document.getElementById("quotes-display");
const input = document.getElementById("input");

let correctLetters = 0;
let wrongLetters = 0;
let charactersPerSecond = 0;
let arrQuote;
let actualIndex;

// Set Timer
let time = 30;
document.documentElement.style.setProperty("--playtime", time + "s");

const newQuote = async () => {
  const quote = await getRandomQuote();

  arrQuote = Array.from(quote);

  const parragraph = document.createElement("p");
  parragraph.classList.add("quotes__parragraph");

  arrQuote.forEach((letter, index) => {
    const span = document.createElement("span");
    span.textContent = letter;
    parragraph.appendChild(span);
  });

  displayQuotes.innerHTML = "";
  displayQuotes.append(parragraph);
};

const startGame = () => {
  actualIndex = 0;
  startBtn.classList.toggle("none", true);

  progressIndicator.classList.toggle("progress__indicator--run", true);

  newQuote();

  input.focus();
};

const finishTime = () => {
  progressIndicator.classList.toggle("progress__indicator--run", false);

  correctElement.textContent = correctLetters;
  wrongElement.textContent = wrongLetters;
  wpmElement.textContent = Math.floor(charactersPerSecond / time);

  resultsElement.classList.toggle("none", false);

  displayQuotes.innerHTML = "";
};

const restartGame = () => {
  correctLetters = 0;
  wrongLetters = 0;
  charactersPerSecond = 0;
  arrQuote = [];
  actualIndex = 0;
  input.value = "";

  resultsElement.classList.toggle("none", true);
  startBtn.classList.toggle("none", false);
};

const checkTyping = (event) => {
  let letter = arrQuote[actualIndex];
  const span = document.querySelectorAll(".quotes__parragraph span")[
    actualIndex
  ];

  span.classList.add("cursor");

  if (event.data === letter) {
    span.classList.toggle("letter", true);
    // Set letter ok
    correctLetters++;

    if (actualIndex === arrQuote.length - 1) {
      input.value = "";
      newQuote();
      actualIndex = -1;
    }

    actualIndex++;
  } else {
    span.classList.toggle("letter--error", true);
    // Set letter error
    wrongLetters++;
    actualIndex++;
  }

  charactersPerSecond++;
};

// Listeners
startBtn.addEventListener("click", startGame);

restartBtn.addEventListener("click", restartGame);

progressIndicator.addEventListener("animationend", finishTime);

input.addEventListener("input", checkTyping);
input.addEventListener("blur", () => input.focus());
