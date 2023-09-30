import heroes, { owners } from "../data/heroes";

export const getHeroById = (id) => heroes.find((hero) => hero.id === id);

// console.log(getHeroById(2));

// const getHeroByOwner = (owner) => heroes.filter((hero) => hero.owner === owner);

// console.table(getHeroByOwner("Marvel"));
// console.table(getHeroByOwner("DC"));

// const getHeroDataByName = (name) => heroes.find((hero) => hero.name === name);

// console.log(getHeroDataByName("Spiderman"));

console.log(owners);
