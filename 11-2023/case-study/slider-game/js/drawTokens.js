import { checkWinCondition } from "./checkWinCondition.js";

// Create and insert all the tokens in the board base on matrix
export const drawTokens = (matrix) => {
  const boardElement = document.querySelector(".board");
  boardElement.innerHTML = "";
  const fragment = document.createDocumentFragment();

  matrix.forEach((row) => {
    row.forEach((token) => {
      const tokenElement = document.createElement("div");
      if (token === "") {
        tokenElement.classList.add("board__token--empty");
      } else {
        tokenElement.classList.add("board__token");
      }
      tokenElement.textContent = token;
      fragment.appendChild(tokenElement);
    });
  });

  boardElement.appendChild(fragment);
  checkWinCondition(matrix);
};
