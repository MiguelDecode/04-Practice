class Singleton {
  static #instance;
  name = "";

  constructor(name = "") {
    if (Boolean(Singleton.#instance)) {
      return Singleton.#instance;
    }
    Singleton.#instance = this;
    this.name = name;
  }
}

const instanceOne = new Singleton("Ironman");
const instanceTwo = new Singleton("Spiderman");

console.log(`Nombre en la instancia es : ${instanceOne.name}`);
console.log(`Nombre en la instancia es : ${instanceTwo.name}`);
