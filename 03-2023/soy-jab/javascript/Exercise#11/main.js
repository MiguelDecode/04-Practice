// El body estará vacio
// El orden de los reyes debe ser aleatorio con cada recarga de la página
// Precio y nombre del rey mostrado deben estar en ur array de objetos
// Al hacer click en un rey se mostrará "Has reservado una cena con <nombre-rey> co un precio de <precio>" + imagen del rey

const $body = document.querySelector("body");

const REYES = [
  {
    nombre: "atanagildo",
    precio: 56,
  },
  {
    nombre: "ataulfo",
    precio: 67,
  },
  {
    nombre: "ervigio",
    precio: 76,
  },
  {
    nombre: "recesvinto",
    precio: 65,
  },
  {
    nombre: "leogivildo",
    precio: 60,
  },
  {
    nombre: "sisebuto",
    precio: 61,
  },
  {
    nombre: "teodorico",
    precio: 72,
  },
];

let aleatorio = [];

const capitalize = (value) => {
  value = value.slice(0, 1).toUpperCase() + value.slice(1);
  return value;
};

$body.insertAdjacentHTML(
  "beforeend",
  `<div class="modal">
<img src="./assets/close.png" class="modal__close" >
<p class="modal__text"></p>
<img src="" alt="rey" class="modal__king">
</div>`
);

document.querySelectorAll(".modal__close")[0].onclick = close;

$body.insertAdjacentHTML("beforeend", `<div class="elementos"></div>`);

function ordenar() {
  // Creamos array inicial
  let orden = REYES.map((rey, indice) => indice);

  do {
    let azar = Math.floor(Math.random() * orden.length);
    aleatorio.push(orden[azar]);
    orden.splice(azar, 1);
  } while (orden.length > 0);
}

function mostrar() {
  for (let i = 0; i < aleatorio.length; i++) {
    document.querySelector(".elementos").insertAdjacentHTML(
      "beforeend",
      `<div class="elemento" data-index="${aleatorio[i]}">
    <img src="./assets/rey_${REYES[aleatorio[i]].nombre}.png">
    <h2 class="nombre">${capitalize(REYES[aleatorio[i]].nombre)}</h2>
    </div>`
    );
    document.querySelectorAll(".elemento img")[i].onclick = modal;
  }
}

ordenar();
mostrar();

function modal() {
  let $reyes = this.parentNode.parentNode.children;

  for (let i = 0; i < $reyes.length; i++) {
    if ($reyes[i] === this.parentNode) {
      document.querySelector(".modal").style.display = "flex";

      document.querySelector(
        ".modal__text"
      ).textContent = `Has reservado una cena con ${capitalize(
        REYES[aleatorio[i]].nombre
      )} con un precio de ${REYES[aleatorio[i]].precio}€`;

      document.querySelector(".modal__king").src = `./assets/rey_${
        REYES[aleatorio[i]].nombre
      }.png`;
    }
  }
}

function close() {
  document.querySelector(".modal").style.display = "none";
}
