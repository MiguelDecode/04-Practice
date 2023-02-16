// Determinar si un número ingresado por el usuario en un loop es primo o no, validar que el número ingresado sea mayor o igual a dos.

let num = 16;
let prime;

for (let i = 2; i < num; i++) {

  if (num % i === 0) {
    prime = false;
    break;
  }

  prime = true;
}

if (prime) {
  console.log("El número es primo");
} else {
  console.log("El número no es primo");
}
