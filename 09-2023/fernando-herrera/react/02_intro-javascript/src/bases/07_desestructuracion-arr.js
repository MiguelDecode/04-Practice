const personajes = ["Goku", "Vegeta", "Trunks"];

console.log(personajes);

const [p1, p2, p3] = personajes;

console.log(p1, p2, p3);

const retornaArreglo = () => ["ABC", 123];

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

// Tarea

const usaEstado = (valor) => {
  return [valor, () => console.log("Hola Mundo")];
};

const arr = usaEstado("Goku");

const [nombre, setNombre] = arr;

console.log(nombre);
setNombre();
