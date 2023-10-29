// HTML References
const boardElement = document.querySelector(".roller__board");
const dicesElement = document.querySelector(".roller__dices");
const rollBtn = document.getElementById("roll-btn");
const resetBtn = document.getElementById("reset-btn");
const resultElement = document.getElementById("result");
const totalElement = document.getElementById("total");

let total = 0;
let dices = [];

const randomSide = (sides) => Math.ceil(Math.random() * sides);

const drawDice = (dice) => {
  const diceContainer = document.createElement("div");
  diceContainer.classList.add("roller__dice");

  const img = document.createElement("img");
  img.src = `./assets/${dice}.svg`;
  img.classList.add("dice");

  const spanElement = document.createElement("span");
  spanElement.classList.add("roller__result");
  spanElement.textContent = "";

  diceContainer.appendChild(img);
  diceContainer.appendChild(spanElement);
  boardElement.appendChild(diceContainer);
};

const addDice = (event) => {
  if (!event.target.matches(".dice")) return;

  const dice = event.target.id;
  const sides = Number(dice.replace("d", ""));
  dices.push(sides);
  console.log(dices);
  drawDice(dice);
};

const deleteDice = (event) => {
  if (!event.target.matches(".dice")) return;

  event.target.remove();
  // todo Borrar del array de dados
};

const resetGame = () => {
  total = 0;
  resultElement.innerHTML = "";
  boardElement.innerHTML = "";
  totalElement.innerHTML = 0;
  dices = [];
};

const rollDices = () => {
  const boardDices = document.querySelectorAll(".roller__dice");

  if (boardDices.length === 0) return;

  total = 0;

  dices.map((dice, index) => {
    const value = randomSide(dice);

    boardDices[index].lastChild.textContent = value;

    total += value;
  });
  totalElement.innerHTML = total;
};

// Listener

dicesElement.addEventListener("click", addDice);

rollBtn.addEventListener("click", rollDices);

resetBtn.addEventListener("click", resetGame);

boardElement.addEventListener("click", deleteDice);
