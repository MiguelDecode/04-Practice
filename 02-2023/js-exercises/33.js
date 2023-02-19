// *********
// *******
// *****
// ***
// *

const halfPiramid2 = (num) => {
  let line = "";

  for (let i = num * 2; i >= 0; i--) {
    if (i % 2 !== 0) {
      line = line + "*".repeat(i) + "\n";
    }
  }

  return line;
};

console.log(halfPiramid2(5));
