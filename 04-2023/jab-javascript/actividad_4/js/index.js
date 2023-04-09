/*
   Utilizando: -Primero forEach y luego for | innerHTML
   Sin usar:   -insertAdjacentHTML, find, findindex
               -concat, indexOf, map
               -el operador de propagación ([...])

   El resultado correcto final es:
   ["Ataúlfo","Atanagildo","Ervigio","Teodorico"]
*/

const uno = ["Ataúlfo", "Ervigio", "Atanagildo", "Ervigio"];
const dos = ["Atanagildo", "Ervigio", "Teodorico", "Ataúlfo"];

const $container = document.querySelector(".container");

let newArr = [];


uno.forEach((el) => {
  if (newArr.includes(el)) {
  } else {
    newArr.push(el);
  }
});

dos.forEach((el) => {
  if (newArr.includes(el)) {
  } else {
    newArr.push(el);
  }
});

let reverseArr = [];

for (let i = newArr.length - 1; i >= 0; i--) {
  reverseArr.push(newArr[i]);
}

console.log(reverseArr);

reverseArr.map((el) => {
  $container.insertAdjacentHTML("beforeend", `<h1>${el}</h1>`);
});
