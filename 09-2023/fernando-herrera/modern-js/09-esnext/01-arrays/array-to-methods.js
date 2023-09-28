const heroes = ["Ironman", "Batman", "Superman", "Flash", "Aquaman", "Thor"];
const heroesCopy = heroes;

// Métodos que crean un nuevo array sin mutar el original

// const result = heroes.toSorted(); // Returns a new array sorted without mute the original.

// const result = heroes.toReversed(); // Returns a new array reversed without mute the original.

const result = heroes.toSpliced(0, 1); // Returns a new array with elements spliced without mute the original.

console.table(heroes);
console.table(heroesCopy);

console.table(result);
