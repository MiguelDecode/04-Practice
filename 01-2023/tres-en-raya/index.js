const game = document.getElementById("game");
const areas = document.querySelectorAll(".game__area");

let player = 1;
let isOn = true;
const cross = "X";
const circle = "O";

document.addEventListener("click", (event) => {
  if (isOn) {
    for (let i = 0; i < areas.length; i++) {
      if (event.target === areas[i]) {
        if (player === 1) {
          event.target.textContent = cross;
          event.target.classList.add("player-one");
          player = 2;
          checkWinner();
        } else {
          event.target.textContent = circle;
          event.target.classList.add("player-two");
          player = 1;
          checkWinner();
        }
      }
    }
  }
});

function checkWinner() {
  const table = Array.from(areas).map((area) => area.textContent);

  // Review Rows
  for (let i = 0; i <= 9; i += 3) {
    if (table[i] && table[i] === table[i + 1] && table[i] === table[i + 2]) {
      return winner([i, i + 1, i + 2]);
    }
  }

  // Review Columns
  for (let i = 0; i <= 3; i++) {
    if (table[i] && table[i] === table[i + 3] && table[i] === table[i + 6]) {
      return winner([i, i + 3, i + 6]);
    }
  }

  // Review Cross
  if (table[0] && table[0] === table[4] && table[0] === table[8]) {
    return winner([0, 4, 8]);
  }

  if (table[2] && table[2] === table[4] && table[2] === table[6]) {
    return winner([2, 4, 6]);
  }

  if (table.includes("")) return;

  return console.log("Draw");
}

function winner(winnerCombination) {
  isOn = false;
  console.log("ganador", winnerCombination);
  winnerCombination.forEach((pos) => {
    areas[pos].classList.add("winner");
  });
}
