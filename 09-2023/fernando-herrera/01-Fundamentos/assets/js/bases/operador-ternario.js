/* 
Días de semana abrimos a las 11, pero los fines de semana abrimos a las 9.
*/

const today = 2;
const hour = 12;

let openHour;

let msg;

/* if (today === 0 || today === 6) {
  hour >= 9
    ? (msg = `Estamos abiertos`)
    : (msg = `No estamos abiertos, abrimos a las ${openHour}.`);
} else {
  hour >= 11
    ? (msg = "Estamos abiertos")
    : (msg = `No estamos abiertos, abrimos a las ${openHour}.`);
} */

today === 0 || today === 6
  ? hour >= 9
    ? (msg = "Estamos abiertos.")
    : (msg = "No estamos abiertos, abrimos a las 9.")
  : hour >= 11
  ? (msg = "Estamos abiertos.")
  : (msg = "No estamos abiertos, abrimos a las 11");

console.log(msg);
