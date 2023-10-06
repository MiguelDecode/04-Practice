import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Prueba del componente 09-promesas", () => {
  test("getHeroByIdAsync debe de retornar un héroe", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      done();
    });
  });

  test("getHeroByIdAsync debe obtener un error si héroe no existe", (done) => {
    const id = 100;

    getHeroeByIdAsync(id)
      // Caso que nunca debería suceder
      .then((hero) => {
        expect(hero).toBeFalsy();
        done();
      })
      // Caso que se esta evaluando
      .catch((err) => {
        expect(err).toBe('No se pudo encontrar el héroe');
        done();
      });
  });
});
