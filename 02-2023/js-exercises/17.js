// Mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo ingresa el usuario en un prompt.

let num = "10";

console.log(typeof num);

num = Number(num);

console.log(typeof num);

for (let i = 1; i <= num; i++) {
  console.log(i);
}

// Mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo ingresa el usuario en un prompt.

let num2 = 19;

for (let j = 1; j <= num2; j += 2) {
  console.log(j);
}

// Escribir utilizando console.log la tabla del 9 hasta 9x10

for (let i = 0; i <= 10; i++) {
  console.log(`9x${i}=${9 * i}`)
}




