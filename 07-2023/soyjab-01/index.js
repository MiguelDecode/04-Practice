/* 
Exercise 1

let nota;
subirNota();
console.log(nota + 1); // NaN

function subirNota() {
  let nota = 5;
  nota = 9;
  console.log(nota); // 9
  console.log(typeof nota); // number
}

// 9
// number
// NaN
 */

/*
Exercise 2

let nota = 0;
subirNota();
console.log(extra);
console.log(PUNTOS);

function subirNota() {
  nota = 2;
  extra = 7;
  console.log(nota);
  const PUNTOS = 10;
}

// 2
// 7
// Reference Error
 */

// Exercise 3

console.log(miNombre)
let color = "Rojo"

if(true) {
  var miNombre = 'Jab'
  let color = 'Azul'
}

console.log(miNombre)
console.log(color)

// undefined
// Jab
// Rojo