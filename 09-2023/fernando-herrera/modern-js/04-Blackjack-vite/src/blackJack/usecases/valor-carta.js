/**
 * Calculate points value of the card
 * @param {string} carta 
 * @returns A number value as points of the card
 */
export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};