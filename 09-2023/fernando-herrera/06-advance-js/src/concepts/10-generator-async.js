import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const generatorAsyncComponent = async (element) => {
  const heroGenerator = getHeroGenerator();
  let status = false;

  do {
    const { value, done } = await heroGenerator.next();
    status = done;

    if (status) break;

    console.log({ value, done });

    element.innerHTML = value;
  } while (!status);
};

async function* getHeroGenerator() {
  for (const hero of heroes) {
    await sleep();
    yield hero.name;

    return "no hay mas";
  }
}

const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};
