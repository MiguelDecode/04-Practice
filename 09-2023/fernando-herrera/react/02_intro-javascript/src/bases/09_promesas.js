import { getHeroById } from "./bases/08_imp-exp";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const hero = getHeroById(2);
//     resolve(hero);
//     // reject("No se pudo encontrar al héroe");
//   }, 2000);
// });

// promesa
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);
      if (!hero) reject("No se encontró al héroe indicado");
      resolve(hero);
      // reject("No se pudo encontrar al héroe");
    }, 1000);
  });
};

getHeroByIdAsync(3)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
  
