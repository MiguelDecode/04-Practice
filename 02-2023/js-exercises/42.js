// Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.

let word = "amarillo";

let arr = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];

const result = arr.filter((el) => el === word);

console.log(result);

