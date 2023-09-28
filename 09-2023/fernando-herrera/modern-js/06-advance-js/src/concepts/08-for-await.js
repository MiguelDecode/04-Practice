import { heroes } from "../data/heroes";
/**
 *
 * @param {HTMLDivElement} element
 */
export const forAwaitComponent = async (element) => {
  const id1 = "5d86371f25a058e5b1c8a65e";

  const heroesIds = heroes.map((heroe) => heroe.id);

  /*   if (await getHeroAsync(id1)) {
    element.innerHTML = "Si existe el héroe";
  } else {
    element.innerHTML = "No existe el heroe";
  } */

  try {
    const heroesPromises = getHeroesAsync(heroesIds);

    for await (const hero of heroesPromises) {
      element.innerHTML += `${hero.name}<br/>`
    }

/*     const heroes = Promise.all(heroesPromises).then((arr) =>
      arr.map((hero) => (element.innerHTML += `<p>${hero.name}</p>`))
    ); */
  } catch (err) {
    element.innerHTML = err;
  }
};

/**
 *
 * @param {Array<String>} heroIds
 * @returns {Array<Promise>}
 */
const getHeroesAsync = (heroIds) => {
  const heroPromises = [];

  heroIds.forEach((id) => {
    heroPromises.push(getHeroAsync(id));
  });

  return heroPromises;
};

const getHeroAsync = async (id) => {
  await new Promise((resolve) => {
    setTimeout(() => resolve(), 1000);
  });

  return heroes.find((hero) => hero.id === id);
};
