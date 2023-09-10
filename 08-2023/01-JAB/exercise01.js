let nota; 
subirNota()
console.log(nota + 1) // NaN

function subirNota(){
  let nota = 5;
  nota = 9;
  console.log(nota) // 9
  console.log(typeof nota) // number
}