// Arreglos en JavaScript

// const arreglo = new Array();

const arreglo = [1, 2, 3, 4];
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)
// arreglo.push(4)
// arreglo.push(5)

// Se copia por referencia
let arreglo2 = arreglo;
// arreglo2.push(5);
// Se crea un nuevo array esparciendo el arreglo original y colocando el 5 al final
arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map((num) => num * 3);

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
