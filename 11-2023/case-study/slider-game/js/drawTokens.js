import { checkWinCondition } from "./checkWinCondition.js";

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
