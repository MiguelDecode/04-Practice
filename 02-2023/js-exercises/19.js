// Realizar la suma de todos los números pares entre N y M donde N y M los ingresa un usuario.

const n = 10;
const m = 16;

if (typeof n !== "number" || typeof m !== "number") {
  console.log("Introduce a valid value as a number");
} else {
  let suma = 0;

  // Versión que incluye a N y M en la suma
  // for (let i = n; i <= m; i++) {
  //   if (i % 2 === 0) {
  //     suma += i;
  //   }
  // }

  // Versión que excluye a N y M en la suma
  for (let i = n + 1; i < m; i++) {
    if (i % 2 === 0) {
      suma += i;
    }
  }

  console.log(suma);
}
