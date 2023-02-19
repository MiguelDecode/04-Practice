// Crea un tablero de ajedrez
// * * * * * * * *
//  * * * * * * *
// * * * * * * * *
//  * * * * * * *
// * * * * * * * *
//  * * * * * * *
// * * * * * * * *
//  * * * * * * *

const chess = () => {
  let table = "";

  for (let i = 0; i <= 8; i++) {
    for (let j = 0; j <= 8; j++) {
      if (i % 2 === 0) {
        table += "* ";
      } else {
        table += " *";
      }
    }
    table += "\n";
  }

  return table;
};

console.log(chess());
