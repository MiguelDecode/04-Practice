export const getTokenPosition = (content, matrix) => {
  let tokenRow, tokenCol;

  matrix.forEach((row, index) => {
    let col = row.findIndex((value) => value === content);
    if (col !== -1) {
      tokenRow = index;
      tokenCol = col;
    }
  });

  return [tokenRow, tokenCol];
};
