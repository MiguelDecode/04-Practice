// INTRODUCCIÓN AL DOM

/* console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.scripts); */

// DOM: NODOS, ELEMENTOS Y SELECTORES

/* document.getElementsByTagName("li"); // Don't use
document.getElementsByClassName("card"); // Don't use
document.getElementsByName("nombre"); // Don't use
document.getElementById("menu");
document.querySelector("#menu");
document.querySelectorAll("a"); */

// DOM: ATRIBUTOS Y DATA-ATTRIBUTES

/* console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "es";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "en");

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.target = "_blank";
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://youtube.com/jonmircha");

console.log($linkDOM.hasAttribute("rel")); */

/* const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscríbete a mi canal y comparte";
console.log($linkDOM.hasAttribute("data-description")); */

// DOM: ESTILOS Y VARIABLES CSS

/* const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);

console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginInline = "auto";
$linkDOM.style.marginBlock = "1rem";
$linkDOM.style.padding = "1rem";

const $html = document.documentElement;
const $body = document.querySelector("body");

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty('--dark-color', 'pink') */

// DOM: CLASES CSS

/* const $card = document.querySelector(".card");

console.log($card);

console.log($card.className);

console.log($card.classList);

console.log($card.classList.contains("card"));
console.log($card.classList.contains("rotate-45"));

$card.classList.add("rotate-45");
$card.classList.remove("rotate-45");
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135"); */

// DOM: TEXTO Y HTML

/* const $whatIsDOM = document.getElementById("que-es");

let text = `<p>El Modelo de Objetos del Documento es una API para documentos HTML y XML.</p>
<p>Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.</p>
`;

$whatIsDOM.innerText = text;
$whatIsDOM.textContent = text;
// $whatIsDOM.innerHTML = text;
$whatIsDOM.outerHTML = text; */

// DOM TRAVERSING: RECORRIENDO EL DOM

/* const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstChild);
console.log($cards.lastChild);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section")); */

// DOM: CREANDO ELEMENTOS Y FRAGMENTOS

/* const $figure = document.createElement("figure");
$figure.classList.add("card");

const $img = document.createElement("img");
$img.alt = "animals";
$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$figure.appendChild($img);

const $figcaption = document.createElement("figcaption");
const $figcaptionText = document.createTextNode("Animals");
$figcaption.appendChild($figcaptionText);
$figure.appendChild($figcaption);

const $cards = document.querySelector(".cards");

$cards.appendChild($figure);

const $figure2 = document.createElement("figure");
$figure2.classList.add("card");
$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people.com" alt="People">
<figcaption>People</figcaption>
`;
$cards.appendChild($figure2);

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
const $ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");

document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

const continentes = ["África", "Ámerica", "Asia", "Europa", "Oceanía"];
const $ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);

$ul2.innerHTML = "";

continentes.forEach((el) => {
  $ul2.innerHTML += `<li>${el}</li>`;
});

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const $ul3 = document.createElement("ul");
document.body.appendChild($ul3)

$fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

$ul3.appendChild($fragment); */

// DOM: TEMPLATES HTML

/* const $cards = document.querySelector(".cards");
const $template = document.getElementById("template-card").content;

const $fragment = document.createDocumentFragment();

cardContent = [
  {
    title: "Tecnología",
    img: "https://placeimg.com/200/200/tech",
  },
  {
    title: "Animales",
    img: "https://placeimg.com/200/200/animals",
  },
  {
    title: "Arquitectura",
    img: "https://placeimg.com/200/200/arch",
  },
  {
    title: "Gente",
    img: "https://placeimg.com/200/200/people",
  },
  {
    title: "Naturaleza",
    img: "https://placeimg.com/200/200/nature",
  },
];

cardContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;

  let $clone = document.importNode($template, true);

  $fragment.appendChild($clone);
});

$cards.appendChild($fragment); */

// DOM: MODIFICANDO ELEMENTOS (OLD STYLE)

/* const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption>Any</figcaption>
`;

$newCard.classList.add("card");

// $cards.replaceChild($newCard, $cards.children[2]);
// $cards.insertBefore($newCard, $cards.firstElementChild);
// $cards.removeChild($cards.lastElementChild);

document.body.appendChild($cloneCards); */

// DOM: MODIFICANDO ELEMENTOS (COOL STYLE)

/*
insertAdjacent...
  .insertAdjacentElement(position, el)
  .insertAdjacentHTML(position,el)
  .insertAdjacentText(position, el)

  beforebegin
  afterbegin
  beforeend
  afterend

 */

/* const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption>Any</figcaption>
`;

$newCard.classList.add("card");

$cards.insertAdjacentElement("afterbegin", $newCard); */

/* 
.before() Insertar antes del elemento
.prepend() Insertar como primer hijo del elemento
.append() Insertar como ultimo hijo del elemento
.after() Insertar despues del elemento
*/

// DOM: MANEJADORES DE EVENTOS

/* function holaMundo() {
  alert("Hello World");
  console.log(event);
}

const $btn = document.getElementById("evento-semantico");
const $btn2 = document.getElementById("evento-multiple");

$btn.onclick = holaMundo;
$btn.onClick = function (e) {
  alert("Hello World 2, pisando la anterior función");
  console.log(e);
  console.log(event);
};

$btn2.addEventListener("click", holaMundo);

$btn2.addEventListener("click", (event) => {
  alert("Hello World 3, Listener Múltiple");
  console.log(event);
  console.log(event.type);
  console.log(event.target);
}); */

// DOM: EVENTOS CON PARAMETROS Y REMOVER EVENTOS

/* const $btn = document.getElementById("evento-parametros");

const saludar = (name = "desconocid@") => {
  alert(`Hola ${name}`);
  console.log(event);
};

$btn.addEventListener("click", () => {
  saludar();
  saludar("Miguel");
});

const $btnRm = document.getElementById("evento-remover");

const double = (event) => {
  alert(`Removiendo el evento de tipo ${event.type}`);
  console.log(event);
  $btnRm.removeEventListener("dblclick", double);
};

$btnRm.addEventListener("dblclick", double); */

// DOM: FLUJO DE EVENTOS

/* const $section = document.querySelector(".eventos-flujo");
const $uno = document.querySelector(".uno");
const $dos = document.querySelector(".dos");
const $tres = document.querySelector(".tres");

const $divsEventos = document.querySelectorAll(".eventos-flujo div");

console.log($divsEventos);

function flujoEventos(event) {
  console.log(
    `Hola te saludo desde ${this.className}, el click lo originó ${event.target.className}`
  );
}

$divsEventos.forEach((div) => {
  // Fase de Burbuja
  // div.addEventListener("click", flujoEventos);
  // div.addEventListener("click", flujoEventos, false);

  // Fase de Captura
  // div.addEventListener("click", flujoEventos, true);

  div.addEventListener("click", flujoEventos, {
    capture: false,
    once: true, // Se utiliza como parametro para que solo se ejecute una vez el evento
  });
}); */

// DOM: STOPPROPAGATION & PREVENTDEFAULT

/* const $divsEventos = document.querySelectorAll(".eventos-flujo div");
const $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(event) {
  console.log(
    `Hola te saludo desde ${this.className}, el click lo originó ${event.target.className}`
  );
  event.stopPropagation();
}

$divsEventos.forEach((div) => {
  // Fase de Burbuja
  // div.addEventListener("click", flujoEventos);
  // div.addEventListener("click", flujoEventos, false);

  // Fase de Captura
  // div.addEventListener("click", flujoEventos, true);

  div.addEventListener("click", flujoEventos, {
    capture: true,
    once: true, // Se utiliza como parametro para que solo se ejecute una vez el evento
  });
});

$linkEventos.addEventListener("click", (event) => {
  alert("Hola soy tu amigo y docente digital Jonathan Mircha");
  event.preventDefault();
  event.stopPropagation();
}); */

// DOM: DELEGACIÓN DE EVENTOS

/* function flujoEventos(event) {
  console.log(
    `Hola te saludo desde ${this}, el click lo originó ${event.target.className}`
  );
}

document.addEventListener("click", (event) => {
  console.log("Click en:", event.target);

  if (event.target.matches(".eventos-flujo div")) {
    flujoEventos(event);
  }

  if (event.target.matches(".eventos-flujo a")) {
    alert("Hola soy tu amigo y docente digital Jonathan Mircha");
    event.preventDefault();
  }
}); */

// BOM: PROPIEDADES Y EVENTOS

/* window.addEventListener("resize", (event) => {
  console.clear();
  console.log("Evento Resize");
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  console.log(window.outerWidth);
  console.log(window.outerHeight);
  console.log(event);
});

window.addEventListener("scroll", (event) => {
  console.clear();
  console.log("Evento de Scroll");
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(event);
});

window.addEventListener("load", (event) => {
  console.log("Evento de Load");
  // Donde se encuentra la ventana del navegador con respecto al total de la pantalla del monitor(o monitores).
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(event);
});

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Evento DOMContentLoaded");
  // Donde se encuentra la ventana del navegador con respecto al total de la pantalla del monitor.
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(event);
}); */

// BOM: MÉTODOS DEL BOM

// window.alert('Alerta')
// window.confirm('Confirmación')
// window.prompt("Aviso");
// alert('Alerta')
// confirm('Confirmación')
// prompt('Aviso')

/* const $openBtn = document.getElementById("abrir-ventana");
const $closeBtn = document.getElementById("cerrar-ventana");
const $printBtn = document.getElementById("imprimir-ventana");
let page;

$openBtn.addEventListener("click", (event) => {
  page = open("https://jonmircha.com");
});

$closeBtn.addEventListener("click", (event) => {
  page.close();
});

$printBtn.addEventListener("click", (event) => {
  print();
}); */

// BOM: OBJETOS: URL, HISTORIAL Y NAVEGADOR

/* console.log("Objeto Location");
console.log(window.location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.pathname); */

/* console.log("Objeto History");
console.log(history);
console.log(history.length); */

/* console.log("Objeto Navigator");
console.log(navigator);
console.log(navigator.userAgent);
console.log(navigator.connection);
console.log(navigator.usb) */


