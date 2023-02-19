// *
// ***
// *****
// *******
// *********

const halfPiramid2 = (num) => {
  let line = "";

  for (let i = 0; i <= num * 2; i++) {
    if (i % 2 !== 0) {
      line = line + "*".repeat(i) + "\n";
    }
  }

  return line;
};

console.log(halfPiramid2(5));
