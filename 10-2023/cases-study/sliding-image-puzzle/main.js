// Initial References
const boardGameElement = document.getElementById("board");
const movesElement = document.getElementById("moves");
let numberOfColumns = 3;
let numberOfRows = 3;
let moves = 0;
let arrSlides = [1, 2, 3, 4, 5, 6, 7, 8, 9];



const shuffleArr = (arr) => {
  return [...arr].sort((a, b) => Math.random() - 0.5);
};

const shuffleSlides = shuffleArr(arrSlides);

const addToBoard = (arr) => {
  const fragment = document.createDocumentFragment();

  arr.forEach((slide) => {
    const container = document.createElement("div");
    const img = document.createElement("img");
    img.classList.add("slide");
    img.src = `./assets/image_part_00${slide}.png`;

    container.appendChild(img);
    fragment.appendChild(container);
  });

  boardGameElement.appendChild(fragment);
};

// Add data-position attribute to all the parts of image
const addDataPosition = () => {
  const slides = document.querySelectorAll(".slide");
  let step = 0;

  for (let i = 0; i < numberOfRows; i++) {
    for (let j = 0; j < numberOfColumns; j++) {
      slides[step].setAttribute("data-row", `${i}`);
      slides[step].setAttribute("data-col", `${j}`);
      step++;
    }
  }
};

const initGame = () => {
  addToBoard(shuffleSlides);
  addDataPosition();
};

// Event Listeners
document.addEventListener("DOMContentLoaded", initGame);
