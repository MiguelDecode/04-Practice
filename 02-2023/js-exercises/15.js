// El siguiente código tiene un error que se produce en algunos casos especiales, descubrirlo y arreglarlo:

// Obtener edad

// if (edad < 13) {
//   console.log("Es niño");
// }
// if (edad < 18) {
//   console.log("Es adolecente");
// } else {
//   console.log("Es adolecente");
// }

let edad = 10;

// Comenzar siempre las sucesiones de condiciones por aquellas que sean mas restrictivas

if (edad < 13) {
  console.log("Es niño");
} else if (edad < 18) {
  console.log("Es adolescente");
} else {
  console.log("Es adulto");
}
