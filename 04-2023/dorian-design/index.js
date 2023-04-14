// Exercise 1
/* const name = prompt("Introduce tu nombre");
const surname = prompt("Introduce tu apellido");
const age = Number(prompt("Introduce tu edad"));

console.log(
  `Hola ${name} ${surname}, tienes ${age} años y el año que viene tendrás ${
    age + 1
  } `
);
 */

// Exercise 2

/* const calcArea = () => {
  let figure = prompt(
    "Introduce la figura de la cual deseas saber el area: triangulo, rectangulo o circulo"
  ).toLowerCase();

  if (figure === "triangulo") {
    let base = Number(prompt("Introduce la base"));
    let height = Number(prompt("Introduce la altura"));

    console.log(`El area de tu tríangulo es: ${(base * height) / 2}`);
  } else if (figure === "rectangulo") {
    let base = Number(prompt("Introduce la base"));
    let height = Number(prompt("Introduce la altura"));

    console.log(`El area de tu rectángulo es: ${base * height}`);
  } else if (figure === "circulo") {
    let radio = Number(prompt("Introduce el radio"));

    console.log(
      `El area de tu círculo es: ${(Math.PI * radio ** 2).toFixed(2)}`
    );
  } else {
    console.log("Algo a fallado");
  }
};

calcArea(); */

// Exercise 3

/* let number = Number(
  prompt(
    "Introduce un número y te diré los pares e impares hasta el número en cuestión"
  )
);

for (let i = 1; i <= number; i++) {
  i % 2 === 0
    ? console.log(`${i} es un número par`)
    : console.log(`${i} es un número impar`);
} */

// Exercise 4

/* let number = Number(prompt("Introduce un número para saber si es primo"));

let prime = true;

for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    prime = false;
    break;
  }
}

console.log(`${prime ? "Es un número primo" : "No es un número primo"}`); */

// Exercise 5

/* let number = Number(prompt("Introduce un número y te devolveré su factorial"));

let result = 1;

for (let i = 1; i <= number; i++) {
  result *= i;
}

console.log(result); */

// Exercise 6

// let total = 0;
// let counter = 0;

// do {
//   let number = Number(prompt("Introduce un número a sumar al total"));
//   counter++;
//   total += number;
// } while (total <= 50);

// console.log(total, counter);

// Exercise 7

/* let arr = [3, 8, 12, 93, 38, 7, 77];

let pares = [];

let impares = [];

const arrMultiply = arr.map((number) => {
  return Math.round(number * Math.random() * 10);
});

arrMultiply.map((number) => {
  number % 2 === 0 ? pares.push(number) : impares.push(number);
});

console.log(arrMultiply, pares, impares); */

//Exercise 8

/* const letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
  "T",
];

let dni;

do {
  dni = prompt(
    "Introduce tu número de DNI y calcularé que letra le corresponde"
  );
} while (!(Number(dni) >= 0 && dni.length === 8));

result = Math.round(Number(dni) % 23);

console.log(letras[result]); */

// Exercise 9

/* let sentence = prompt("Introduce tu palabra");

let vocales = 0;
let consonantes = 0;

for (const letter of sentence) {
  if (
    letter === "a" ||
    letter === "o" ||
    letter === "e" ||
    letter === "u" ||
    letter === "i"
  ) {
    vocales++;
  } else {
    consonantes++;
  }
}
console.log(vocales, consonantes, sentence.length); */

// Exercise 10

/* let colors = ["azul", "amarillo", "rojo", "verde", "rosa"];

let color = prompt("Introduce un color");

colors.some((el) => el === color)
  ? console.log("Tu color se encuentra en la lista")
  : console.log("Tu color no se encuentra en la lista"); */
