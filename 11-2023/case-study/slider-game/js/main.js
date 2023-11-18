const boardElement = document.querySelector(".board");

// Array of arrays
const matrix = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", ""],
];

const checkWinCondition = () => {};

// Create and insert all the tokens in the board base on matrix
const drawTokens = () => {
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
};

const runGame = () => {
  drawTokens();
  checkWinCondition();
};

const tokenPosition = (content) => {
  let tokenRow, tokenCol;
  matrix.forEach((row, index) => {
    let col = row.findIndex((token) => token === content);
    if (col !== -1) {
      tokenRow = index;
      tokenCol = col;
    }
  });
  return [tokenRow, tokenCol];
};

const listenTokens = (event) => {
  if (event.target.classList.value === "board__token") {
    const tokenContent = event.target.textContent;
    const [row, col] = tokenPosition(tokenContent);

    checkMoves(row, col);
  }
};

const moveTokens = (tokenRow, tokenCol, emptyRow, emptyCol) => {
  let temp;
  temp = matrix[tokenRow][tokenCol];
  matrix[tokenRow][tokenCol] = "";
  matrix[emptyRow][emptyCol] = temp;

  drawTokens();
};

const checkMoves = (tokenRow, tokenCol) => {
  const [emptyRow, emptyCol] = tokenPosition("");

  if (tokenCol - emptyCol === -1 && emptyRow === tokenRow) {
    // console.log("Puede moverse a la derecha");
    moveTokens(tokenRow, tokenCol, emptyRow, emptyCol);
  }

  if (tokenCol - emptyCol === 1 && emptyRow === tokenRow) {
    // console.log("Puede moverse a la izquierda");
    moveTokens(tokenRow, tokenCol, emptyRow, emptyCol);
  }

  if (tokenRow - emptyRow === -1 && tokenCol === emptyCol) {
    // console.log("Puede moverse hacia abajo");
    moveTokens(tokenRow, tokenCol, emptyRow, emptyCol);
  }

  if (tokenRow - emptyRow === 1 && tokenCol === emptyCol) {
    // console.log("Puede moverse hacia arriba");
    moveTokens(tokenRow, tokenCol, emptyRow, emptyCol);
  }
};

// Listeners

document.addEventListener("DOMContentLoaded", runGame);

document.addEventListener("click", listenTokens);
