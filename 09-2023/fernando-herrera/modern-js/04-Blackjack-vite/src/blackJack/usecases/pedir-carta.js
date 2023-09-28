/**
 * Take one card of the deck
 * @param {Array<string>} deck
 * @returns One card of the deck
 */
export const pedirCarta = (deck) => {

  if(!deck) throw new Error('Se debe pasar un deck.')

  if (deck.length === 0) {
    throw "No hay cartas en el deck";
  }

  return deck.pop();
};
