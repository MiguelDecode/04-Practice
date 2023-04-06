const PI = Math.PI;

let usuario = "Miguel Decode";
let password = "password";

export { usuario, PI };

export const hello = () => console.log("Hola Miguel");

export function saludar() {
  console.log("Hello World from modules +ES6");
}

export default class Saludar {
  constructor() {
    console.log("Hola Módulos +ES6 desde una clase");
  }
}
