// Funciones  en JavaScript
const saludar = function (nombre = "Desconocido") {
  return `Hola ${nombre}`;
};

const saludar2 = (nombre = "Desconocido") => `Hola ${nombre}`;

// console.log(saludar("Goku"));

console.log(saludar());
console.log(saludar("Piccolo"));
console.log(saludar2());
console.log(saludar2("Vegeta"));

const getUser = () => ({
  uid: "ABC123",
  username: "El_Papi1502",
});

console.log(getUser());

function getUsuarioActivo(nombre) {
  return {
    uid: "ABG123",
    username: nombre,
  };
}

const usuarioActivo = getUsuarioActivo("Fernando");

console.log(usuarioActivo);

// Transformar getUsuarioActivo a función flecha

const getUsuarioActivo2 = (nombre) => ({
  uid: "ABG123",
  username: nombre,
});

const usuarioActivo2 = getUsuarioActivo2("Miguel");

console.log(usuarioActivo2);
