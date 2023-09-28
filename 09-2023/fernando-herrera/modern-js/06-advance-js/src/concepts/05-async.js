import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncComponent = (element) => {
  const id1 = "5d86371f233c9f2425f16916";

  const renderHero = (name) => {
    element.innerHTML = name;
  };

  const renderError = (msg) => {
    element.innerHTML = msg;
  };

  console.log("Inicio de componente");

  findHero(id1).then(renderHero).catch(renderError);

  console.log("Fin del componente");
};

/**
 * Search for a hero by id
 * @param {String} id
 * @param {Promise<String>} id
 */
const findHero = async (id) => {
  try {
    const hero = heroes.find((hero) => hero.id === id);

    if (!hero) throw `Hero with id ${id} not found`;

    return hero?.name;
  } catch (err) {
    renderError(err);
  }
};
