import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const promiseComponent = (element) => {
  const id1 = "5d86371fd55e2e2a30fe1ccb2";
  const id2 = "5d86371f97c29d020f1e1f6d";

  let hero1, hero2;

  const renderHero = (hero) => (element.innerHTML += `<h3>${hero.name}</h3>`);
  const renderError = (err) =>
    (element.innerHTML = `<h1>Error:</h1><h3>${err}</h3>`);

  Promise.all([findHero(id1), findHero(id2)])
    .then(([hero1, hero2]) => {
      renderHero(hero1);
      renderHero(hero2);
    })
    .catch(renderError);

  // Second Mode
  /*   findHero(id1)
    .then((hero) => {
      hero1 = hero;
      return findHero(id2);
    })
    .then((hero) => {
      hero2 = hero;
      renderHero(hero1);
      renderHero(hero2);
    })
    .catch(renderError)
    .finally(console.log("Finally Promise con variables globales")); */

  // First mode
  /*   findHero(id1)
    .then((hero) => {
      renderHero(hero);
      findHero(id2)
        .then(renderHero)
        .catch(renderError)
        .finally(console.log("Finally hero two"));
    })
    .catch(renderError)
    .finally(console.log("Finally hero one")); */
};

/**
 * Find a hero by Id
 * @param {String} id
 * @returns {Promise<Object>}
 */
const findHero = (id) => {
  return new Promise((resolve, reject) => {
    console.log("Promesa en curso");
    const hero = heroes.find((hero) => hero.id === id);

    if (!hero) reject(`Hero with id ${id} not found.`);

    resolve(hero);
  });
};
