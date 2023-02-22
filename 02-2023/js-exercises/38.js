// Crear una función que reciba un número entero y muestre un error si el tipo de dato pasado es de otro tipo.

const checkNumber = (num) => {
  if (typeof num !== "number") return "Num is not a number.";

  if (num % Math.trunc(num) !== 0) return "Num is a float number.";

  if (Number.isInteger(num)) return `${num} is a integer number`;
};

console.log(checkNumber("hello"));
console.log(checkNumber(12.4));
console.log(checkNumber(38.0));
console.log(checkNumber(3.14));
console.log(checkNumber(false));
console.log(checkNumber(true));
