// document.getElementById("seccion").innerHTML = 'UNO'
// document.getElementsByClassName("caja")[0].innerHTML = "UNO";
console.log(document.getElementsByClassName("caja"));

// document.getElementsByTagName("div")[2].innerHTML = "TRES";
console.log(document.getElementsByTagName("div"));

// document.querySelector(".caja").innerHTML = "Nuevo UNO";

console.log(document.querySelectorAll(".caja"));

console.log(document.querySelector(".caja .contenido"));

// document.querySelector(".caja .contenido").innerHTML = "Nuevo TRES";

// document
//   .getElementsByClassName("caja")[2]
//   .getElementsByClassName("contenido")[0].innerHTML = "Nuevo TRES";

let cajas = document.getElementsByClassName("caja"); // Actua como una referencia o vinculación.

// cajas[2].innerHTML = 'Hello'

document.getElementById(
  "seccion"
).innerHTML += `<h1 class="caja">Total de cajas: ${cajas.length}</h1>`;

document.getElementById(
  "seccion"
).innerHTML += `<h1 class="caja">Total de cajas: ${cajas.length}</h1>`;


