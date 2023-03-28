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

// Genera una copia aleatoria del array REYES
const copiaAleatoria = () => {
  const copia = structuredClone(REYES);

  return copia.sort((a, b) => Math.random() - 0.5);
};

// Inserta un contenedor al documento
$body.insertAdjacentHTML("beforeend", `<div class="elementos"></div>`);

const arrAleatorio = copiaAleatoria();

// Crea las cartas de reyes y las inserta dentro del contenedor
const crearReyes = () => {
  arrAleatorio.map((rey, index) => {
    document.querySelector(".elementos").insertAdjacentHTML(
      "beforeend",
      `<div class="elemento" >
        <img class="retrato" data-index="${index}" src="./assets/rey_${rey.nombre}.png">
        <h2 class="nombre">${rey.nombre}</h2>
      </div>`
    );
  });
};

crearReyes();

// Crea un modal oculto
const crearModal = () => {
  $body.insertAdjacentHTML(
    "beforeend",
    `<div class="modal">
        <img src="./assets/close.png" class="modal__close" >
        <p class="modal__text"></p>
        <img src="" alt="rey" class="modal__king">
    </div>`
  );
};

crearModal();

// Muestra un modal con la información del costo de la cena y el rey elegido
const mostrarModal = (index) => {
  document.querySelector(".modal__text").innerHTML = `
  "Has reservado una cena con <span class="modal__name">${arrAleatorio[index].nombre}</span> con un precio de ${arrAleatorio[index].precio} €"`;

  document.querySelector(
    ".modal__king"
  ).src = `./assets/rey_${arrAleatorio[index].nombre}.png`;

  document.querySelector(".modal").style.display = "flex";
};

// Recorre todos los retratos y escucha en cual se ha clickado
const $retratos = document.querySelectorAll(".retrato");

$retratos.forEach((el) => {
  el.addEventListener("click", (event) => {
    const index = event.target.getAttribute("data-index");

    mostrarModal(index);
  });
});

// Escucha el evento click sobre el icono de cruz del modal y lo oculta
const cerrarModal = () => {
  document.querySelector(".modal__close").addEventListener("click", (event) => {
    document.querySelector(".modal").style.display = "none";
  });
};

cerrarModal();
