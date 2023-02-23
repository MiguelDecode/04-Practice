// Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es introducido por el usuario a través de un prompt.

let totalNumbers = 22;
let max = 67;

let arr = [];

for (let i = 0; i < totalNumbers; i++) {
  arr.push(Math.round(Math.random() * max));
}

console.log(arr);
