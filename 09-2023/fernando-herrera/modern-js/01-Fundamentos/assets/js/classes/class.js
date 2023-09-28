class Person {
  static _count = 0;
  static get count() {
    return Person._count + " instances";
  }

  static msg() {
    console.log("Hola a todos, soy un método estático");
  }

  meal = "";

  constructor(
    name = "Sin nombre",
    alias = "Sin alias",
    sentence = "Sin frase"
  ) {
    this.name = name;
    this.alias = alias;
    this.sentence = sentence;

    Person._count++;
  }

  // Lo habitual y recomendado es que el Set solo reciba un argumento
  set setMeal(meal) {
    this.meal = meal.toUpperCase();
  }

  get getMeal() {
    return `La comida favorita de ${this.alias} es ${this.meal}`;
  }

  whoAmI() {
    console.log(`Soy ${this.name} y mi identidad es ${this.alias}`);
  }

  mySentence() {
    this.whoAmI();
    console.log(`${this.sentence}`);
  }
}

const spiderman = new Person(
  "Peter Parker",
  "Spiderman",
  "Tu amigo y vecino Spiderman."
);

const ironman = new Person(
  "Tony Stark",
  "Ironman",
  "La armadura y yo somos uno."
);

console.log(spiderman);
console.log(ironman);

// spiderman.whoAmI();
// ironman.whoAmI();

// spiderman.mySentence();
// ironman.mySentence();

spiderman.setMeal = "pie de cereza de la tía May";
console.log(spiderman);

console.log(spiderman.getMeal);

// Person._count = 2;
console.log("Conteo estático: ", Person._count);

console.log(Person.count);
Person.msg();

// No se recomienda crear métodos ni propiedades estáticos fuera de la clase
// Person.outProp = "Hello World";

// console.log(Person, Person.outProp);



