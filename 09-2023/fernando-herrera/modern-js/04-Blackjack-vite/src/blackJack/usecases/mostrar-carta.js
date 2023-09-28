/**
 * Add and create a new image of a card.
 * @param {string} carta
 * @param {HTMLElement} container
 */
export const mostrarCarta = (carta, container) => {
  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
  imgCarta.classList.add("carta");
  container.append(imgCarta);
};
