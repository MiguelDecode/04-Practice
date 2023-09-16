function greet(name = "Anónimo") {
  console.log(arguments);
  console.log(`Hola que tal, ${name}.`);
  return "Retorno de la función";
}

const welcome = (name = "Anónimo") => {
  // Las funciones flecha no cuentan con arguments
  // console.log(arguments)
  console.log(`Bienvenido, ${name}.`);
};

/* 
greet("Miguel");
greet("Marta");
greet("Marcos");
greet("Mickael");
greet();

welcome("Miguel");
welcome("Marta");
welcome("Marcos");
welcome();

welcome("Miguel", 40, true, "Costa Rica");
greet("Miguel", 40, true, "Costa Rica");
 */

console.log(greet("María"));

function add(a, b) {
  return a + b;
}

const add2 = (a, b) => a + b;

console.log(add(1, 2));

console.log(add2(2, 3));

function randomNumber() {
  return Math.random();
}

const randomNumber2 = () => Math.random();

console.log(randomNumber());
console.log(randomNumber2());


