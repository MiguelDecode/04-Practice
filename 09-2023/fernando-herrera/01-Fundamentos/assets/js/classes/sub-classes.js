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

/* const spiderman = new Person(
  "Peter Parker",
  "Spiderman",
  "Tu amigo y vecino Spiderman."
); */

class Hero extends Person {
  clan = "Sin clan";

  constructor(name, alias, sentence) {
    // Es importante que el constructor super se coloco antes de cualquier otra prop.
    super(name, alias, sentence);
    this.clan = "Avengers";
  }

  whoAmI() {
    console.log(`Soy ${this.name}, ${this.clan}.`);
    super.whoAmI();
  }
}

const spiderman = new Hero(
  "Peter Parker",
  "Spiderman",
  "Tu amigo y vecino Spiderman"
);

console.log(spiderman);
spiderman.whoAmI();
