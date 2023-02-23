// Crear un array vacío, luego generar 20 números al azar y guardarlos en un array.

let arr = [];

for (let i = 0; i < 20; i++) {
  arr.push(Math.round(Math.random() * 100));
}

console.log(arr);
