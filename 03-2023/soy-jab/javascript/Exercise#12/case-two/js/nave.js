/* window.onload=inicio;
let nave;

function inicio(){
    nave=document.querySelector("#nave");
    // Aquí vendría tu código
    console.log("left: "+____);
    console.log("top: "+____);    
    console.log("bottom: "+_____);
    console.log("altura de la nave: "+____);
} */

const rocket = document.getElementById("nave");

console.log(`Left: ${rocket.offsetLeft}px`);
console.log(`Top: ${rocket.offsetTop}px`);
console.log(`Altura de la nave: ${rocket.offsetHeight}px`);
console.log(`Ancho de la nave: ${rocket.offsetWidth}px`);

const heightPage = document.body.offsetHeight;

console.log(`Altura de la página: ${heightPage}px`);

const bottomRocket = heightPage - rocket.offsetHeight - rocket.offsetTop;

console.log(`Distancia del bottom de la nave al final de la página ${bottomRocket}px`);
