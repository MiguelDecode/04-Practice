import Saludar, { PI, usuario, hello } from "./constantes.js";
import { aritmetica } from "./aritmetica.js";

console.log("Archivo modulos.js");
console.log(PI);

console.log(usuario);
console.log(aritmetica.sumar(3, 4));
console.log(aritmetica.restar(8, 4));
// saludar();
hello();
let saludo = new Saludar();
saludo;