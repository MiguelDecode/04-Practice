import { getTokenPosition } from "./getTokenPosition.js";
import { exchangeTokens } from "./exchangeTokens.js";

export const checkMoves = (tokenRow, tokenCol, matrix) => {
  const [emptyRow, emptyCol] = getTokenPosition("", matrix);

  if (tokenCol - emptyCol === -1 && emptyRow === tokenRow) {
    // console.log("Puede moverse a la derecha");
    exchangeTokens(tokenRow, tokenCol, emptyRow, emptyCol, matrix);
  }

  if (tokenCol - emptyCol === 1 && emptyRow === tokenRow) {
    // console.log("Puede moverse a la izquierda");
    exchangeTokens(tokenRow, tokenCol, emptyRow, emptyCol, matrix);
  }

  if (tokenRow - emptyRow === -1 && tokenCol === emptyCol) {
    // console.log("Puede moverse hacia abajo");
    exchangeTokens(tokenRow, tokenCol, emptyRow, emptyCol, matrix);
  }

  if (tokenRow - emptyRow === 1 && tokenCol === emptyCol) {
    // console.log("Puede moverse hacia arriba");
    exchangeTokens(tokenRow, tokenCol, emptyRow, emptyCol, matrix);
  }
};
