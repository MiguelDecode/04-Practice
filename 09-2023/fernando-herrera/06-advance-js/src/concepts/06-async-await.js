import { heroes } from "../data/heroes";
/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncAwaitComponent = async (element) => {
  const id1 = "5d86371f2343e37870b91ef1";
  const id2 = "5d86371f25a058e5b1c8a65e";

  // Ejemplo con promesas no secuenciales
  try {
    const hero1 = await findHero(id1).then((hero) => hero.name);

    const hero2 = await findHero(id2).then((hero) => hero.name);

    element.innerHTML = `${hero1} - ${hero2}`;
  } catch (err) {
    element.innerHTML = err;
  }
};

const findHero = async (id) => {
  const hero = heroes.find((hero) => hero.id === id);

  if (!hero) throw "Hero not Found";

  return hero;
};
