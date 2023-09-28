const nombre = "Miguel";
const apellido = "Decode";

const nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto);

console.log(`${nombre} ${apellido}`);

function getSaludo(name) {
  return `Hola Mundo, ${name}`;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);
console.log(`Este es un texto: ${getSaludo("Fernando")}`);


