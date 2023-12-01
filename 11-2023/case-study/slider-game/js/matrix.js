const matrix = [[], [], []];

const matrixValues = ["1", "2", "3", "4", "5", "6", "7", "8", ""];

const sortRandomly = () => {
  matrixValues.sort(() => Math.floor(Math.random() - 0.5));
};

const createMatrix = () => {
  sortRandomly();
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      matrix[i].push(matrixValues.pop());
    }
  }
};

createMatrix();

export { matrix };
