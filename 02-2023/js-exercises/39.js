//  Dado el array = [1,2,3,4,5,6]
//     - Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.
//     - Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.
//     - Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en pantalla.
//     - Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
//     - Generar una copia de un array pero con todos los elementos incrementado en 1.
//     - Calcular el promedio

let arr = [1, 2, 3, 4, 5, 6];

let i = 0;

while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

for (let j = 0; j < arr.length; j++) {
  console.log(arr[j]);
}

arr.forEach((el) => console.log(el));

arr.forEach((el) => console.log(el + 1));

const newArr = arr.map((el) => el + 1);
console.log(newArr);

const amount = arr.reduce((accumulator, current) => accumulator + current);
console.log(amount / arr.length);
