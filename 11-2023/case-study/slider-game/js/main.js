import { getTokenPosition } from "./getTokenPosition.js";
import { drawTokens } from "./drawTokens.js";
import { checkMoves } from "./checkMoves.js";

const boardElement = document.querySelector(".board");

const matrixValues = ["1", "2", "3", "4", "5", "6", "7", "8", ""];

const sortRandomly = () => {
  matrixValues.sort(() => Math.floor(Math.random() - 0.5));
};

let matrix = [[], [], []];

const createMatrix = () => {
  sortRandomly();
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      matrix[i].push(matrixValues.pop());
    }
  }
};

const runGame = () => {
  createMatrix();
  drawTokens(matrix, boardElement);
};

const listenTokens = (event) => {
  if (event.target.classList.value === "board__token") {
    const tokenContent = event.target.textContent;
    const [row, col] = getTokenPosition(tokenContent, matrix);

    checkMoves(row, col, matrix);
  }
};

const exchangeTokens = (tokenRow, tokenCol, emptyRow, emptyCol) => {
  let temp;
  temp = matrix[tokenRow][tokenCol];
  matrix[tokenRow][tokenCol] = "";
  matrix[emptyRow][emptyCol] = temp;

  drawTokens(matrix, boardElement);
};

/* const checkMoves = (tokenRow, tokenCol) => {
  const [emptyRow, emptyCol] = getTokenPosition("", matrix);

  if (tokenCol - emptyCol === -1 && emptyRow === tokenRow) {
    // console.log("Puede moverse a la derecha");
    exchangeTokens(tokenRow, tokenCol, emptyRow, emptyCol);
  }

  if (tokenCol - emptyCol === 1 && emptyRow === tokenRow) {
    // console.log("Puede moverse a la izquierda");
    exchangeTokens(tokenRow, tokenCol, emptyRow, emptyCol);
  }

  if (tokenRow - emptyRow === -1 && tokenCol === emptyCol) {
    // console.log("Puede moverse hacia abajo");
    exchangeTokens(tokenRow, tokenCol, emptyRow, emptyCol);
  }

  if (tokenRow - emptyRow === 1 && tokenCol === emptyCol) {
    // console.log("Puede moverse hacia arriba");
    exchangeTokens(tokenRow, tokenCol, emptyRow, emptyCol);
  }
}; */

// Listeners

document.addEventListener("DOMContentLoaded", runGame);

document.addEventListener("click", listenTokens);
