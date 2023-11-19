import { drawTokens } from "./drawTokens.js";

export const exchangeTokens = (
  tokenRow,
  tokenCol,
  emptyRow,
  emptyCol,
  matrix,
) => {
  let temp;
  temp = matrix[tokenRow][tokenCol];
  matrix[tokenRow][tokenCol] = "";
  matrix[emptyRow][emptyCol] = temp;

  drawTokens(matrix);
};
