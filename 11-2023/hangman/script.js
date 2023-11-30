const wordElement = document.getElementById("word");
const wrongLettersElement = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");
const finalMessageRevealWord = document.getElementById(
  "final-message-reveal-word"
);

const figureParts = document.querySelectorAll(".figure-part");

const words = ["charms", "runes", "owl", "wizard", "book"];

const newWord = () => words[Math.floor(Math.random() * words.length)];

let selectedWord = newWord();

let playable = true;

let correctLetters = [];
let wrongLetters = [];

const showNotification = () => {
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
};

const checkWord = () => {
  const innerWord = wordElement.innerText.replace(/[\n]/g, "");

  if (innerWord === selectedWord) {
    finalMessage.textContent = "Congratulations! You won!";
    finalMessageRevealWord.textContent = "";
    popup.style.display = "flex";

    playable = false;
  }
};

const displayWord = () => {
  wordElement.innerHTML = `${selectedWord
    .split("")
    .map(
      (letter) =>
        `<span class="letter">${
          correctLetters.includes(letter) ? letter : ""
        }</span>`
    )
    .join("")}`;

  checkWord();
};

const checkLose = () => {
  if (wrongLetters.length === figureParts.length) {
    finalMessage.innerText = "Unfortunately you lost.";
    finalMessageRevealWord.innerText = `...the word was: ${selectedWord}`;
    popup.style.display = "flex";

    wrongLettersElement.innerHTML = "";

    figureParts.forEach((part) => {
      part.style.display = "none";
    });

    playable = false;
  }
};

const updateWrongLetters = () => {
  if (!wrongLetters.length > 0) return;

  wrongLettersElement.innerHTML = `${wrongLetters.map(
    (letter) => `<span>${letter}</span>`
  )}`;

  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;

    if (index < errors) {
      part.style.display = "block";
    } else {
      part.style.display = "none";
    }
  });

  checkLose();
};

const handleKeys = (event) => {
  const letter = event.key.toLowerCase();

  if (playable && /^[a-z]+$/.test(letter)) {
    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);
      } else {
        showNotification();
      }
      displayWord();
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);
      } else {
        showNotification();
      }
      updateWrongLetters();
    }
  }
};

const restartGame = () => {
  playable = true;

  correctLetters = [];
  wrongLetters = [];

  selectedWord = newWord();

  displayWord();
  updateWrongLetters();

  popup.style.display = "none";
};

// Event Listener
document.addEventListener("DOMContentLoaded", displayWord);

document.addEventListener("keydown", handleKeys);

playAgainBtn.addEventListener("click", restartGame);
