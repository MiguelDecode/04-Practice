/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncAwaitOptComponent = async (element) => {
  // Promesas en formato síncrono 4.0 seg
  // console.time("Promises");
  // const value1 = await slowPromise();
  // const value2 = await mediumPromise();
  // const value3 = await fastPromise();
  // console.timeEnd("Promises");

  // Promesas en formato asíncrono 2.0 seg
  console.time("Promises");
  const [value1, value2, value3] = await Promise.all([
    slowPromise(),
    mediumPromise(),
    fastPromise(),
  ]);
  console.timeEnd("Promises");

  element.innerHTML = `
  value1: ${value1}<br/>
  value2: ${value2}<br/>
  value3: ${value3}<br/>
  `;
};

const slowPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Slow Promise");
    }, 2000);
  });

const mediumPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Medium Promise");
    }, 1500);
  });

const fastPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fast Promise");
    }, 1000);
  });
