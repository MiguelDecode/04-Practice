let nota = 0;
subirNota();
console.log(extra); // 7
console.log(PUNTOS); // Uncaught ReferenceError

function subirNota() {
  nota = 2;
  extra = 7; // Pasa a ser una variable global var
  console.log(nota); // 2
  const PUNTOS = 10;
}
