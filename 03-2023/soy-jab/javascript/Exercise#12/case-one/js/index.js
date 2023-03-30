const linksContainer = document.querySelector(".enlaces");
const menu = document.querySelector(".burger");

/* function burger(){  
  Es NECESARIO saber si ."enlaces" está visible o no (utilizando el valor de la propiedad 'display')
 } */

menu.addEventListener("click", (event) => {
  const display = window.getComputedStyle(linksContainer).display;

  if (display === "grid") {
    // linksContainer.style.display = "none";
    linksContainer.classList.add("ocultar");
    linksContainer.classList.remove("mostrar");
  } else {
    // linksContainer.style.display = "grid";
    linksContainer.classList.add("mostrar");
    linksContainer.classList.remove("ocultar");
  }
});
