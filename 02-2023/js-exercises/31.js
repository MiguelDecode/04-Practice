// *
// **
// ***
// ****
// *****
// Replicate

const halfPiramid = (num) => {
  let line = "";

  for (let i = 0; i <= num; i++) {
    line = line + "*".repeat(i) + "\n";
  }

  return line;
};

console.log(halfPiramid(5));
