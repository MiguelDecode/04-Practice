import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes.js";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroById debe de retornar un héroe por ID", () => {
    const id = 1;

    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroById debe de retornar undefined si no existe el id", () => {
    const id = 100;

    const hero = getHeroeById(id);

    expect(hero).toBeFalsy();
  });

  // Tarea getHeroesByOwner

  // Debe retornar un arreglo con los héroes de DC
  // Length === 3
  // toEqual al arreglo filtrado

  // Debe retornar un arreglo con los héroes de Marvel
  // length === 2

  test("getHeroesByOwner debe retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";

    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(3);
    expect(heroes).toEqual(heroes.filter((hero) => hero.owner === owner));
  });

  test("getHeroesByOwner debe retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";

    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);
    expect(heroes).toEqual(heroes.filter((hero) => hero.owner === owner));
  });


});
