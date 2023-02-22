// *
// ***
// *****
// *******
// *********
// *******
// *****
// ***
// *

let result = "";

const drawDiamond = (num) => {
  for (let i = 1; i < num * 2; i = i + 2) {
    console.log(i);
    result += "*".repeat(i);

    result += "\n";
  }

  for (let i = num * 2 - 3; i > 0; i = i - 2) {
    console.log(i);
    result += "*".repeat(i);

    result += "\n";
  }

  return result;
};

console.log(drawDiamond(5));
// console.log(drawDiamond(7));
// console.log(drawDiamond(9));
// console.log(drawDiamond(3));
