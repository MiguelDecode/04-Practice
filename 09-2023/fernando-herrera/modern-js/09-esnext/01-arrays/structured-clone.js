const superHeroes = [
  {
    id: 1,
    name: "Batman",
  },
  {
    id: 2,
    name: "Superman",
  },
  {
    id: 3,
    name: "Flash",
  },
  {
    id: 4,
    name: "Aquaman",
  },
];

const superHeroesCopy = [...superHeroes];

const superHeroesCopy2 = JSON.parse(JSON.stringify(superHeroes));

const superHeroesCopy3 = structuredClone(superHeroes);

// superHeroesCopy[0].name = 'Green Lantern'
// superHeroesCopy2[0].name = 'Green Lantern'
// superHeroesCopy3[0].name = 'Green Lantern'

console.table(superHeroes);

console.table(superHeroesCopy);

console.table(superHeroesCopy2);

console.table(superHeroesCopy3);

