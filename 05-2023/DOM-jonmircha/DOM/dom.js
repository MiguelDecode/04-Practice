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

// DOM: Nodos, Elementos y Selectores

/* document.getElementsByTagName("li"); // Don't use
document.getElementsByClassName("card"); // Don't use
document.getElementsByName("nombre"); // Don't use
document.getElementById("menu");
document.querySelector("#menu");
document.querySelectorAll("a"); */

// DOM: Atributos y Data-Attributes

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

const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscríbete a mi canal y comparte";
console.log($linkDOM.hasAttribute("data-description"));
