import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Pruebas en el componente 11-async-await.js", () => {
  test("getImagen debe retornar un URL de la imagen", async () => {
    const url = await getImagen();

    expect(typeof url).toBe("string");
  });

  test("getImagen debe retornar un mensaje de fallo si no funciona correctamente", async () => {
    const err = await getImagen();

    expect(err).toEqual("No se encontró la imagen");
  });
});
