let games = ["Zelda", "Mario", "Metroid", "Chrono"];
console.log("Largo: ", games.length);

let firstGame = games[0];
let lastGame = games[games.length - 1];
console.log(firstGame);
console.log(lastGame);

games.forEach((el, index, arr) => console.log(el, index, arr));

const newLength = games.push("F-Zero");
console.log(newLength, games);

const newLength2 = games.unshift("Fire Emblem");
console.log(newLength2, games);

const lastPop = games.pop();
console.log(lastPop);

const firstShift = games.shift();
console.log(firstShift);

console.log(games);

const cutGame = games.slice(1, 2); // No muta el array original
const removeGame = games.splice(1, 1); // Muta el array original
console.log(cutGame, removeGame);

console.log(games);

console.log("Indice de Metroid: ", games.indexOf("Metroid"));

