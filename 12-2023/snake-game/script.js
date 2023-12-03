// HTML Elemets
const boardElement = document.getElementById("board");
const scoreElement = document.getElementById("score");
const startBtn = document.getElementById("start");
const gameOverMsg = document.getElementById("game-over");

// Game Settings
const boardSize = 10;
const gameSpeed = 500;

const squareTypes = {
  emptySquare: 0,
  snakeSquare: 1,
  foodSquare: 2,
};

const directions = {
  ArrowUp: -10,
  ArrowDown: 10,
  ArrowRight: 1,
  ArrowLeft: -1,
};

let snake;
let score;
let direction;
let boardSquares;
let emptySquares = [];
let moveInterval;

const drawSnake = () => {
  // Receive a array with snake positions and draw in the board
  snake.forEach((square) => drawSquare(square, "square--snake"));
};

const drawSquare = (square, type) => {
  const [row, column] = square.split("");
  boardSquares[row][column] = squareTypes[type];

  const squareElement = document.getElementById(square);
  squareElement.className = `square ${type}`;

  if (type === "square--empty") {
    emptySquares.push(square);
  } else {
    if (emptySquares.indexOf(square) !== -1) {
      emptySquares.splice(emptySquares.indexOf(square), 1);
    }
  }
};

const gameOver = () => {
  gameOverMsg.style.display = "block";
  clearInterval(moveInterval);
  startBtn.disabled = false;
};

const createRandomFood = () => {
  const randomEmptySquare =
    emptySquares[Math.floor(Math.random() * emptySquares.length)];
  drawSquare(randomEmptySquare, "square--food");
};

const addFood = () => {
  score++;
  updateScore();
  createRandomFood();
};

const moveSnake = () => {
  const newSquare = String(
    Number(snake[snake.length - 1]) + directions[direction]
  ).padStart(2, "0");

  const [row, col] = newSquare.split("");

  if (
    newSquare < 0 ||
    newSquare > boardSize * boardSize ||
    (direction === "ArrowRight" && col == 0) ||
    (direction === "ArrowLeft" && col == 9 ||
    boardSquares[row][col] === squareTypes.snakeSquare)
  ) {
    gameOver();
  } else {
    snake.push(newSquare);
    if (boardSquares[row][col] === squareTypes.foodSquare) {
      console.log('Anadir una comida nueva')
      addFood();
    } else {
      const emptySquare = snake.shift();
      drawSquare(emptySquare, "square--empty");
    }
    drawSnake();
  }
};


const setDirection = (newDirection) => {
  direction = newDirection;
};

const directionEvent = (key) => {
  switch (key.code) {
    case "ArrowUp":
      direction != "ArrowDown" && setDirection(key.code);
      break;
    case "ArrowDown":
      direction != "ArrowUp" && setDirection(key.code);
      break;
    case "ArrowLeft":
      direction != "ArrowRight" && setDirection(key.code);
      break;
    case "ArrowRight":
      direction != "ArrowLeft" && setDirection(key.code);
      break;
  }
};

const updateScore = () => {
  scoreElement.textContent = score;
};

const createBoard = () => {
  const fragment = document.createDocumentFragment();
  boardSquares.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      const squarePosition = `${rowIndex}${colIndex}`;
      const squareElement = document.createElement("div");
      squareElement.classList.add("square");
      squareElement.classList.add("square--empty");
      squareElement.setAttribute("id", squarePosition);
      fragment.appendChild(squareElement);
      emptySquares.push(squarePosition);
    });
  });

  boardElement.appendChild(fragment);
};

const resetGame = () => {
  boardElement.innerHTML = "";
  emptySquares = [];
  gameOverMsg.style.display = "none";
  startBtn.disabled = true;
};

const setGame = () => {
  snake = ["00", "01", "02", "03"];
  score = snake.length;
  direction = "ArrowRight";

  boardSquares = Array.from(Array(boardSize), () =>
    new Array(boardSize).fill(squareTypes.emptySquare)
  );

  resetGame();
  createBoard();
};

const startGame = () => {
  setGame();
  drawSnake();
  updateScore();
  createRandomFood();
  document.addEventListener("keydown", directionEvent);
  moveInterval = setInterval(() => moveSnake(), gameSpeed);
};

// Event Listeners
startBtn.addEventListener("click", startGame);

// TODO Revisar fallo de que no aparece mas comida
// TODO Revisar la serpiente no aumenta de tamaño
