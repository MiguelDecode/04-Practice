import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Pruebas en 07-deses-arr", () => {
  test("Debe retornar un string y un número", () => {
    const [letters, numbers] = retornaArreglo();

    // Test de exactitud
    expect(letters).toBe("ABC");
    expect(numbers).toBe(123);

    // Test de tipo
    expect(typeof letters).toBe("string");
    expect(typeof numbers).toBe("number");

    // Se traduce en espera cualquier tipo de string
    expect(letters).toEqual(expect.any(String));
  });
});
