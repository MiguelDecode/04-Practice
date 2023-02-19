// *****
// *   *
// *   *
// *   *
// *****
// Replicar

const square = (num) => {
  let string = "";

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (i === 0 || i === num - 1) {
        string += "*";
        continue;
      }

      if (j === 0 || j === num - 1) {
        string += "*";
        continue;
      }

      string += " ";
    }

    string += "\n";
  }

  return string;
};

console.log(square(5));
console.log(square(8));
