const hint = document.getElementById("hint");
const numberOfTries = document.querySelector("#number-tries span");
const triedNumbers = document.querySelector("#tried-numbers span");

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

// Clean and focus the number input
const cleanInput = () => {
  userInput.value = "";
  userInput.focus();
};

let answer = generateRandomNumber();
console.log(answer);

const playGame = () => {
  const userNumber = userInput.value;

  if (userNumber < 1 || userNumber > 100 || isNaN(userNumber)) {
    alert("Please enter a valid number between 1 and 100.");
    cleanInput();
    return;
  }

  tries += 1;

  if (userNumber != answer) {
    if (numbers.some((el) => userNumber === el)) {
      hint.textContent = "This number is yet tried. Try Again!";
      cleanInput();
    } else {
      if (userNumber < answer) {
        hint.textContent = "Too low. Try Again!";
      }

      if (userNumber > answer) {
        hint.textContent = "Too high. Try Again!";
      }

      numbers.push(userNumber);
      cleanInput();
    }

    hint.classList.add("error");
  } else {
    hint.innerHTML = `Congratulations! <br/>The number was <span>${answer}</span>.<br> You guessed the number in <span>${tries}</span> tries.`;

    hint.classList.remove("error");
    hint.classList.add("success");
    checkBtn.style.display = "none";
    restartBtn.style.display = "block";
    cleanInput();
    isPlayable = false;
  }

  numberOfTries.textContent = tries;
  triedNumbers.textContent = numbers.join(",");
};

// Reiniciar el juego
const resetGame = () => {
  tries = 0;
  numbers = [];
  cleanInput();
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

// Escuchando los eventos
document.addEventListener("click", (event) => {
  if (event.target === checkBtn) {
    if(isPlayable) playGame();
    // playGame();
  }

  if (event.target === restartBtn) {
    resetGame();
  }
});

document.addEventListener("keyup", (event) => {
  if (event.target === userInput && event.key === "Enter") {
    if(isPlayable) playGame();
    // playGame();
  }
});
