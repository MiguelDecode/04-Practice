const $main = document.querySelector(".main");
const $texto = document.querySelector(".texto");
const $rey = document.querySelector(".rey");
const $kingName = document.querySelector(".nombre-rey");

let counter = 0;

const reyes = [
  "atanagildo",
  "ataulfo",
  "ervigio",
  "leogivildo",
  "recesvinto",
  "sisebuto",
  "teodorico",
];

const camisetas = ["camisetaNegra.png", "camisetaBlanca.png"];

// Coloca la primera letra de una palabra en mayúsculas
const capitalize = (name) => {
  name = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
  return name;
};

// Muestra un rey aleatorio a la carga de la página
const randomKing = () => {
  counter = Math.floor(Math.random() * reyes.length);
  $main.innerHTML = `
  <img class="camiseta" src="./img/camisetaBlanca.png" alt="camiseta" />
      <p class="texto" contenteditable="true">
        I ♡ <span class="nombre-rey">${capitalize(reyes[counter])}</span>
      </p>
      <img src="/img/rey_${reyes[counter]}.png" alt="rey" class="rey" />
      <button class="btn" id="imprimir">Imprimir</button>
  `;
};

randomKing();

// Nos permite imprimir la imagen mostrada actualmente en pantalla.
document
  .getElementById("imprimir")
  .addEventListener("click", () => window.print());

// Permite el cambio entre color negro y blaco de la camiseta
document.querySelector(".camiseta").addEventListener("click", (event) => {
  let camiseta = event.target.src.slice(26);

  if (camiseta === camisetas[0]) {
    event.target.src = `./img/${camisetas[1]}`;
    document.querySelector(".texto").style.color = "black";
  }

  if (camiseta === camisetas[1]) {
    event.target.src = `./img/${camisetas[0]}`;
    document.querySelector(".texto").style.color = "white";
  }
});

// Permite el cambio de la imagen del rey y el cambio del nombre mostrado
document.querySelector(".rey").addEventListener("click", (event) => {
  counter++;
  if (counter >= reyes.length) counter = 0;
  event.target.src = `./img/rey_${reyes[counter]}.png`;

  const $name = document.querySelector(".nombre-rey");
  $name.textContent = capitalize(reyes[counter]);
});

// Previene la escritura de los carácteres + y -
document.querySelector(".texto").addEventListener("keydown", (event) => {
  let longuitud = document.querySelector(".texto").innerHTML.length;

  if (event.key !== "Backspace") {
    if (longuitud > 70) event.preventDefault();
  }

  if (event.key === "+") {
    event.preventDefault();
  }
  if (event.key === "-") {
    event.preventDefault();
  }
});

// Marcamos un tamaño de texto del cual partir y agregamos o reducimos 2px hasta dos limites mayor y menor estipulados
let size = 16;

document.querySelector(".texto").addEventListener("keyup", (event) => {
  if (event.key === "+") {
    document.querySelector(".texto").style.fontSize = `${size + 2}px`;
    size += 2;
    if (size >= 30) size = 30;
  }

  if (event.key === "-") {
    document.querySelector(".texto").style.fontSize = `${size - 2}px`;
    size -= 2;
    if (size <= 10) size = 10;
  }
});
