function createPerson(name, surname) {
  return { name, surname };
}

const createPerson2 = (name, surname) => ({
  name,
  surname,
});

const person = createPerson("Miguel", "Decode");
console.log(person);

const person2 = createPerson2("Marta", "Sanchez");
console.log(person2);

function printArguments() {
  console.log(arguments);
}

printArguments(10, true, false, "Miguel", "Hello");

const printArguments2 = (edad, ...arguments) => {
  // console.log(edad, arguments);
  return arguments;
};

const result = printArguments2(10, true, false, "Miguel", "Hello");
// Destructuring
let [married, isAlive, name, greet] = result;
console.log(married, isAlive, name, greet);

const { surname: newSurname } = createPerson("Miguel", "Decode");
console.log(newSurname);

const tony = {
  name: "Tony Stark",
  codeName: "Ironman",
  isAlive: true,
  age: 40,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  suits: ["Mark I", "Mark V", "Hulkbuster"],
};

/* const printProps = (person) => {
  console.log(person.name);
  console.log(person.codeName);
  console.log(person.isAlive);
  console.log(person.age);
  console.log(person.coords);
  console.log(person.suits)
}; */

const printProps = ({ name, codeName, isAlive, age = 15, coords, suits }) => {
  console.log(name);
  console.log(codeName);
  console.log(isAlive);
  console.log(age);
  console.log(coords);
  console.log(suits);
};

printProps(tony);
