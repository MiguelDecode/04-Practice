// Print this
// *****
// *****
// *****
// *****
// *****

const printSquare = (num) => {
  let line = "*".repeat(num);

  for (let i = 0; i < num; i++) {
    console.log(line);
  }
};

// const printBlock = (num) => {
//   let line = "*".repeat(num);
//   for (let i = 2; i <= num; i++) {
//     // console.log(i);
//     line += "\n";
//     for (let j = 1; j <= num; j++) {
//       // console.log(j);
//       line += `*`;
//     }
//   }
//   console.log(line);
// };

const printBlock = (num) => {
  let line = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      line += `*`;
    }
    line += "\n";
  }
  console.log(line);
};

// printSquare(10);
printBlock(5);
printBlock(12)