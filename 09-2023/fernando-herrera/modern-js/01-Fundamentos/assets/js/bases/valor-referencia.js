let a = 10;

let b = a; // Aqui a sigue siendo 10

a = 30;

console.log({ a, b });

let juan = { name: "Juan" };
let ana = juan;
// Se cambia el valor de la property name en ambos a causa de la referencia
ana.name = "Ana";

console.log(juan, ana);

const changeName = (person) => {
  person.name = "Tony";
  return person;
};

let peter = { name: "Peter" };
let tony = changeName(peter);

console.log(peter, tony); // Ambos se llaman Tony porque son la misma referencia y el cambio se aplica al mismo punto.

let copyPeter = { peter }; // Copia barata en una nueva referencia del objeto

console.log(copyPeter);

let copyTony = { ...tony }; // Copia que crea una nueva referencia y lo distribuye dentro del nuevo objeto

const changeName2 = ({ ...person }) => {
  // Función que rompe la referencia al objeto original
  person.name = "Tony";
  return person;
};

// Arreglos
const fruits = ["Manzana", "Pera", "Piña"];
const otherFruits = [...fruits];

console.log(fruits, otherFruits);

otherFruits.push("Mango");

console.log(fruits, otherFruits);

const newArr = [...otherFruits, "Lima"];
console.log(newArr);

const newOtherFruits = fruits.slice(); // Devuelve un nuevo array con una nueva referencia
newOtherFruits.push("Sandía");
console.log(newOtherFruits);
