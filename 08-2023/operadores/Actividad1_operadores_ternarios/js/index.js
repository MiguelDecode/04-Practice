// Valor a modificar
let nota = 10;

let $result = document.querySelector(".resultado");
let $note = document.querySelector(".nota");

const drawResult = (cssClass, text) => {
  $result.classList.add(cssClass);
  $result.innerHTML = `${text}`;
};

nota >= 5 && nota <= 10
  ? drawResult("aprobado", "Has aprobado")
  : drawResult("suspendido", "Has suspendido");

// For change the text in the nota box
nota > 10
  ? ($note.innerHTML = "No te flipes")
  : nota >= 9
  ? ($note.innerHTML = "Excelente")
  : nota >= 7
  ? ($note.innerHTML = "Notable")
  : nota >= 5
  ? ($note.innerHTML = "Aprobado")
  : nota >= 0
  ? ($note.innerHTML = "Suspendido")
  : ($note.innerHTML = "No te flipes");

/*
A mostrar en el <div class="resultado">
Si es de 5 a 10: "¡¡Has APROBADO!!"(color "green")
o sinó: "Has suspendido" (color "red")

A mostrar en el <div class="nota">
De 9 en adelante:       "Excelente"
De 7 a menos de 9:      "Notable"
De 5 hasta menos de 7:  "Aprobado"
Menos de 5:             "Suspendido"
Menos de 0 o más de 10: "No te flipes"
*/

/* Usar sólo TERNARIOS
(...) ? :
*/
