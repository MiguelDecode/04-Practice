const hint = document.getElementById("hint");
const numberOfTries = document.querySelector("#number-tries span");
const triedNumbers = document.querySelector("#tried-numbers span");
const form = document.getElementById("form");

const restartBtn = document.getElementById("restart");
const checkBtn = document.getElementById("check-btn");
const game = document.getElementById("game");
const userInput = document.getElementById("guess");

let tries = 0;
let numbers = [];
let isPlayable = true;

// Generate a random Number to Guess
const generateRandomNumber = (min = 1, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let answer = generateRandomNumber();
console.log(answer);

// Game
const playGame = () => {
  const userNumber = userInput.value;

  if (userNumber < 1 || userNumber > 100 || isNaN(userNumber)) {
    alert("Please enter a valid number between 1 and 100.");
    form.reset();
    return;
  }

  tries += 1;

  if (userNumber != answer) {
    if (numbers.some((el) => userNumber === el)) {
      hint.textContent = "This number is yet tried. Try Again!";
    } else {
      if (userNumber < answer) hint.textContent = "Too low. Try Again!";

      if (userNumber > answer) hint.textContent = "Too high. Try Again!";

      numbers.push(userNumber);
    }

    hint.classList.add("error");
  } else {
    hint.innerHTML = `Congratulations! <br/>The number was <span>${answer}</span>.<br> You guessed the number in <span>${tries}</span> tries.`;

    hint.classList.remove("error");
    hint.classList.add("success");
    checkBtn.style.display = "none";
    restartBtn.style.display = "block";
    isPlayable = false;
  }

  form.reset();
  numberOfTries.textContent = tries;
  triedNumbers.textContent = numbers.join(",");
};

// Reset the game after guess the number
const resetGame = () => {
  tries = 0;
  numbers = [];
  form.reset();
  userInput.focus();
  restartBtn.style.display = "none";
  checkBtn.style.display = "block";
  numberOfTries.textContent = tries;
  triedNumbers.textContent = "";
  hint.classList.remove("success");
  hint.classList.remove("error");
  hint.innerHTML = "";
  answer = generateRandomNumber();
  isPlayable = true;
};

// Listen to the Events
document.addEventListener("click", (event) => {
  if (event.target === checkBtn && isPlayable) playGame();

  if (event.target === restartBtn) resetGame();
});

document.addEventListener("keyup", (event) => {
  if (event.key === "Enter") event.preventDefault();
});

form.addEventListener("submit", (event) => event.preventDefault());
