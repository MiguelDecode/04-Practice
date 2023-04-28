/* console.log(this);
console.log(window);
console.log(this === window);

this.nombre = "Contexto Global";

console.log(window.nombre);
console.log(this.nombre);

function imprimir() {
  console.log(this.nombre);
}

imprimir();

const obj = {
  nombre: "Contexto Objeto",
  imprimir: function () {
    console.log(this.nombre);
  },
};

obj.imprimir();

const obj2 = {
  nombre: "Contexto Objeto Dos",
  imprimir,
};

obj2.imprimir();

const obj3 = {
  nombre: "Contexto Objeto Tres",
  imprimir: () => {
    console.log(this.nombre);
  },
};

obj3.imprimir();

function Persona(nombre) {
  this.nombre = nombre;
  // return console.log(this.nombre)

  return () => console.log(this.nombre);
}

let miguel = new Persona("Miguel");
 */

// Question 1: variable vs property

/* const object = {
  message: "Hello World!",

  getMessage() {
    const message = "Hello Earth!";
    return this.message;
  },
};

console.log(object.getMessage()); */

// Question 2: Cat Name

/* function Pet(name) {
  this.name = name;

  this.getName = () => this.name;
}

const cat = new Pet('Fluffy');

console.log(cat.getName()); // What is logged?

const { getName } = cat;
console.log(getName());     // What is logged? */

// Question 3: Delayed greeting

/* const object = {
  message: 'Hello, World!',

  logMessage() {
    console.log(this.message); // What is logged?
  }
};

setTimeout(object.logMessage, 1000); */

// Question 4: Artificial method

/* const object = {
  message: "Hello, World!",
};

function logMessage() {
  console.log(this.message); // "Hello, World!"
}

// Write your code here...

logMessage.bind(object)(); */

// Question 5: Greeting and farewell

/* const object = {
  who: 'World',

  greet() {
    return `Hello, ${this.who}!`;
  },

  farewell: () => {
    return `Goodbye, ${this.who}!`;
  }
};

console.log(object.greet());    // What is logged? : 'World'
console.log(object.farewell()); // What is logged? : undefined */

// Question 6: Tricky length

/* var length = 4;
function callback() {
  console.log(this.length); // What is logged? 
}

const object = {
  length: 5,
  method(callback) {
    callback();
  }
};

object.method(callback, 1, 2); */

// Question 7: Calling Arguments

/* var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}

const object = {
  length: 5,
  method() {
    arguments[0]();
  }
};

object.method(callback, 1, 2); */

// This in JavaScript

window.nick = "Global";

function getName() {
  console.log(this);
  console.log(this.nick);
}

getName();

var midudev = {
  nick: "midudev",
  getName: getName,
};

midudev.getName();

const getNick = () => {
  console.log(`My name is ${this.nick}`);
};

getNick();

function context() {
  nick = "Local";
  getNick();
}

context();
