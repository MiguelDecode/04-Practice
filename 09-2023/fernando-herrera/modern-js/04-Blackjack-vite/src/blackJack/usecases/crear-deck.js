import _ from "underscore";

/**
 * Create a new and shuffle deck
 * @param {Array<string>} tiposDeCarta
 * @param {Array<string>} tiposEspeciales
 * @returns {Array<string>} return a new shuffle deck
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  if (!tiposDeCarta) throw new Error("TiposDeCarta es obligatorio");
  if (tiposDeCarta.length === 0)
    throw new Error("TiposDeCarta debe ser un arreglo con al menos un valor");

  if (!tiposEspeciales) throw new Error("TiposEspeciales es obligatorio");
  if (tiposEspeciales.length === 0)
    throw new Error("TiposEspeciales debe ser un arreglo con al menos un valor");

  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }

  deck = _.shuffle(deck);
  return deck;
};
