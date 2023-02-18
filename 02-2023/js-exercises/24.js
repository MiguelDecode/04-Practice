// Crear un programa que determine si un número es perfecto o no, (se dice que un número es perfecto si el número es igual a sus divisores, ejemplos 6 = 1 + 2 + 3)

let num = 28;
let suma;
let total = 0;
let dividers = [];

for (let i = 1; i < num; i++) {
  if (num % i === 0) {
    dividers.push(i);
  }
}

dividers.forEach((el) => {
  suma = total += el;
});

if (suma === num) {
  console.log("It's a perfect number");
} else {
  console.log("It isn't a perfect number");
}

console.log(suma);
console.log(dividers);
