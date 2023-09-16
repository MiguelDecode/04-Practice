const fher = {
  name: "Fernando",
  age: 30,
  imprimir() {
    console.log(`Nombre: ${this.name}`);
  },
};

const pedro = {
  name: "Pedro",
  age: 15,
  imprimir() {
    console.log(`Nombre: ${this.name}`);
  },
};

// fher.imprimir();
// pedro.imprimir();

// Esto se debe de crear con la palabra new
function Persona(name, age) {
  this.name = name;
  this.age = age;

  this.imprimir = function () {
    console.log(`Nombre: ${this.name}`);
  };
}

const maria = new Persona("María", 38);
const melissa = new Persona("Melissa", 35);
console.log(maria);
console.log(maria.imprimir());
console.log(melissa);
console.log(melissa.imprimir());
