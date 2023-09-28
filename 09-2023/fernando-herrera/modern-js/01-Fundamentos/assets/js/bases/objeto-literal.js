const character = {
  name: "Tony Stark",
  codeName: "Ironman",
  isAlive: true,
  age: 40,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  suits: ["Mark I", "Mark V", "Hulkbuster"],
  address: {
    zip: "10008, 90265",
    location: "Malibu, California",
  },
  "last film": "Infinity War",
};

console.log(character);
// Name
console.log("Nombre:", character.name);
console.log("Nombre:", character["name"]);
// Age
console.log("Edad:", character.age);

console.log(character.coords);
console.log(character.coords.lat);

// Total Suits
console.log(character.suits.length);
// Last Suit
console.log(character.suits[character.suits.length - 1]);

const x = "isAlive";
console.log(character[x]);

console.log(character["last film"]);

character.age = null;
console.log(character.age);

delete character.age;
console.log(character);

Object.freeze(character);
character.married = true;

const entries = Object.entries(character);
console.log(entries);

character.money = 9999999999999;
character.married = false;
character.address.location = "Costa Rica";
console.log(character);

const properties = Object.getOwnPropertyNames(character);
console.log(properties);
const values = Object.values(character);
console.log(values);
