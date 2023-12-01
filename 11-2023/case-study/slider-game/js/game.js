import { getTokenPosition } from "./getTokenPosition.js";
import { drawTokens } from "./drawTokens.js";
import { checkMoves } from "./checkMoves.js";
import { matrix } from "./matrix.js";

const boardElement = document.querySelector(".board");

const runGame = () => {
  drawTokens(matrix, boardElement);
};

const listenTokens = (event) => {
  if (event.target.classList.value === "board__token") {
    const tokenContent = event.target.textContent;
    const [row, col] = getTokenPosition(tokenContent, matrix);

    checkMoves(row, col, matrix);
  }
};

// Listeners

document.addEventListener("DOMContentLoaded", runGame);

document.addEventListener("click", listenTokens);
