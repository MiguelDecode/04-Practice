// Encontrar todos los divisores de un número.

let num = 40;
let dividers = [];

for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    dividers.push(i);
  }
}

console.log(dividers);
