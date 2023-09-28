class Person {
  static objProp({ name, surname, country }) {
    return new Person(name, surname, country);
  }

  constructor(name, surname, country) {
    this.name = name;
    this.surname = surname;
    this.country = country;
  }

  getInfo() {
    console.log(`Info: ${this.name}, ${this.surname}, ${this.country}`);
  }
}

const nameOne = "Melisa",
  surnameOne = "Flores",
  countryOne = "Honduras";

const miguel = {
  name: "Miguel",
  surname: "Decode",
  country: "Spain",
};

const personOne = new Person(nameOne, surnameOne, countryOne);
const personTwo = Person.objProp(miguel);

personOne.getInfo();
personTwo.getInfo();
