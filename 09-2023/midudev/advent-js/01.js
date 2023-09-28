// En los almacenes de Papá Noel están haciendo inventario. Hay tres almacenes (que se representa cada uno como un Array). En cada almacén hay regalos.

// Nos han pedido que escribamos un programa que nos diga qué regalos hay que comprar para reponer en nuestros almacenes ahora que se acerca la Navidad. Un regalo se tiene que reponer cuando sólo hay stock en uno de los tres almacenes.

const arr1 = ["bici", "coche", "bici", "bici"];
const arr2 = ["coche", "bici", "muñeca", "coche"];
const arr3 = ["bici", "pc", "pc"];

// Primer Intento
/* function getGiftsToRefill(a, b, c) {
  let result = [];

  a.forEach((el) => {
    if (b.includes(el) || c.includes(el)) return;
    result.push(el);
  });

  b.forEach((el) => {
    if (a.includes(el) || c.includes(el)) return;
    result.push(el);
  });

  c.forEach((el) => {
    if (a.includes(el) || b.includes(el)) return;
    result.push(el);
  });

  return Array.from(new Set(result));
} */

// Segundo intento
function getGiftsToRefill(a, b, c) {
  const cases = {
    0: [a, b, c],
    1: [b, c, a],
    2: [c, a, b],
  };

  let result = [];

  for (let i = 0; i < arguments.length; i++) {
    cases[i][0].forEach((el) => {
      if (cases[i][1].includes(el) || cases[i][2].includes(el)) return;
      result.push(el);
    });
  }

  return Array.from(new Set(result));
}


console.log(getGiftsToRefill(arr1, arr2, arr3));
